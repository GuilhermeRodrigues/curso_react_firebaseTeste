import React, { Component } from 'react';

import firebase from 'firebase';

import { AppRegistry, View, Text, Button } from 'react-native';

class App extends Component {
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyC9X2JORarFVJhVXTXde2pnwuFIgUja1-A",
            authDomain: "configuracaofirebasereac-84ba5.firebaseapp.com",
            databaseURL: "https://configuracaofirebasereac-84ba5.firebaseio.com",
            projectId: "configuracaofirebasereac-84ba5",
            storageBucket: "",
            messagingSenderId: "104328479315",
            appId: "1:104328479315:web:beaaaf34295ca161"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    salvarDados() {
        var funcionarios = firebase.database().ref("funcionarios");
        //database.ref("pontuacao").remove();

        funcionarios.push().set(
            {
                nome: "Paulo Alves",
                altura: "1,70",
                peso: "70kg"
            }
        );
        //funcionarios.remove;

        
    }

    render() {
        return ( 
            <View>
                <Button 
                    onPress={() => {this.salvarDados(); }}
                    title="Salvar dados"
                    color="#841584"
                    accessibilityLabel="Salvar dados"
                />
                <Text>Meu App</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
