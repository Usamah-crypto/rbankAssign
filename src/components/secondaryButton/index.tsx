import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {SecondaryButtonProps} from '../../types';

const SecondaryButton: FC<SecondaryButtonProps> = ({loadMoreQuestions}) => (
  <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreQuestions}>
    <Text style={styles.loadMoreText}>Load More Questions</Text>
  </TouchableOpacity>
);

export default SecondaryButton;
