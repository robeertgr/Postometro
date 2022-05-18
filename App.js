import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import styles from './styles';

export default function AlcoolOuGasolina() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const result = alcool / gasolina;
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo} source={require('./src/assets/logo.png')} />
      <Text style={styles.txtLogo}>Qual melhor opção?</Text>
      <Text style={styles.txtAlcool}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Insira"
        keyboardType="numeric"
        value={alcool}
        onChangeText={text => setAlcool(text)}
      />
      <Text style={styles.txtGasolina}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Insira"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={text => setGasolina(text)}
      />
      <TouchableOpacity
        style={styles.btnCalcular}
        onPress={() => setOpen(true)}>
        <Text style={styles.txtBtnCalcular}>Calcular</Text>
      </TouchableOpacity>

      <Modal visible={open} animationType="slide" transparent={true}>
        <View
          style={styles.container}>
          <Image
            style={styles.imgGas}
            source={require('./src/assets/gas.png')}
          />
          <Text style={styles.modalTitle}>
            {result < 0.7 ? 'Compensa usar álcool' : 'Compensa usar gasolina'}
          </Text>
          <View style={styles.modalContainer}>
            <Text style={styles.txtPrice}>Com os preços: </Text>
            <Text style={styles.price}>Alcool: R$ {alcool}</Text>
            <Text style={styles.price}>Gasolina: R$ {gasolina}</Text>
          </View>
          <View style={styles.containerField}>
            <TouchableOpacity
              style={styles.btnModal}
              onPress={() => setOpen(false)}>
              <Text style={styles.txtBtnModal}>Calcular novamente?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
