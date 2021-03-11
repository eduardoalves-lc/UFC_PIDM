import React from './src/node_modules/react';
import { View, Text, StyleSheet, Button, Image  } from './src/node_modules/react-native';
import Firebase from './src/Firebase';

export default function App() {
  return <Firebase/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

