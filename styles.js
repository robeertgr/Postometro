import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323336',
    flex: 1,
  },
  imgLogo: {
    alignSelf: 'center',
    marginTop: 60,
  },
  txtLogo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  txtAlcool: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 50,
    fontWeight: 'bold',
  },
  inputText: {
    height: 40,
    backgroundColor: '#fff',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    fontSize: 18,
    borderRadius: 5,
  },
  txtGasolina: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  btnCalcular: {
    backgroundColor: '#EF4130',
    height: 40,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  txtBtnCalcular: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imgGas: {
    alignSelf: 'center',
    marginTop: 130,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#30EF5A',
    textAlign: 'center',
    marginTop: 15,
  },
  modalContainer: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  containerField: {
    padding: 15,
  },
  btnModal: {
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: '#ff410D',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  txtBtnModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff410D',
  },
});

export default styles;
