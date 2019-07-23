import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

class Icone extends Component
{
  render()
  {

    if(this.props.escolha == 'pedra')
    { 
      return(
        <View style={styles.viewJogador}>
          <Text style={styles.txtJogador}>{ this.props.jogador}</Text>
          <Image source={ require('../../images/pedra.png') } />
        </View>
      );
    }else if(this.props.escolha == 'papel')
    {
      return(
        <View style={styles.viewJogador}>
          <Text style={styles.txtJogador}>{ this.props.jogador}</Text>
          <Image source={ require('../../images/papel.png') } />
        </View>
      );
    }else if(this.props.escolha == 'tesoura')
    {
      return(
        <View style={styles.viewJogador}>
          <Text style={styles.txtJogador}>{ this.props.jogador}</Text>
          <Image source={ require('../../images/tesoura.png') } />
        </View>
      );
    }else{
      return false;
    }
  }
}

const styles = StyleSheet.create({
    txtJogador: {
        color: "#28B4E5",
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewJogador:
    {
        alignItems: 'center',
        marginBottom: 3,
    },
});
export default Icone;