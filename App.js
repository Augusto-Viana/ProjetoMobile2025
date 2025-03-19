import { StyleSheet, Text, View } from 'react-native';
import {Gallery, Profile, Favorites} from "./components/gallery";
import {Teste1} from "./components/teste";
import {Home} from "./screens/home";
import {Login} from "./screens/login";

export default function App() { //Puxa os componentes e os mostra
  return (
    <View style={styles.container}> 
      {/* <Profile/> */}
      {/* <Gallery/> */}
      {/* <Favorites/> */}
      {/*<Teste1/>*/}
      {/* <Home/> */}
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({ //Criação da página
  container: {
    flex: 1,
  },
});
