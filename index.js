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

    cadastrarUsuario() {
        var email = "guilherme@teste.com";
        var senha = "teste123";

        const usuario = firebase.auth();

        usuario.createUserWithEmailAndPassword(
            email,
            senha
        ).catch(
            (erro) => {
                var mensagemErro = "";

                if (erro.code == "auth/weak-password") {
                    mensagemErro = "A senha precisa ter no minimo 6 caracteres."
                }
                alert( mensagemErro );
            }
        );
    }

    render() {

        return ( 
            
            <View>
                <Button 
                    onPress={() => {this.cadastrarUsuario(); }}
                    title="Cadastrar Usuário"
                    color="#841584"
                    accessibilityLabel="Cadastrar Usuário"
                />
                <Button 
                    onPress={() => {this.listarDados(); }}
                    title="Listar dados"
                    color="#841584"
                    accessibilityLabel="Listar dados"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
