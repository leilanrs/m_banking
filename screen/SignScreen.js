import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native"
import { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebaseConfig";
import { useState } from "react";

const SignInScreen = () => {
    const [email, setEmail] = useState('')
    const [passsword, setPassword] = useState('')


    const signIn = () => {
        signInWithEmailAndPassword(auth, email, passsword)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });

    }

    const signUp = () => {
        createUserWithEmailAndPassword(auth, "leila@gmail.com", "12345678")
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage);
            });
    }


    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image
                    style={styles.image}
                    source={require('../assets/src/BNI_logo.png')}
                />
                <Text style={styles.tagline}>Melayani Negeri Kebanggaan Bangsa</Text>
            </View>
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <Button color="#FF6600" style={styles.roundedButton} title='Login' onPress={() => { signIn() }}></Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 20, alignItems: 'center' }}>
                    <Image style={styles.item} source={require('../assets/src/ic_wallet.png')} />
                    <Text style={styles.text}>E-Wallet</Text>
                </View>
                <View style={{ margin: 20, alignItems: 'center' }}>
                    <Image style={styles.item} source={require('../assets/src/ic_qris.png')} />
                    <Text style={styles.text}>QRIS</Text>
                </View>
                <View style={{ margin: 20, alignItems: 'center' }}>
                    <Image style={styles.item} source={require('../assets/src/lainnya.png')} />
                    <Text style={styles.text}>Lainnya</Text>
                </View>
            </View>
            <View style={styles.spacer}></View>
            <View style={{ alignItems: 'center' }}>
                <View style={[styles.horizontal, styles.badge, styles.footer]}>
                    <Image source={require('../assets/src/ic_help.png')} />
                    <Text style={styles.help}>Bantuan</Text>
                </View>
                <Text style={styles.version}>v5.11.1</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: { width: '80%', marginHorizontal: '20%' },
    tagline: {
        fontSize: 16,
        color: '#006599',
        fontWeight: 'bold',
        padding: 20
    },
    spacer: {
        height: 150
    },
    image: {
        width: 180,
        height: 58,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#3A3541',
        padding: 10,
        borderRadius: 10
    },
    button: {
        color: '#FF6600',

    },
    roundedButton: {
        borderRadius: 10, // Adjust the value for desired roundness
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: 60,
        height: 60
    },
    text: {
        color: "rgba(58, 53, 65, 0.68)",
    },
    footer: {
        fontSize: 12,
        marginTop: 5,
        opacity: 0.6,
    },
    version: {
        marginTop: 30,
        fontSize: 12,
        opacity: 0.6
    },
    badge: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#FEE1CE',
        borderRadius: 50,
        padding: 8
    },
});


export default SignInScreen