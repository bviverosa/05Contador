import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const sub = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn} onPress={sub}>
          <Text style={styles.textBoton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={add}>
          <Text style={styles.textBoton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.count}>
        <Text style={styles.textBoton}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    width:"100%",
    height:"100%",
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:"#000"
  
  },
  titulo: {
    color:"white",
    fontSize:100,
  },
  subcontainer: {
    marginTop:50,
    display:'flex',
    flexDirection:'row',

    // Estilos para el subcontenedor de botones}
    
  },
  btn: {
    marginLeft:50,
   width:200,
   height:200,
   borderRadius:50,
   backgroundColor:"#FF0000",
   justifyContent:'center',
   alignItems:'center',

  },
  textBoton: {
    color:"white",
    fontSize:100,
    // Estilos para el texto de los botones y el contador
  },
  count: {
    // Estilos para el contenedor del contador
    alignContent:'center',
    
  },
});
