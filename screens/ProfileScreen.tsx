import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              {/* Placeholder for profile image */}
              <Text style={styles.profileInitial}>A</Text>
            </View>
          </View>
          <Text style={styles.name}>Nome do Estudante</Text>
          <Text style={styles.info}>estudante@email.com</Text>
          <Text style={styles.info}>Matrícula: 12345</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Curso:</Text>
            <Text style={styles.infoValue}>Engenharia de Software</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Período:</Text>
            <Text style={styles.infoValue}>5º</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Ingresso:</Text>
            <Text style={styles.infoValue}>2023</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Média Geral:</Text>
            <Text style={styles.infoValue}>8.7</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Disciplinas Concluídas:</Text>
            <Text style={styles.infoValue}>24</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Disciplinas Pendentes:</Text>
            <Text style={styles.infoValue}>12</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Voltar para Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 20,
  },
  profileImageContainer: {
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginBottom: 3,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    flex: 2,
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export default ProfileScreen;
