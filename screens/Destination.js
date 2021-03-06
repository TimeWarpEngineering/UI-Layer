import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import Title from "../components/MenuInputTitle";
import Inputs from "../components/Inputs"
// import WelcomeHeader from "../components/WelcomeHeader";
import TouchableHeader from "../components/TouchableHeader";
import MenuLogo from "../components/MenuLogo";
import Next from "../components/NextBtn";
import destination from "../assets/destinationLabel.png";
import { StackNavigator, } from 'react-navigation';

 //  For the HERC database input, the fields that I believe we will need for the Bunker Office input are:
// • text-validators   Bar ID (a code system I’ll be using with bar number and date - eg: 0001–1-11-18)
// • text-validators   Vault Location ID (a placement within the vault system I’ll be using - eg: 1B1, which is Row 1, back wall, spot 1 from left)
// •    Bar Serial #
// •    Mint (eg: Royal Canadian Mint)
// •    Weight
// •    Purity
// •    Date Received
// •    Date Processed
// •    Supplier
// •    Picture 1 upload
// •    Picture 2 upload
// •    Picture 3 upload
// •    Analysis CSV upload
// Inpu Validators

export default class Destination extends Component {
  static navigationOptions = {
    header: null
  
  }
  constructor(props){
    super(props);
   
   
    } 
  componentDidMount(){
    this.setState({location: 'destination'});
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        
          <TouchableHeader onPress={() => navigate('MenuOptions')} />
        
        <Title image={destination} />
      
        <ScrollView contentContainerStyle={styles.menu}> 
          <View style={styles.scrollContent}>
        
            <View style={styles.field}>
             <Text style={styles.label}>Bar ID</Text>
              <TextInput
                style={styles.input}
                onChangeText={(Bar_Id) => this.setState({Bar_Id})}
                placeholder="Bar ID"
              />
             </View>  

            <View style={styles.field}>
             <Text style={styles.label}>Bar Serial</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(Bar_Serial) => this.setState({Bar_Serial})}
                placeholder="Bar Serial"
              />
            </View>  

            <View style={styles.field}>
             <Text style={styles.label}>Vault Location</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(Vault_Location) => this.setState({Vault_Location})}
                placeholder="Vault Location"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Weight</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(Weight) => this.setState({Weight})}
                placeholder="Weight"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Purity</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(Purity) => this.setState({Purity})}
                placeholder="Purity"

              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Date Received</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(Date_Received) => this.setState({Date_Received})}
                placeholder="Date Recieved"
                />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Date Processed</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(Date_Processed) => this.setState({Date_Processed})}
                placeholder="Date Processed"
              />
            </View>
            
            <View style={styles.field}>
             <Text style={styles.label}>Mint</Text>  
              <TextInput
                style={styles.input}
                onChangeText={(Mint) => this.setState({Mint})}
                placeholder="Mint"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Supplier</Text>     
              <TextInput
                style={styles.input}
                onChangeText={(Supplier) => this.setState({Supplier})}
                placeholder="Supplier"
              />
            </View>
           </View>   
          </ScrollView>       
              
              <Next onPress={() => {
                console.log(this.state);
                navigate('Confirm', {image: 'destination', values: this.state})}} 
                />
      </View>
    )
  }
}
// herc background color #021227
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021227',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  menu: {
    height: 500,
    width: "90%",
    // justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#021227',
    paddingTop: 5,
    paddingBottom: 5
  },
  scrollContent: {
    flex: 1,
    padding: 2,
    justifyContent: "space-around"
  },
  label: {
    color: "white",
    width: 120,
    fontSize: 20.2,
    paddingLeft: 5,
    fontWeight: "600",
    paddingLeft: 5
  },
  field: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",


    backgroundColor: "#021227",

    // marginTop: 5,
    // marginBottom: 5,
    alignItems: "center"
    // paddingLeft: 5
  },

  input: {
    width: 150, 
    height: 40,
    textAlign: "center",
    backgroundColor: 'transparent', 
    // margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1,
    // paddingLeft: 1
  }
});