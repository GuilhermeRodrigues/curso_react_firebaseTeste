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
                    mensagemErro = "A senha precisa ter no minimo 6 caracteres.";
                }
                alert(mensagemErro);
            }
        );
    }

    verificarUsuarioLogado() {
        const usuario = firebase.auth();

        usuario.onAuthStateChanged(
            (usuarioAtual) => {
                if (usuarioAtual) {
                    alert("Usuário está logado");
                } else {
                    alert("Usuário não está logado");
                }
            }
        );
        
        /*const usuarioAtual = usuario.currentUser;

        if (usuarioAtual) {
            alert("Usuário está logado");
        } else {
            alert("Usuário não está logado");
        }*/
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
                    onPress={() => {this.verificarUsuarioLogado(); }}
                    title="Verificar usuário logado"
                    color="#841584"
                    accessibilityLabel="Verificar usuário logado"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('firebaseTeste', () => App);
