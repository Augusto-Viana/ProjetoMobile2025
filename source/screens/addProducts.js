import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/controller";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function AddProducts({navigation}) {
    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");

    const ProductAdd = async () => {
        if(!nome || !valor || !imagem) {
            Alert.alert("Erro", "Campos não preenchidos!");
            return;
        } 
        
        try {
            await addDoc(collection(db, "products"), { 
                imagem, 
                nome, 
                valor: parseFloat(valor),
            });
        
            Alert.alert("Sucesso", "Produto registrado!");

            setNome("");
            setValor("");
            setImagem("");
        } catch(error) {
            console.log("Erro ao cadastrar o produto!" + error)
        }
    };
    
    return (
        <View style={styles.registerP}>
            <View style={styles.box}>
                <View>
                    <Text style={styles.text}>CADASTRO DE PRODUTOS DA ZÉCAFLIX</Text>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.input2} 
                    placeholder='Nome: ' 
                    value={nome}
                    onChangeText={setNome}/>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.input2} 
                        placeholder='Valor: ' 
                        value={valor}
                        onChangeText={setValor}/>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.input2} 
                        placeholder='Endereço da imagem: ' 
                        value={imagem}
                        onChangeText={setImagem}/>
                </View>
                <View style={styles.button}>
                    <Button title="CADASTRAR PRODUTO" color="#DB0F00"
                    onPress={ProductAdd}/>
                </View>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create ({
    registerP: {
        flex: 1,
        backgroundColor: '#000',
        fontSize: 20,
    },
    text: {
        flex: 1,
        fontSize: 40,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        color: "#DB0F00"
    },
    input:{
        justifyContent: "center",
        borderCurve: "circular",
        alignItems: "center",
    },
    input2: {
        height: 40,
        width: 400,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        justifyContent: "center",
        borderCurve: "circular",
        alignItems: "center",
        color: "#DB0F00",
    borderColor: "#DB0F00",
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",    
    },
})