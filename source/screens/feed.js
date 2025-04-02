import {StyleSheet, Text, View, Image, TextInput, ImageBackground, Button, ScrollView} from "react-native"

export function Feed ({navigation}) {
    return(
        <ScrollView>
            <View style={styles.feed}>
                <Text style={styles.titulo}>Feed da Zécaflix</Text>
                <Text style={styles.text1}>A alguns cliques de distância, por apenas R$ 9.99 por mês, você aproveitar nossa biblioteca com mais de 20.000 exemplares(Filmes, séries, etc...) 100% verdadeiros e de qualidade!</Text>
                <Text style={styles.text2}>Por que perder tempo? A Zécaflix pode proporcionar qualquer emoção ou sentimento que sua pobre alma simplória sequer poderia querer! Ação? Sim! Romance? Meio meloso mas sim! Terror? De ***** nas calças! Tudo isso por apenas R$ 9.99 ao mês! R$ 9.99? Sim! R$ 9.99?? SIM! R$ 9.99?!?! EU DISSE SIM, CARAMBA! O que está esperando? Assina logo, vai! Toma aí uns exemplos dos nossos belíssimos exemplares:</Text>
                <View style={styles.imgs}>
                    <Image style={styles.img} source={{uri:'https://m.media-amazon.com/images/I/91RzpxQktRL.jpg'}}/>
                    <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKr78LlQAp91G2kspqG75p-EFtZ8r11hxEVg&s'}}/>
                </View>
                <View style={styles.button}>
                    <Button title="MEU DEUS PRECISO SABER MAIS!!!" color="#DB0F00"
                    onPress={() => navigation.navigate('Home')}/>
                </View>
                <Text style={styles.text3}>OBS: Zécaflix não se responsabiliza por: Vício, emoções fortes, quebras de relacionamento, obsessão pelo app e picos de dopamina.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    feed: {
        flex: 1,
        backgroundColor: '#000',
        fontSize: 20,
    },
    titulo: {
        flex: 1,
        fontSize: 40,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#DB0F00"
    },
    text1: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#DB0F00",
        marginBottom: 30
    },
    text2: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#DB0F00"
    },
    text3: {
        flex: 1,
        fontSize: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#DB0F00"
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30
    },
    imgs: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 30
    },
    img : {
        width: 160,
        height: 160,
    },
})

