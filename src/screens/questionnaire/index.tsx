import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {questions} from '../../utils/questions';
import {useQuestionnaireStore} from '../../store/zustand';
import {Question} from '../../types';
import {styles} from './styles';
import PrimaryButton from '../../components/primaryButton';
import SecondaryButton from '../../components/secondaryButton';

const QUESTION_BATCH_SIZE = 3;

const QuestionnaireScreen: React.FC = () => {
  const {navigate} = useNavigation();
  const {answers, setAnswer, calculateScore} = useQuestionnaireStore();
  const [visibleQuestions, setVisibleQuestions] = useState(
    questions.slice(0, QUESTION_BATCH_SIZE),
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCheck = (questionId: number, optionId: number) => {
    setAnswer(questionId, optionId);
  };

  const loadMoreQuestions = () => {
    const currentLength = visibleQuestions.length;
    const newQuestions = questions.slice(
      currentLength,
      currentLength + QUESTION_BATCH_SIZE,
    );
    setVisibleQuestions(prevQuestions => [...prevQuestions, ...newQuestions]);
  };

  useEffect(() => {
    const allQuestionsAnswered = questions.every(
      question => answers[question.id] !== undefined,
    );
    setIsButtonDisabled(!allQuestionsAnswered);
  }, [answers]);

  const handleCalculateScore = () => {
    calculateScore();
    navigate('Results');
  };

  const completionPercentage =
    (visibleQuestions.length / questions.length) * 100;

  const renderQuestion = ({item}: {item: Question}) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.options.map(option => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={() => handleCheck(item.id, option.id)}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              boxType="square"
              value={answers[item.id] === option.id}
              onValueChange={() => handleCheck(item.id, option.id)}
              tintColors={{true: '#4A90E2', false: '#B5B5B5'}}
              style={styles.checkbox}
              testID={`checkbox-${item.id}-${option.id}`}
            />
          </View>
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View testID="progress-bar" style={styles.progressBarContainer}>
        <View
          style={[styles.progressBar, {width: `${completionPercentage}%`}]}
        />
      </View>
      <FlatList
        data={visibleQuestions}
        renderItem={renderQuestion}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => (
          <>
            {visibleQuestions.length < questions.length && (
              <SecondaryButton loadMoreQuestions={loadMoreQuestions} />
            )}

            <PrimaryButton
              handleCalculateScore={handleCalculateScore}
              isButtonDisabled={isButtonDisabled}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default QuestionnaireScreen;
