import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4A90E2',
    borderRadius: 5,
  },
  questionContainer: {
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 10,
  },

  loadMoreButton: {
    backgroundColor: '#EAEAEA',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
    elevation: 2,
  },
  loadMoreText: {
    color: '#4A90E2',
    fontSize: 16,
  },
  checkboxContainer: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  checkbox: {
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: '#A0A0A0',
  },
});
