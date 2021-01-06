import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet, CameraRoll} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            CameraPermissions:null,
            Scan: false,
            ScanData:'',
            ButtonState: 'notClicked'
        }
    }
    /*We are using this function to take the permission for the camera. The Status === granted when user has granted the permission  
    and false when user has not granted the permission */
    getCameraPermissions = async () =>{
        const {Status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({CameraPermissions: Status === 'granted', ButtonState: 'Clicked'})
    }
    getBarCodeScanned = async ({type,data}) =>{
      this.setState({
          Scan: true,
          ScanData: data,
          ButtonState: 'notClicked'
      })  
    }
    render (){
        const CameraPermission = this.state.CameraPermissions;
        const Scan = this.state.Scan;
        const ButtonState = this.state.ButtonState;
        if(ButtonState === 'Clicked' && CameraPermission){
                    
          

        return (
            <View style = {{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text> CameraPermission === true ? this.state.ScanData : 'Need CameraPermission to Scan QR CODE'</Text> 
            <TouchableOpacity style = {MyStyles.ScanButton} onPress = {this.getCameraPermissions}>
            <Text style = {MyStyles.ScanText}> Scan QR CODE</Text>
            }
             </TouchableOpacity>   
            </View> 
        )
    }
}
const MyStyles = StyleSheet.create({
    ScanButton : {
        backgroundColor: 'lime',
        justifyContent: 'center',
        marginTop: 10,

    },
    ScanText: {
        fontSize: 20,
        fontFamily: 'Calibri',
        color:'tint'
    }
})
})

