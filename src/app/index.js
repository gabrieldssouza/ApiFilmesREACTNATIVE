import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {useState, useEffect} from 'react';
import {Link} from 'expo-router'

export default function Home() {
  const [filme, setFilme] = useState([]);

    useEffect(() => {
        function loadFilms() {
            let url = "https://api.themoviedb.org/3/movie/popular?api_key=43b826f946934eb31ff49952154abb88";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setFilme(json.results);
                })
                .catch((error) => {
                    console.error('Erro ao carregar API:', error);
                });
        }
        loadFilms();
    }, []);

    const [filmetop, setFilmetop] = useState([]);

    useEffect(() => {
        function loadFilmstop() {
            let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=43b826f946934eb31ff49952154abb88";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setFilmetop(json.results);
                })
                .catch((error) => {
                    console.error('Erro ao carregar API:', error);
                });
        }
        loadFilmstop();
    }, []);

    const [filmeacao, setFilmeacao] = useState([]);

    useEffect(() => {
        function loadFilmesAcao() {
            let url = "https://api.themoviedb.org/3/discover/movie?api_key=43b826f946934eb31ff49952154abb88&with_genres=28";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setFilmeacao(json.results);
                })
                .catch((error) => {
                    console.error('Erro ao carregar API:', error);
                });
        }
        loadFilmesAcao();
    }, []);

    const [filmecomedia, setFilmecomedia] = useState([]);

    useEffect(() => {
        function loadFilmesComedia() {
            let url = "https://api.themoviedb.org/3/discover/movie?api_key=43b826f946934eb31ff49952154abb88&with_genres=35";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setFilmecomedia(json.results);
                })
                .catch((error) => {
                    console.error('Erro ao carregar API:', error);
                });
        }
        loadFilmesComedia();
    }, []);

    const [filmeterror, setFilmeterror] = useState([]);

    useEffect(() => {
        function loadFilmesTerror() {
            let url = "https://api.themoviedb.org/3/discover/movie?api_key=43b826f946934eb31ff49952154abb88&with_genres=27";

            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setFilmeterror(json.results);
                })
                .catch((error) => {
                    console.error('Erro ao carregar API:', error);
                });
        }
        loadFilmesTerror();
    }, []);

  return (
    <>
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.genero}>
        <StatusBar style="auto" />
        <Text style={{color: 'white', marginLeft: 10, marginTop: 5}}>Filmes Recomendados</Text>
        </View>
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filme.map((item) => (
          <Link key={item.id} href={`Filme/${item.id}`}>
          <View style={styles.filmes}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} 
              style={styles.image}
            />
          </View>
          </Link>
        ))}
        </ScrollView>
      </View>

      <View style={styles.genero}>
        <StatusBar style="auto" />
        <Text style={{color: 'white', marginLeft: 10,}}>Filmes aclamados pela crítica</Text>
        </View>
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmetop.map((item) => (
          <Link key={item.id} href={`Filme/${item.id}`}>
          <View style={styles.filmes}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} 
              style={styles.image}
            />
          </View>
          </Link>
        ))}
        </ScrollView>
      </View>

      <View style={styles.genero}>
        <StatusBar style="auto" />
        <Text style={{color: 'white', marginLeft: 10,}}>Filmes de ação</Text>
        </View>
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmeacao.map((item) => (
          <Link key={item.id} href={`Filme/${item.id}`}>
          <View style={styles.filmes}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} 
              style={styles.image}
            />
          </View>
          </Link>
        ))}
        </ScrollView>
      </View>

      <View style={styles.genero}>
        <StatusBar style="auto" />
        <Text style={{color: 'white', marginLeft: 10,}}>Filmes de comédia</Text>
        </View>
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmecomedia.map((item) => (
          <Link key={item.id} href={`Filme/${item.id}`}>
          <View style={styles.filmes}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} 
              style={styles.image}
            />
          </View>
          </Link>
        ))}
        </ScrollView>
      </View>

      <View style={styles.genero}>
        <StatusBar style="auto" />
        <Text style={{color: 'white', marginLeft: 10,}}>Filmes de terror</Text>
        </View>
        <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filmeterror.map((item) => (
          <Link key={item.id} href={`Filme/${item.id}`}>
          <View style={styles.filmes}>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} 
              style={styles.image}
            />
          </View>
          </Link>
        ))}
        </ScrollView>
      </View>

    </View>
    </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#001428',
  },
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#001428',
  },
  genero: {
    backgroundColor: '#001428',
    color: 'white',
  },
  image: {
    width: 100,
    height: 150,
    marginVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  filmes: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    backgroundColor: '#001428'
  },
});
