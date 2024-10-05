import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {PrimaryButtonProps} from '../../types';

const PrimaryButton: FC<PrimaryButtonProps> = ({
  isButtonDisabled,
  handleCalculateScore,
}) => (
  <TouchableOpacity
    testID="CalculateRisk"
    style={[styles.calculateButton, isButtonDisabled && styles.disabledButton]}
    onPress={handleCalculateScore}
    disabled={isButtonDisabled}>
    <Text style={styles.calculateButtonText}>Calculate Risk</Text>
  </TouchableOpacity>
);

export default PrimaryButton;
