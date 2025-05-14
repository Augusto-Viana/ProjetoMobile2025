import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { db } from "../services/controller";
import { collection, getDocs } from "firebase/firestore";

import Card from "../components/card";

export default function Products({navigation}) {
    const [produtos, setProducts] = useState([])

        useEffect(() => {
            async function carryProducts() {
                try {
                    const querySnapshot = await getDocs(collection(db, 'products'));
                    const list = [];
                    querySnapshot.forEach((doc) => {
                        list.push({ id: doc.id, ...doc.data() });
                    });
                    setProducts(list);
                } catch(error) {
                    console.log("Erro ao buscar o produto: " + error);
                }
            }

            carryProducts();
        }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Produtos:</Text>
            <FlatList
                data = {produtos}
                renderItem={({item}) => (
                    <Card
                        nome={item.nome}
                        valor={item.valor}
                        imagem={item.imagem}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
            {/* {produtos.map((item) => (
                <Text style={styles.productText}>{item.nome} = R$ {item.valor}</Text>
            ))} */}
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000"
    },
    text: {
        fontSize: 40,
        color: "#DB0F00",
        alignSelf: "center",
    },
})