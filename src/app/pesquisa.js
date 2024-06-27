import React, { useState, useEffect } from 'react';
import {Link} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Pesquisar() {
  const [nomefilme, setNomefilme] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    function loadFilms() {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=43b826f946934eb31ff49952154abb88&query=${nomefilme}&page=1`;

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setFilmes(json.results); // Assuming 'results' contains the array of movies
        })
        .catch((error) => {
          console.error('Erro ao carregar API:', error);
        });
    }

    loadFilms();
  }, [nomefilme]);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder='Insira o nome do filme'
            style={styles.input}
            value={nomefilme}
            onChangeText={(nome) => setNomefilme(nome)}
          />
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {filmes.map((item) => (
          <ScrollView>
          <View key={item.id}>
          <Link href={`/Filme/${item.id}`}>
            <View style={styles.filmes}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                style={styles.image}
              />
            </View>
            </Link>
          </View>
          </ScrollView>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: '90%',
    height: 35,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btn: {
    width: '10%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000014',
    borderRadius: 5,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  body: {
    flex: 1,
    backgroundColor: '#001428',
    paddingHorizontal: 10,
  },
  container: {
    marginTop: 10,
  },
  image: {
    width: 370,
    height: 200,
    marginVertical: 10,
    borderRadius: 5,
  },
  filmes: {
    marginBottom: 10,
    
  },
});
