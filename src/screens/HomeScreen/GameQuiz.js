import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {images, COLORS, SIZES, FONTS, icons, QuizData} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import CircularProgress, {
  ProgressRef,
} from 'react-native-circular-progress-indicator';
import {useTranslation} from 'react-i18next';

const GameQuiz = ({navigation}) => {
  const {i18n, t} = useTranslation();
  const allQuestions = QuizData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const defaultCountdown = 20;
  const [countdown, setCountdown] = useState(defaultCountdown);
  const progressRef = useRef(ProgressRef);
  const [showScoreModal, setShowScoreModal] = useState(false);
  let myTimeout = null;

  const validateAnswer = selectedOption => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      // Set Score
      setScore(score + 10);
    }
    if (currentQuestionIndex === allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      clearTimeout(myTimeout);
      progressRef.current.pause();
      myTimeout = setTimeout(() => {
        setShowScoreModal(true);
      }, 1000);
    } else {
      clearTimeout(myTimeout);
      myTimeout = setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        progressRef.current.play();
      }, 200);
    }
  };

  const restartQuiz = () => {
    setShowScoreModal(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    progressRef.current.reAnimate();
  };

  const closeQuiz = () => {
    setShowScoreModal(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 10,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          width: '100%',
          borderRadius: SIZES.base,
        }}>
        {/* Question Counter */}
        <LinearGradient
          colors={['#FF942D', '#F84273']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          locations={[-0.0273, 1]}
          useAngle={true}
          angle={134.33}
          angleCenter={{x: 0.5, y: 0.5}}
          style={[styles.linearGradient, {borderRadius: SIZES.base}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 19,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: '700',
              }}>
              {currentQuestionIndex + 1}
            </Text>
            <Text
              style={{color: COLORS.white, fontSize: 20, fontWeight: '700'}}>
              /{allQuestions.length}
            </Text>
          </View>
        </LinearGradient>

        {/* Question */}
        <View
          style={{
            justifyContent: 'center',
            width: '85%',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              color: '#262634',
              fontSize: 18,
              lineHeight: 23,
              fontWeight: '600',
            }}>
            {allQuestions[currentQuestionIndex]?.question}
          </Text>
        </View>
      </View>
    );
  };

  const renderQuestionImage = () => {
    return (
      <View style={{width: '100%', height: 210, borderRadius: SIZES.base}}>
        <Image
          source={
            allQuestions[currentQuestionIndex]
              ? allQuestions[currentQuestionIndex].image
                ? allQuestions[currentQuestionIndex].image
                : images.silver_bg
              : null
          }
          style={{width: '100%', height: '100%', borderRadius: SIZES.base}}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderOptions = () => {
    const imageAnswerMapping = [
      icons.answer_A,
      icons.answer_B,
      icons.answer_C,
      icons.answer_D,
    ];
    const colorAnswerMapping = ['#FF5254', '#00BDF9', '#FFD21E', '#43C687'];
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={index}
            style={{
              backgroundColor:
                option === correctOption
                  ? colorAnswerMapping[index]
                  : option === currentOptionSelected
                  ? '#ff4444' + '40'
                  : COLORS.white,
              height: 50,
              borderRadius: SIZES.base,
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 6,
            }}>
            <Image
              source={imageAnswerMapping[index]}
              style={{borderRadius: SIZES.base}}
              resizeMode="cover"
            />
            <View
              style={{
                width: '85%',
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#262634',
                  lineHeight: 24,
                  fontWeight: '600',
                }}>
                {option}
              </Text>

              {/* Show Check Or Cross Icon based on correct answer*/}
              {option === correctOption ? (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30 / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={icons.check_answer} />
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderTimerAndScore = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}>
        <View style={{paddingHorizontal: 10}}>
          <CircularProgress
            ref={progressRef}
            value={0}
            radius={50}
            maxValue={countdown}
            fontSize={20}
            initialValue={countdown}
            progressValueColor={'#FF5254'}
            activeStrokeColor={'#FF5254'}
            inActiveStrokeColor={'#C4C4C4'}
            activeStrokeWidth={6}
            inActiveStrokeWidth={6}
            duration={countdown * 1000}
            clockwise={false}
            onAnimationComplete={() => {
              console.log('time out');
              setShowScoreModal(true);
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 27,
              fontWeight: '600',
              color: '#262634',
            }}>
            Đã trả lời
          </Text>
          <View
            style={{
              backgroundColor: '#262634',
              borderRadius: 16,
              paddingHorizontal: 28,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: '#FFD12F',
                fontSize: 24,
                lineHeight: 36,
                fontWeight: '700',
              }}>
              {score}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.btnHeader}
          onPress={() => {
            navigation.navigate('Main');
          }}>
          <Text style={styles.textHeader}>{t('common:close')}</Text>
          <Image source={icons.close} />
        </TouchableOpacity>
      </View>

      {/*Questions  */}
      {renderQuestion()}

      {/* Images */}
      {renderQuestionImage()}

      {/* Timer and Score */}
      {renderTimerAndScore()}

      {/* Options */}
      {renderOptions()}

      {/* Score Modal */}
      <Modal animationType="slide" transparent={true} visible={showScoreModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '90%',
              borderRadius: 20,
              padding: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {score > allQuestions.length / 2 ? 'Congratulations!' : 'Oops!'}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color:
                    score > allQuestions.length / 2 ? '#00C851' : '#ff4444',
                }}>
                {score}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                }}>
                / {allQuestions.length}
              </Text>
            </View>

            {/* Retry Quiz button */}
            <TouchableOpacity
              onPress={restartQuiz}
              style={{
                backgroundColor: COLORS.primary,
                padding: 20,
                width: '100%',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Retry Quiz
              </Text>
            </TouchableOpacity>

            {/* Close quiz */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Main');
                closeQuiz();
              }}
              style={{
                backgroundColor: COLORS.primary,
                padding: 20,
                width: '100%',
                borderRadius: 20,
                marginTop: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Thoát
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GameQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textHeader: {
    fontSize: 18,
    lineHeight: 22,
    color: COLORS.primary,
    fontWeight: '700',
    paddingHorizontal: 6,
  },
  btnHeader: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
