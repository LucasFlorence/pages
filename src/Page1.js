import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Button, Text } from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home ;D</Text>
    <Button 
      title="Ir para Sobre"
      onPress={() => navigation.navigate('Sobre') }
    />
   





  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

export default Page1;