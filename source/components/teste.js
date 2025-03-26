import { registerWebModule } from "expo";
import {StyleSheet, Text, View, Image} from "react-native"

export function Teste () {
    return(
        <View style={styles.container}>
            <Text>Teste!</Text> 
        </View>
    );
}

export function Teste1 () {
    return(
        <View style={styles.teste1}>
            <View style={styles.text1}>
                <Text style={styles.texts}>Saca só nesses memes!</Text> 
            </View>
            <View style={styles.imgs}>
                <Image style={styles.img1} source={require('../assets/dababy-car-gif-9.gif')}/>
                <Image style={styles.img1} source={require('../assets/dancing-steve.gif')}/>
            </View>
            <View style={styles.text2}>
                <Text style={styles.texts}>Legal né?</Text>
            </View>
            <View style={styles.imgs}>
                <Image style={styles.img2} source={require('../assets/rickroll.gif')}/>
                <Image style={styles.img2} source={require('../assets/gigachad.gif')}/></View>
            <View style={styles.text3}>
                <Text style={styles.texts}>Nada como umas risadas pra melhorar o dia.</Text>
            </View>
        </View> //Pra poder fazer a tela aparecer bonitinhas assim, foi usado vários views diferentes para cada coisa, assim, permitindo colocar eles em lugares diferentes uns dos outros.       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //O quanto aquilo ocupa na tela
        alignItems: "center", //Alinha os itens de acordo com o parâmetro
        justifyContent: "center", //Descreve como os componentes devem ser alinhados
        backgroundColor: "#20CFFF"
    },
    teste1: {
        flex:1,
        backgroundColor: '#FFA000',
        fontSize: 20,
    },
    img1 : {
        width: 130,
        height: 130,
    },
    img2 : {
        width: 130,
        height: 130,
    },
    text1: {
        flex: 1
    },
    text2 : {
        flex: 2,
        alignSelf: 'flex-end',
        marginRight: 20 //Aplica uma margem na direita do componente
    },
    text3 : {
        flex: 3,
        alignSelf: 'center' //Funciona como o alignItems, porém, ele consegue afetar apenas o componente filho, sem afetar o parente
    },
    imgs: {
        justifyContent: 'space-around',
        flexDirection: 'row' //Define a direção do flex
    },
    texts: {
        margin: 'auto' //Aplica uma margem em geral
    }
})