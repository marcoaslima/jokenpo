/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';



class Jokenpo extends Component
{

  constructor(props)
  {
    super(props);
    this.state = { 
      escolhaUsuario : '',
      escolhaComputador : '',
      resultado : '' 
    };
  }

  jokenpo(escolhaUsuario)
  {

    //gera número aleatório (0, 1, 2)
    var numeroAleatorio = Math.floor(Math.random() * 3);
    var escolhas = ['pedra', 'papel', 'tesoura']
    var escolhaComputador = escolhas[numeroAleatorio];

    var resultado = "Deu empate";

    if(escolhaComputador != escolhaUsuario)
    {
      if(
        (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura') ||
        (escolhaUsuario == 'papel' && escolhaComputador == 'pedra') ||
        (escolhaUsuario == 'tesoura' && escolhaComputador == 'papel') 
      ){ resultado = 'Você ganhou'; }

      if(
        (escolhaUsuario == 'pedra' && escolhaComputador == 'papel') ||
        (escolhaUsuario == 'papel' && escolhaComputador == 'tesoura') ||
        (escolhaUsuario == 'tesoura' && escolhaComputador == 'pedra') 
      ){ resultado = 'Você perdeu'; }
    }

    this.setState(
      { 
        escolhaUsuario : escolhaUsuario,
        escolhaComputador : escolhaComputador,
        resultado: resultado
      }
    );

  }

  
  render()
  {
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#28B4E5");

    return(
      <View style={styles.appFragment}>
        <Topo></Topo>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <TouchableOpacity style={styles.btn} style={styles.btn} title="Pedra" onPress={() =>  { this.jokenpo('pedra') } }>
             <Text style={styles.btnText}>Pedra</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnEscolha}>
            <TouchableOpacity style={styles.btn} title="Papel" onPress={() => { this.jokenpo('papel') } }>
             <Text style={styles.btnText}>Papel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnEscolha}>
           <TouchableOpacity style={styles.btn} title="Tesoura" onPress={() => { this.jokenpo('tesoura') } }>
             <Text style={styles.btnText}>Tesoura</Text>
           </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewResultado}>
          <Text style={styles.txtResultado}>{ this.state.resultado }</Text>
        </View>
        <View style={styles.palco}>
          <Icone style={styles.iconeEscolha} escolha={ this.state.escolhaComputador} jogador="IA"></Icone>
          <Icone style={styles.iconeEscolha} escolha={ this.state.escolhaUsuario} jogador="Você"></Icone>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appFragment:{
    flex: 1,
    backgroundColor: '#FFF'
  },
  btnText:{
    color: "#28B4E5",
    fontSize: 16,
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: "#FFF",
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center'
  },  
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#28B4E5",
    paddingHorizontal: 5,
    paddingVertical: 8
  },
  palco:
  {
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF'
  },
  txtResultado:
  {
    fontSize: 25,
    fontWeight: 'bold',
    color: "#FFF",
    height: 60
  },
  viewResultado:
  {
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 20,
    backgroundColor: "#28B4E5",
  },
  iconeEscolha:
  {
    marginRight: 30
  }
});



export default Jokenpo;
