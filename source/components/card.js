import { View, Text, StyleSheet, Image } from "react-native";

export default function Card({nome, valor, imagem}) {
    return (
        <View style={styles.card}>
            <Image style={styles.images} source={{uri: imagem}}/>
            <View>
                <Text style={styles.productText}>{nome}</Text>
                <Text style={styles.productText}>R$ {valor.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: "#DB0F00",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    images: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    productText: {
        color: "#000"
    },
})