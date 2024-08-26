import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// Certifique-se de que o caminho da imagem está correto
const image = require('../assets/images/img_fundo.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        
        <Text style={styles.title}>JOGOS OLIMPICOS</Text>

        <Text style={styles.subtitle}>Principais modalidades olimpicas</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#F2CD5C',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#F2CD5C',
    fontSize: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#fff',
    fontSize: 20,
  },
});



// <View
//style={{
 // flex: 1,
  //justifyContent: 'center',
 // alignItems: 'center'
//}}
//>