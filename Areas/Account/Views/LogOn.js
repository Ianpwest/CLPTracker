import React, {Component, PropTypes} from 'react';
import {AsyncStorage, View, Text, TextInput, ScrollView, Button, TouchableHighlight, ActivityIndicator, StyleSheet} from 'react-native';

import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2'

const CREDENTIAILS = {
    client_id: 'e767340b-7275-4fa2-baf7-c1880d8fe937',
    client_secret: 'e8t{Gs#q(SVouq13E}G}@|&HTixW*HDI.[d=z3?_r_c^e3i}L->h',
    scope: 'User.ReadBasic.All offline_access'
};

export default class LogOn extends Component {

    constructor() 
    {
      super();
      this.state = {
          animating: false,
          email: 'ian.p.weston@gmail.com',
          password: 'Password',
          errorMessage: '',
          errorMessageVisibility: false
        };

        this.azureInstance = new AzureInstance(CREDENTIAILS);
		this.onLoginSuccess = this.onLoginSuccess.bind(this);

        this.LoginUser = this.LoginUser.bind(this);
        this.TransitionScreen = this.TransitionScreen.bind(this);
    }
   
    render(){
        return(
            <AzureLoginView
                azureInstance={this.azureInstance}
                loadingMessage="Requesting access token"
                onSuccess={this.onLoginSuccess}
            />

            // <View style={{flex: 1, flexDirection: 'column'}}>
            //     <ScrollView keyboardShouldPersistTaps="always" style={{flexDirection: 'column'}} contentContainerStyle={{alignItems: 'center', justifyContent: 'flex-start', height:750}}>
            //         <View style={{flexDirection: 'column', justifyContent: 'center', marginTop: 50}}>
            //             <Text style={styles.ControlLabel}>Email</Text>
            //             <TextInput style={styles.TextInput} value={this.state.email} ref={(input) => this.emailTextInput = input} onChangeText={(email) => this.setState({email})}></TextInput>
            //         </View>

            //         <View style={{flexDirection: 'column', justifyContent: 'center', marginTop:15}}>
            //             <Text style={styles.ControlLabel}>Password</Text>
            //             <TextInput style={styles.TextInput} secureTextEntry = {true} value={this.state.password} ref={(input) => this.passwordTextInput = input} onChangeText={(password) => this.setState({password})}></TextInput>
                        
            //         </View>

            //         <View style={{flexDirection: 'column', width:250, height:190}}>
            //             <Text style={styles.ErrorText}>{this.state.errorMessage}</Text>
            //             <ActivityIndicator animating={true} style={{opacity: this.state.animating ? 1.0 : 0.0}} color="black"/>
            //             <Button onPress={this.GetAuthDetails} title="Log In" color="#1de9b6" />
            //             <TouchableHighlight onPress={this.TransitionScreen.bind(this, 'Sign Up')} style={{alignSelf: 'flex-start'}}><Text style={styles.SignUp}>SIGN UP</Text></TouchableHighlight>
            //             <TouchableHighlight onPress={this.TransitionScreen.bind(this, 'Forgot Password')} style={{alignSelf: 'flex-end'}}><Text style={styles.ForgotPassword}>Forgot Password?</Text></TouchableHighlight>
            //         </View>
            //     </ScrollView>
            // </View>
        )
    }

    onLoginSuccess(credentials) {
        this.azureInstance.getUserInfo().then(result => {
			console.log(result);
		}).catch(err => {
			console.log(err);
		});
    }

    logout(e){
        this.setState({
            logout:true
        });
    }

    LoginUser(){

    }

    TransitionScreen(scene){

    }
}

const styles = StyleSheet.create({

  TextInput: {
      height: 40,
      width: 250
  },
  ControlLabel: {
      fontSize:16,
      marginBottom: -8
  },
  ForgotPassword: {
      fontSize:12,
      marginTop:-20
  },
  SignUp: {
      marginTop:10,
      fontFamily: 'roboto_light',
      fontSize: 16
  },
  ErrorText: {
      color: 'red'
  }
});