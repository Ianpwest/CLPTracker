import React, {Component, PropTypes} from 'react';
import {AsyncStorage, View, Text, TextInput, ScrollView, Button, TouchableHighlight, ActivityIndicator, StyleSheet} from 'react-native';

import { BleManager } from 'react-native-ble-plx';

export default class Scan extends Component {

    constructor(props) 
    {
        super(props);
        
        this.state = { deviceList: '' };

        this.manager = new BleManager();

        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                this.setState({
                    deviceList: "error scanning for devices"
                });
                return
            }

            this.setState({
                deviceList: this.state.deviceList + ' - ' + device.name
            });
        });
    };
   
    render(){
        return(
            <Text>{this.state.deviceList}</Text>
        )
    }
}