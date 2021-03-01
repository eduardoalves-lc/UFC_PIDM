import React, {useEffect, useState} from 'react'
import { View, ScrollView, StyleSheet, Text } from "react-native";
import CartaoAlbum from "./CartaoAlbum";

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
  wrap: {
    padding: 10,
    display: "flex",
    height: "100%",
  }
});

const Home = ({ navigation }) => {
  const [albuns, setAlbuns] = useState([])

  useEffect(() => { fetch("https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json").then(async res => setAlbuns((await res.json()).albuns))}, [])

  const buildAlbuns = () => albuns.map(album => (<CartaoAlbum navigation={navigation} album={album} key={album.id}/>))

  return (
    <ScrollView style={styles.wrap}>{buildAlbuns()}</ScrollView>
  )}

export default Home
