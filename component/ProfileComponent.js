import { StyleSheet, Image, Text, View } from "react-native"

const ProfileComponent=({name})=>{
    return (
        <View style={styles.container}>
            <Image source={require('../assets/src/Avatar.png')}/>
            <View style={styles.spaceer}>
                <Text style={styles.welcome}>Selamat Datang</Text>
                <Text>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems:'center',
    },
    spaceer:{
        marginLeft:20,
    },
    welcome:{
        color:'#3A3541Ad'
    }

})

export default ProfileComponent