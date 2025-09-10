import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Aplicativo Estudantil</Text>
      <Text style={styles.subtitle}>Seu portal de estudos</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Cursos"
          onPress={() => navigation.navigate('Courses')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#555',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  }
});

export default HomeScreen;
