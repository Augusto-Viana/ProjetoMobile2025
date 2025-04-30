import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/controller";

export function Login ({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");

    const VerifyUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('Usuário logado com sucesso!!!', userCredential.user.email)
            navigation.navigate('Tabs')
        })
        .catch((error) => {
            console.log('erro!', error.message);
        })
    }

    return (
    <View style={styles.login}>
        <View style={styles.box}>
            <View>
                <Text style={styles.text}>LOGIN DA ZÉCAFLIX</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input2} 
                placeholder='E-mail' 
                value={email}
                onChangeText={setEmail}/>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input2} 
                    placeholder='Senha' 
                    value={password}
                    onChangeText={setSenha}
                    secureTextEntry = {true}/>
            </View>
            <View style={styles.button}>
                <Button title="ENTRAR" color="#DB0F00"
                onPress={VerifyUser}/>
            </View>
            <View style={styles.button}>
                <Button title="CADASTRAR-SE" color="#DB0F00"
                onPress={() => navigation.navigate('Register')}/>
            </View>
        </View>  
    </View>
);
}

const styles = StyleSheet.create({
    login: {
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
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    box: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",    
    }
})