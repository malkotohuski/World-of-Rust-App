import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import questions from './questions';
import Table from './table';

const TheGameScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = answerIndex => {
    if (selectedAnswer !== null || gameOver) {
      return;
    }

    setSelectedAnswer(answerIndex);

    const isCorrectAnswer =
      answerIndex === questions[currentQuestion].correctAnswer;

    if (isCorrectAnswer) {
      if (currentQuestion === questions.length - 1) {
        // Game ends here
        setGameOver(true);
      } else {
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        }, 2000); // Delay of 2 seconds (2000 milliseconds)
      }
    } else {
      // Wrong answer selected
      setTimeout(() => {
        setGameOver(true);
      }, 2000); // Delay of 2 seconds (2000 milliseconds)
    }
  };

  useEffect(() => {
    // Clear the selected answer when moving to the next question or screen
    setSelectedAnswer(null);
  }, [currentQuestion, gameOver]);

  const renderAnswers = () => {
    const answers = questions[currentQuestion].answers;
    const answerRows = [];

    for (let i = 0; i < answers.length; i += 2) {
      const answer1 = answers[i];
      const answer2 = answers[i + 1];

      const isAnswer1Selected = selectedAnswer === i;
      const isAnswer2Selected = selectedAnswer === i + 1;
      const isAnswer1Correct = i === questions[currentQuestion].correctAnswer;
      const isAnswer2Correct =
        i + 1 === questions[currentQuestion].correctAnswer;

      const answerRow = (
        <View style={styles.answerRow} key={i}>
          <TouchableOpacity
            style={[
              styles.answerButton,
              isAnswer1Selected && styles.selectedAnswer,
              isAnswer1Selected && isAnswer1Correct && styles.correctAnswer,
              isAnswer1Selected && !isAnswer1Correct && styles.incorrectAnswer,
            ]}
            onPress={() => handleAnswer(i)}
            disabled={selectedAnswer !== null || gameOver}>
            <Text style={styles.answerText}>{answer1}</Text>
          </TouchableOpacity>
          {answer2 && (
            <TouchableOpacity
              style={[
                styles.answerButton,
                isAnswer2Selected && styles.selectedAnswer,
                isAnswer2Selected && isAnswer2Correct && styles.correctAnswer,
                isAnswer2Selected &&
                  !isAnswer2Correct &&
                  styles.incorrectAnswer,
              ]}
              onPress={() => handleAnswer(i + 1)}
              disabled={selectedAnswer !== null || gameOver}>
              <Text style={styles.answerText}>{answer2}</Text>
            </TouchableOpacity>
          )}
        </View>
      );

      answerRows.push(answerRow);
    }

    return answerRows;
  };

  return (
    <View style={styles.container}>
      <Table dataId={currentQuestion} />
      {gameOver ? (
        <Text style={styles.gameOverText}>Game Over</Text>
      ) : (
        <>
          <Text style={styles.question}>
            {questions[currentQuestion].question}
          </Text>
          {renderAnswers()}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  answerRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  answerButton: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
  },
  answerText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedAnswer: {
    backgroundColor: '#b3e6b3',
  },
  incorrectAnswer: {
    backgroundColor: 'red',
  },
  correctAnswer: {
    backgroundColor: '#b3e6b3',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TheGameScreen;
