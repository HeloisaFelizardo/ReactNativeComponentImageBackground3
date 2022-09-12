import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
 
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitulo:{
    fontSize: 16,
    textAlign: "center",
  },

  card: {
    width: 300,
    height: 150,
    marginTop: 30,
  },
  cardTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },
  cardParagrafo: {
    color: '#fff',
    textAlign: "center",
  }
});

export default estilos;