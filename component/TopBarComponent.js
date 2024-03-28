import { Image, StyleSheet, Text, View } from "react-native"

const TopBarComponent = ()=>{
    return (
        <View style={styles.container}>
            <Image source={require('../assets/src/logo_bni_small.png')}/>
            <View style={styles.horizontal}>
                <Image style={styles.notification} source={require('../assets/src/ic_notification.png')} />
                <View style={[styles.horizontal, styles.badge]}>
                    <Image  source={require('../assets/src/ic_help.png')} />
                    <Text style={styles.help}>Bantuan</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        paddingTop:30,
        justifyContent: 'space-between',
    },
    horizontal:{
        flexDirection: 'row',
    },
    badge:{
        alignItems:"center",
        backgroundColor:'#FFF',
        borderRadius: 50,
        padding:8
    },
    notification:{
        alignSelf:'center',
        marginRight:16
    },
    help:{
        color:'#FF6600',
        marginLeft: 8,
    }

})

export default TopBarComponent