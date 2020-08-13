import React from 'react';
import {View,Text} from 'react-native';
function App(){
  return(
    <View stlye={{
    flexDirection:"row",
    height:100,
    padding:20
    }}>
        <View style={{backgroundColor:"blue",flex:0.3}}></View>
        <View style={{backgroundColor:"red",flex:0.5}}></View>
       <Text> I love mybts2 </Text>       
    </View>
  )
}
export default App;