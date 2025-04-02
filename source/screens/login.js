import {StyleSheet, Text, View, Image, TextInput, ImageBackground, Button} from "react-native"

export function Login ({navigation}) {
    return(
    <View style={styles.login}>
        <View style={styles.box}>
            <View>
                <Text style={styles.text}>LOGIN DA ZÉCAFLIX</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input2} placeholder='Digite seu nome aqui: '/>
                <TextInput style={styles.input2} placeholder='Digite sua idade aqui: '/>
            </View>
            <View style={styles.button}>
                <Button title="LOGIN" color="#DB0F00"
                onPress={() => navigation.navigate('Tabs')}/>
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
    justifyContent: "center",
    alignItems: "center",
},
box: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",    
}
})