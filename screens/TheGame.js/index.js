import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import questions from './questions';
import Table from './table';
import {tableMock} from './TableMock';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TheGameScreen = props => {
  const {navigation} = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [eliminatedAnswers, setEliminatedAnswers] = useState([]);

  const [eliminatedVisible, setEliminatedVisible] = useState(true);
  const [callTeamVisible, setCallTeamVisible] = useState(true);
  const [groupHelpVisible, setGroupHelpVisible] = useState(true);

  const [helpVisible, setHelpVisible] = useState(false); //<---- new one
  const [percentages, setPercentages] = useState([]);

  const handleTryAgain = () => {
    setGameOver(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setCallTeamVisible(true);
    setEliminatedVisible(true);
  };

  const handleAnswer = answerIndex => {
    if (
      selectedAnswer !== null ||
      gameOver ||
      eliminatedAnswers.includes(answerIndex)
    ) {
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
        }, 1000); // 1 sec
      }
    } else {
      // Wrong answer selected
      setTimeout(() => {
        setGameOver(true);
      }, 2000); // 2 sec
    }
  };

  useEffect(() => {
    setCurrentQuestion(0);
  }, [navigation]);

  useEffect(() => {
    setSelectedAnswer(null);
    setEliminatedAnswers([]);
  }, [currentQuestion, gameOver]);

  const renderAnswers = () => {
    const answers = questions[currentQuestion].answers;
    const answerRows = [];

    const letters = ['A', 'B', 'C', 'D']; // Array of letters

    for (let i = 0; i < answers.length; i += 2) {
      const answer1 = answers[i];
      const answer2 = answers[i + 1];

      const isAnswer1Selected = selectedAnswer === i;
      const isAnswer2Selected = selectedAnswer === i + 1;
      const isAnswer1Correct = i === questions[currentQuestion].correctAnswer;
      const isAnswer2Correct =
        i + 1 === questions[currentQuestion].correctAnswer;

      const letter1 = letters[i];
      const letter2 = letters[i + 1];

      const isAnswer1Eliminated = eliminatedAnswers.includes(i);
      const isAnswer2Eliminated = eliminatedAnswers.includes(i + 1);

      const answerRow = (
        <View style={styles.answerRow} key={i}>
          {!isAnswer1Eliminated && (
            <TouchableOpacity
              style={[
                styles.answerButton,
                isAnswer1Selected && styles.selectedAnswer,
                (isAnswer1Selected && isAnswer1Correct) ||
                (selectedAnswer === questions[currentQuestion].correctAnswer &&
                  isAnswer1Correct)
                  ? styles.correctAnswer
                  : null,
                isAnswer1Selected &&
                  !isAnswer1Correct &&
                  styles.incorrectAnswer,
              ]}
              onPress={() => handleAnswer(i)}
              disabled={selectedAnswer !== null || gameOver}>
              <Text style={styles.answerText}>
                {letter1}. {answer1}
              </Text>
            </TouchableOpacity>
          )}
          {answer2 && !isAnswer2Eliminated && (
            <TouchableOpacity
              style={[
                styles.answerButton,
                isAnswer2Selected && styles.selectedAnswer,
                (isAnswer2Selected && isAnswer2Correct) ||
                (selectedAnswer === questions[currentQuestion].correctAnswer &&
                  isAnswer2Correct)
                  ? styles.correctAnswer
                  : null,
                isAnswer2Selected &&
                  !isAnswer2Correct &&
                  styles.incorrectAnswer,
              ]}
              onPress={() => handleAnswer(i + 1)}
              disabled={selectedAnswer !== null || gameOver}>
              <Text style={styles.answerText}>
                {letter2}. {answer2}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      );

      answerRows.push(answerRow);
    }

    return answerRows;
  };

  const handleEliminateClick = () => {
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;
    const updatedEliminatedAnswers = [];

    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
      if (i !== correctAnswerIndex && updatedEliminatedAnswers.length < 2) {
        updatedEliminatedAnswers.push(i);
      }
    }

    setEliminatedAnswers(updatedEliminatedAnswers);
    setEliminatedVisible(false);
  };

  const letters = ['A', 'B', 'C', 'D']; // Define letters array outside the function

  const handlerClickHelp = () => {
    const allocatedPercentages = [];
    let remainingPercentage = 100;

    for (let i = 0; i < letters.length - 1; i++) {
      const randomPercentage = Math.floor(
        Math.random() * (remainingPercentage + 1),
      );
      allocatedPercentages.push(randomPercentage);
      remainingPercentage -= randomPercentage;
    }

    allocatedPercentages.push(remainingPercentage);

    setHelpVisible(true);
    setPercentages(allocatedPercentages);
    setGroupHelpVisible(false);

    setTimeout(() => {
      setHelpVisible(false);
    }, 15000); // 10 seconds
  };

  const handlerClickCallTeam = () => {
    handleAnswer(questions[currentQuestion].correctAnswer);
    setCallTeamVisible(false);
  };

  return (
    <View style={styles.container}>
      {!gameOver && (
        <Table data={tableMock} questionNumbers={currentQuestion} />
      )}

      {gameOver ? (
        <View style={styles.gameOver}>
          <Text style={styles.gameOverText}>Game Over</Text>
          <TouchableOpacity style={styles.tryAgainBtn} onPress={handleTryAgain}>
            <Text style={styles.tryAgain}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : currentQuestion > 14 ? (
        <View style={styles.gameOver}>
          <Text style={styles.gameOverText}>Congrats</Text>
          <TouchableOpacity style={styles.tryAgainBtn} onPress={handleTryAgain}>
            <Text style={styles.tryAgain}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.question}>
            {questions[currentQuestion].question}
          </Text>
          {renderAnswers()}
        </>
      )}

      <View style={styles.buttonContainer}>
        {eliminatedVisible && (
          <TouchableOpacity onPress={handleEliminateClick}>
            <Icon style={styles.buttonIcon} name="exposure-minus-2" />
          </TouchableOpacity>
        )}
        {groupHelpVisible && (
          <TouchableOpacity onPress={handlerClickHelp}>
            <Icon style={styles.buttonIcon} name="people" />
          </TouchableOpacity>
        )}
        {callTeamVisible && (
          <TouchableOpacity onPress={handlerClickCallTeam}>
            <Icon style={styles.buttonIcon} name="contact-phone" />
          </TouchableOpacity>
        )}
      </View>
      {helpVisible && (
        <View style={styles.helpContainer}>
          {letters.map((letter, index) => (
            <View style={styles.helpItem} key={letter}>
              <Text style={styles.helpItemText}>{letter}</Text>
              <Text style={styles.helpItemPercentage}>
                {percentages[index]}%
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: 'grey',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    alignSelf: 'center',
  },
  answerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  answerButton: {
    flex: 1,
    backgroundColor: 'coral',
    flexDirection: 'column',
    borderRadius: 8,
    padding: 5,
    marginHorizontal: 5,
    justifyContent: 'space-between',
  },
  answerText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  selectedAnswer: {
    backgroundColor: '#b3e6b3',
  },
  incorrectAnswer: {
    backgroundColor: 'red',
  },
  correctAnswer: {
    backgroundColor: 'lightgreen',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'green',
    marginTop: 20,
  },
  gameOver: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tryAgainBtn: {
    backgroundColor: 'coral',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 20,
  },
  tryAgain: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  buttonIcon: {
    fontSize: 30,
    paddingVertical: 5,
  },
  helpContainer: {
    position: 'absolute',
    top: 150,
    left: 20,
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  helpItem: {
    alignItems: 'center',
  },

  helpItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  helpItemPercentage: {
    fontSize: 14,
    color: 'gray',
  },
});

export default TheGameScreen;
