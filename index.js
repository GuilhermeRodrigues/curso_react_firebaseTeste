import React, { Component } from 'react';

import firebase from 'firebase';

import { AppRegistry, View, Text, Button } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { pontuacao: 0 };
    }

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

    listarDados() {
        var pontuacao = firebase.database().ref("pontuacao");

        pontuacao.on('value', (snapshot) => {
            var pontos = snapshot.val();
            this.setState( { pontuacao: pontos } );
        });
    }

    render() {

        let {pontuacao} = this.state;

        return ( 
            
            <View>
                <Button 
                    onPress={() => {this.salvarDados(); }}
                    title="Salvar dados"
                    color="#841584"
                    accessibilityLabel="Salvar dados"
                />
                <Button 
                    onPress={() => {this.listarDados(); }}
                    title="Listar dados"
                    color="#841584"
                    accessibilityLabel="Listar dados"
                />
                <Text>{pontuacao}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
