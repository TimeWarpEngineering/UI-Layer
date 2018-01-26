import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import pictures from "../assets/picturesLabel.png";
import csv from "../assets/csvLabel.png";
import Submit from "../components/SubmitBtn";
import { ImagePicker } from 'expo';
// import Imagepicker from  "../components/ImagePicker";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB4c-dlOic0fYfcCUwNbfDtwxj-QDcujOA",
    authDomain: "hercone-8025f.firebaseapp.com",
    databaseURL: "https://hercone-8025f.firebaseio.com",
    projectId: "hercone-8025f",
    storageBucket: "hercone-8025f.appspot.com",
    messagingSenderId: "329151475948"
};

firebase.initializeApp(firebaseConfig);

export default class FileUp extends Component {
  static navigationOptions = {header: null };
    state = {
        image: null,
      };
    
  
 
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true
      // allowsEditing: false,
      // aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.base64 });
    }
  };
// Base64 formatted string
// var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
// ref.putString(message, 'base64').then(function(snapshot) {
//   console.log('Uploaded a base64 string!');
// });
  _submitImg = () => {
    let image = this.state.image;
    let picStorage = firebase.storage().ref('barPhotos/');
    picStorage.putString(image,'base64').then((snapshot) => {
      console.log(snapshot, "uploaded base64");
    });
    
  //  console.log(task);
  //  task.on('state_changed',
    
  //   function progress(snapshot) {
  //     var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log(percentage);
  //   },
    
  //   function error(err) {
  //     console.log(err +' Error')
  //   },
  
  //   function complete() {
  //     console.log("completed");
  //   })
  }

  render() {
    const { navigate } = this.props.navigation;
    let { image } = this.state;
        return(
      <View style={styles.container}>
        <TouchableHeader onPress={() => navigate('Splash')}/>
        <Title image={pictures} />
        {/* <Imagepicker /> */}
        
        <ScrollView contentContainerStyle={styles.imagePick}>
       

          <View style={styles.imageContainer}>
          <View style={{ height:100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Pickimage"
              onPress={this._pickImage}
              />
          {image &&
              <Image source={{ uri: image }} style={{ width: 75, height: 75 }} />}
            </View>
          </View>
          {/* <View style={styles.imageContainer} >
            <ImagePicker />
          </View>
          <View style={styles.imageContainer} >
            <ImagePicker />
          </View> */}

        </ScrollView>
       <Submit onPress={this._submitImg} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imagePick: {
    height: "50%",
    width: "95%",
    // justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'blue'
    // paddingTop: 5,
    // paddingBottom: 5
  },
  imageContainer: {
   height: "20%" ,
    padding: 2,
    justifyContent: "center"
  },
  label: {
    color: "green",
    width: 120,
    fontSize: 20.2,
    fontWeight: "600"

  },
  field: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "yellow",
    // marginTop: 5,
    // marginBottom: 5,
    alignItems: "center",
    paddingLeft: 5
  },
  button: {
    width: 50,
    height: 30
  },
  input: {
    width: 150, 
    height: 40,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    // margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1,
    // paddingLeft: 1
  }
});