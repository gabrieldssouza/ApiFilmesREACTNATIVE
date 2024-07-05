import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Filme() {
  const { id } = useLocalSearchParams();
  const [filme, setFilme] = useState('');

  useEffect(() => {
    function loadFilms() {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=43b826f946934eb31ff49952154abb88&language=pt-BR`;

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setFilme(json);
        })
        .catch((error) => {
          console.error('Erro ao carregar API:', error);
        });
    }
    loadFilms();
  }, [id]);

  if (!filme) {
    return (
      <View style={styles.body}>
        <ActivityIndicator size={60} style={{flex: 1}}/>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${filme.backdrop_path}` }}
          style={styles.image}
        />
        <Text style={styles.title}>{filme.title}</Text>
        <TouchableOpacity style={styles.btn}><Text style={{fontWeight: 'bold', fontSize: 17,}}>Assistir</Text></TouchableOpacity>
        <Text style={styles.overview}>{filme.overview}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#001428'
  },
  container: {
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#001428'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  btn: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginBottom: 10,
    borderRadius: 5
  },
  overview: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
  },
});
