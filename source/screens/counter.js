import {StyleSheet, Text, View,  TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function Counter ({navigation}) {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function Up() {
        setCounter(counter + 1)
    }
    function Down() {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zécaflix Counter Max</Text>
            <Text style={styles.text}>Contador: {counter}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={Up} style={styles.button}>
                    <Text style={styles.buttontxt}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Down} style={styles.button}>
                    <Text style={styles.buttontxt}>-</Text> 
                </TouchableOpacity>
            </View>

            <View style={styles.input}>
                <TextInput placeholder='Nome: ' placeholderTextColor={'red'} value={name} onChangeText={setName} style={styles.inputText}/>
                <TextInput placeholder='E-mail: ' placeholderTextColor={'red'} value={email} onChangeText={setEmail} style={styles.inputText}/>
            </View>
            <Text style={styles.text}>Oi, {name}, seu e-mail é {email}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#000"
    },
    title: {
        fontSize: 40,
        color: "#DB0F00"
    },
    text: {
        textAlign: "center",
        color: "#DB0F00",
        fontSize: 30
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    button: {
        backgroundColor: "#DB0F00",
        width: 100,
        height: 50,
        borderRadius: 20
    },
    buttontxt: {
        textAlign: "center",
        color: "white",
        fontSize: 30
    },
    input: {
        fontSize: 20,
    },
    inputText: {
        color: "#DB0F00",
        borderColor: "#DB0F00"
    }
})