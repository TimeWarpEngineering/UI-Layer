import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import logo from "../assets/logo.png";
import Title from "../components/MenuInputTitle";
import personal from "../assets/personalLegend.png";

 export default class Legend extends Component {
     static navigationOptions = {
         header: null,
 
        }
      
    render(){
      const { navigate } = this.props.navigation;
      return(
          
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logo} style={styles.menuLogo}/>
            <Image source={personal} style={styles.label} image={personal} /> 
          </View>
         
          <View style={styles.legendInput}>
            <Text style={styles.input}> 10,000 </Text>
            <Image source={logo} style={styles.icon} />
          </View>

          <TouchableHighlight style={styles.bigButton}
            onPress={()=> navigate('Tee')}
            >
          <Text style={{color: "white"}}>  Enter Trusted Execution Environment </Text>

          </TouchableHighlight>
          </View>


         )};
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      // width: "100%",
      backgroundColor: '#021227',
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      height: "30%",
      width: 360,
      backgroundColor: '#021227',
      alignSelf: 'center',
      alignItems: 'center',
      margin: 5


    },
    menuLogo: {
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        width: 200,
        resizeMode: "contain",
        backgroundColor: '#021227',
      },
      label: {
        height: 50,
        width: '80%',
        resizeMode: 'contain'
      },
    legendInput: {
      alignSelf: "center",
      padding: 5,
      width: 350, 
      height: 80,
      alignItems: 'center',
      margin: 1,
      marginBottom: 10,
      backgroundColor: "#14283f",
      justifyContent:"space-between", 
      flexDirection: "row"
      },
    input:{
      backgroundColor: '#021227',
      width: 200,
      height:50,
      textAlign: "center",
      justifyContent: "flex-end",
      color: "white", 
      paddingTop: 15
    },
    icon: {
        height: 30,
        width: 80, 
        alignSelf:"center"
    },
    bigButton: {

      backgroundColor: "#14283f",
      height: 80,
      width: 350,
      justifyContent:"center",
      alignItems: "center",
      marginBottom: 10

      

    }
    })