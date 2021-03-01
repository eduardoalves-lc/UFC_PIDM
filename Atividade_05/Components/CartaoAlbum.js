import React from 'react'
import { View, Text, StyleSheet, Button, Image } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
   },
   headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
   },
   textInput: {
    height: 45,
    width: "95%",
    borderColor: "gray",
    borderWidth: 2,
    paddingLeft: 20
   },
   viewButton: {
    width: "93%",
    margin: 15,
    backgroundColor: "red"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    padding: 4,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001c",
    width: "100%"
  },
  wrap: {
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0000001c",
    marginBottom: 4
  },
   headerImage: {
    height: 50,
    width: 50,
    marginRight: 4
  },
  headerArtist: {
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 4,
  },
  actions: {
    width: "100%",
    padding: 4,
  },
  image: {
    height: 200,
    width: 200,
  },
});

const Separator = () => (<View style={styles.separator} />);
const CartaoAlbum = ({ navigation, album }) => {let image = { uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + album.image}

  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Image source={image} style={styles.headerImage} />

        <View>
          <Text style={styles.headerArtist}>{album.artist}</Text><Text>{album.name}</Text>
        </View>
      </View>

      <Image source={image} style={styles.image} />

      <View style={styles.actions}>
        <Button title="Visualizar Músicas" onPress={() => navigation.navigate('VizualizaAlbum', { album })}/><Separator/>
        <Button title="Comprar" onPress={() => console.log("Pressed")}/>
      </View>
    </View>
  )}

export default CartaoAlbum
