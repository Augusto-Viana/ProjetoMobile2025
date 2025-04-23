import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Card from "../components/card";

export default function Products({navigation}) {
    const [produtos, setProdutos] = useState([
        {id: 1, nome: "Camiseta", valor: 50.00, imagem: "https://estampalize.com.br/wp-content/uploads/2022/12/camiseta-colorida-com-estampa-dourada-1.webp"},
        {id: 2, nome: "Calça", valor: 45.00, imagem: "https://images.tcdn.com.br/img/img_prod/769687/calca_jeans_masculina_mais_comprida_longa_premium_jamer_2649_1_d32393952c59a63e5a115ae22d492fd0.jpg"},
        {id: 3, nome: "Moletom", valor: 60.00, imagem: "https://images.tcdn.com.br/img/img_prod/774007/moletom_brasil_college_fem_1551_2_a38fd46dfc50c933cd580d885be6e1fb.jpg"},
        {id: 4, nome: "Tênis", valor: 35.00, imagem: "https://imgcentauro-a.akamaihd.net/800x800/97360651A1.jpg"},
    ])
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