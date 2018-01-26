import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
// import * as firebase from 'firebase';
import Splash from "./screens/SplashPanel";
import Origin from "./screens/Origin";
import Destination from "./screens/Destination";
import FileUp from "./screens/FileUp";
import Confirm from "./screens/Confirm";
import ThankYou from "./screens/ThankYou";

// const firebaseConfig = {
//   apiKey: "AIzaSyB4c-dlOic0fYfcCUwNbfDtwxj-QDcujOA",
//     authDomain: "hercone-8025f.firebaseapp.com",
//     databaseURL: "https://hercone-8025f.firebaseio.com",
//     projectId: "hercone-8025f",
//     storageBucket: "hercone-8025f.appspot.com",
//     messagingSenderId: "329151475948"
// };

// firebase.initializeApp(firebaseConfig);

const HercDemo = StackNavigator({
  Splash: { screen: Splash },
  Origin: { screen: Origin},
  Destination: { screen: Destination },
  FileUp: { screen: FileUp },
  Confirm: { screen: Confirm },
  ThankYou: { screen: ThankYou}
 
  }
)

export default class App extends Component {
  static navigationOptions = { header: null }
    render() {
      return <HercDemo />
    }
  }
  
// TO-DO ------1.  Change Vendor Supplier label -> Origin
// 2. ----------Change Vault  label-> Destination 
// 3.  Make the HERC logo go to the now Origin / Destination (home) page
// 4. ------Make the now Origin page have the same functionality as the demo'd Destination page
// 5. ------Change the "Submit" button to "Next" under the manual inputs.
// 6. Add Skip button on the bottom to go directly to Image / File Uploader if User wants just this functionality
// 7.  Add Image Uploader and File Finder on the panel that is linked to the Next and Skip buttons. 
// 8. String the db to the panels for testing of uploading of files / images
// 9. Push to Expo by 1/22


  