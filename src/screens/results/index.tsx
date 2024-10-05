import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useQuestionnaireStore} from '../../store/zustand';
import {ResultsScreenProps} from '../../types';
import {styles} from './styles';

const ResultsScreen: React.FC<ResultsScreenProps> = ({navigation}) => {
  const {totalScore, riskCategory, resetQuestionnaire} =
    useQuestionnaireStore();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Results</Text>
      <View style={styles.card}>
        <Text style={styles.resultText}>Total Score: {totalScore}</Text>
        <Text style={styles.categoryText}>Risk Category: {riskCategory}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          resetQuestionnaire();
          navigation.navigate('Questionnaire');
        }}>
        <Text style={styles.buttonText}>Start Over</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultsScreen;
