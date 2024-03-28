import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Button } from 'react-native';
import TopBarComponent from '../component/TopBarComponent';
import ProfileComponent from '../component/ProfileComponent';
import CardComponent from '../component/CardComponent';
import CategoryComponent from '../component/CategoryComponent';
import MenuComponent from '../component/MenuComponent';
import PromoComponent from '../component/PromoComponent';
import simulateGetAccount from '../utils/simulateGetAccount';
import { useEffect, useState } from 'react';
import { app, getAuth, auth, signOut } from "../firebaseConfig";


const HomeScreen = () => {
    const [account, setAccount] = useState()

    const handleAsync = async () => {
        try {
            const asyncResult = await simulateGetAccount()
            console.log('Berhasil', asyncResult)
            setAccount(asyncResult)
        } catch (exception) {
            console.error('Catch:' + exception)
        } finally {

        }
    }

    useEffect(() => {
        handleAsync()
    }, [])

    const signOutUser = () => {
        console.log("SignOut called")
        signOut(auth).then(() => {
            console.log("Sign-Out Succesful")
        }).catch((error) => {
            console.error(error)
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TopBarComponent />
                <ProfileComponent name={account && account.name} />
                <CardComponent balance={account && account.balance} accountNo={account && account.accountNo} poin={account && account.poin} />
                <StatusBar style="auto" />
            </View>
            <View style={styles.midContainer}>
                <CategoryComponent />
                <MenuComponent />
            </View>
            <View style={styles.spacer}></View>
            <View>
                <PromoComponent></PromoComponent>
                <Button color="#FF6600" title='Log Out' onPress={() => { signOutUser() }}></Button>

            </View>

            {/* <TouchableOpacity onPress={handleAsync}>
                <Text>Klik Me!</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginLeft:10,
        // marginRight: 10,

    },
    topContainer: {
        backgroundColor: '#FEE1CE',
        padding: 10
    },
    midContainer: {
        padding: 10
    },
    spacer: {
        height: 5,
        backgroundColor: '#FEE1CE',
    }
});


export default HomeScreen