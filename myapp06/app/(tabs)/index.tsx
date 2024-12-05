import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

/*
Use um Text para a citação principal, aplicando uma fonte itálica.
Coloque a foto do autor ao lado da citação usando o Image.
Adicione o nome do autor embaixo da foto e estilize a citação com uma borda ou fundo claro para contraste.
*/

export default function QuotePanel() {

  return (
    <View style={styles.corpo}>
      <Text style={styles.frase}>"A única maneira de fazer um excelente trabalho é amar o que você faz."</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }}
        style={styles.imagemAutor}
      />
      <Text style={styles.nomeAutor}>Steve Jobs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  corpo: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },

  frase: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },

  imagemAutor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  nomeAutor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});