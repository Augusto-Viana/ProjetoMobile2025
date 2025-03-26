import { registerWebModule } from "expo";
import {StyleSheet, Text, View, Image} from "react-native"

export function Gallery () {
    return(
        <View style={styles.container}>
            <Text>Esta é a galeria!</Text> 
        </View>
    );
}

export function Favorites () {
    return(
        <View style={styles.favorites}>
            <Text>Este é o favoritos!</Text> 
            <Image style={styles.img} source={require('../assets/dababy-car-gif-9.gif')}/>
            <Image style={styles.img} source={require('../assets/dababy-car-gif-9.gif')}/>
            <Text>Este é o favoritos!</Text>
            <Image style={styles.img} source={require('../assets/dababy-car-gif-9.gif')}/>
            <Image style={styles.img} source={require('../assets/dababy-car-gif-9.gif')}/>
            <Text>Este é o favoritos!</Text>
        </View>
    );
}

export function Profile () {
    return(
        <View style={styles.profile}>
            <Text>Este é o perfil!</Text>
            <Image style={styles.img} source={{uri:'https://media.tenor.com/x8v1oNUOmg4AAAAM/rickroll-roll.gif'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#20CFFF"
    },
    profile: {
        flex:1,
        backgroundColor: '#F11',
        alignItems: "center",
        justifyContent: "center",
    },
    favorites: {
        flex:3,
        backgroundColor: '#10F',

    },
    img : {
        width: 150,
        height: 150,

    }
})