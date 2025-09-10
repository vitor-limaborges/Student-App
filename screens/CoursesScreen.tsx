import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type CoursesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Courses'>;

// Mock data for courses
const courseData = [
  { 
    id: '1', 
    title: 'Introdução à Programação', 
    professor: 'Dr. Silva', 
    schedule: 'Seg/Qua 14:00-16:00',
    credits: 4,
    status: 'Em andamento'
  },
  { 
    id: '2', 
    title: 'Banco de Dados', 
    professor: 'Dra. Oliveira', 
    schedule: 'Ter/Qui 08:00-10:00',
    credits: 4,
    status: 'Em andamento'
  },
  { 
    id: '3', 
    title: 'Estrutura de Dados', 
    professor: 'Dr. Santos', 
    schedule: 'Seg/Sex 10:00-12:00',
    credits: 6,
    status: 'Em andamento'
  },
  { 
    id: '4', 
    title: 'Engenharia de Software', 
    professor: 'Dr. Pereira', 
    schedule: 'Qua/Sex 16:00-18:00',
    credits: 4,
    status: 'Em andamento'
  },
  { 
    id: '5', 
    title: 'Redes de Computadores', 
    professor: 'Dr. Costa', 
    schedule: 'Ter/Qui 14:00-16:00',
    credits: 4,
    status: 'Em andamento'
  },
];

type Course = {
  id: string;
  title: string;
  professor: string;
  schedule: string;
  credits: number;
  status: string;
};

const CourseItem = ({ item }: { item: Course }) => {
  return (
    <TouchableOpacity style={styles.courseItem}>
      <View style={styles.courseHeader}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>
      
      <View style={styles.courseDetails}>
        <Text style={styles.detailText}>Professor: {item.professor}</Text>
        <Text style={styles.detailText}>Horário: {item.schedule}</Text>
        <Text style={styles.detailText}>Créditos: {item.credits}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CoursesScreen = () => {
  const navigation = useNavigation<CoursesScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Cursos</Text>
      
      <FlatList<Course>
        data={courseData}
        renderItem={({ item }) => <CourseItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  courseItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: '#e6f7ff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  statusText: {
    color: '#1890ff',
    fontSize: 12,
    fontWeight: '500',
  },
  courseDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 10,
  },
  detailText: {
    color: '#666',
    marginBottom: 5,
    fontSize: 14,
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default CoursesScreen;
