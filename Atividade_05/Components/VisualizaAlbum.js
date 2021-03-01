import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet} from "react-native";

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
  actions: {
    width: "100%",
    marginTop: 25,
    padding: 5,
  },
  wrap: {
    display: "flex",
    padding: 20
  },
});

const VizualizaAlbum = ({ navigation, route }) => {const { album } = route.paramsnavigation.setOptions({ title: `.:${album.name}:.` })
  const [tracks, setTracks] = useState([])

  useEffect(() => { fetch("https://raw.githubusercontent.com/san650/ten/master/apps/music" + album.links.tracks).then(async res => setTracks((await res.json()).tracks))}, [album])

  const buildTracks = () => tracks.map((track, key) => (<Text key={track.id}>{key} - ({track.duration}) {track.title}</Text>))

  return (
    <View style={styles.wrap}>
      {buildTracks()}
      <View style={styles.actions}>
        <Button title="Voltar" onPress={() => navigation.pop()}/>
      </View>
    </View>
  )}

export default VizualizaAlbum
