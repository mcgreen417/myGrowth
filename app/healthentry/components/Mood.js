import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

const FeelingsModal = ({ feelings, setFeelings }) => {
  const [feel, setFeel] = useState();
  return (
    <Pressable>
      {console.log(feelings)}
      <View style={styles().modalView}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text>Feelings</Text>
          <TextInput
            placeholder='Feelings'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 100,
            }}
            value={feel}
            onChangeText={setFeel}
          />
        </View>
        <View style={{ width: '50%' }}>
          <Button
            title='Add Feelings'
            onPress={() => {
              let temp = new Array(feel).concat(feelings);
              console.log('temp:', temp);
              setFeelings(temp);
              console.log('feelings', feelings);
              console.log('feelings', feelings);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const Mood = ({ mood, setMood, feelings, setFeelings }) => {
  const [showFeelings, setShowFeelings] = useState(false);
  return (
    <View style={{ width: '80%' }}>
      <Modal
        transparent={true}
        visible={showFeelings}
        onRequestClose={() => {
          setShowFeelings(!showFeelings);
        }}>
        <Pressable
          onPressOut={() => setShowFeelings(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <FeelingsModal feelings={feelings} setFeelings={setFeelings} />
        </Pressable>
      </Modal>
      <View>
        <Text>Mood</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{ marginLeft: 5, marginRight: 5 }}
            onPress={() => setMood(1)}>
            <Icon
              type='fontisto'
              name='mad'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              onPress={() => setMood(1)}
              color={mood == 1 ? '#4CB97A' : 'black'}
            />
          </Pressable>

          <Text>Awful</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{ marginLeft: 5, marginRight: 5 }}
            onPress={() => setMood(2)}>
            <Icon
              type='fontisto'
              name='frowning'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 2 ? '#4CB97A' : 'black'}
            />
          </Pressable>

          <Text>Bad</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{ marginLeft: 5, marginRight: 5 }}
            onPress={() => setMood(3)}>
            <Icon
              type='fontisto'
              name='neutral'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 3 ? '#4CB97A' : 'black'}
            />
          </Pressable>

          <Text>Okay</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{ marginLeft: 5, marginRight: 5 }}
            onPress={() => setMood(4)}>
            <Icon
              type='fontisto'
              name='smiling'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 4 ? '#4CB97A' : 'black'}
            />
          </Pressable>

          <Text>Good</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Pressable
            style={{ marginLeft: 5, marginRight: 5 }}
            onPress={() => setMood(5)}>
            <Icon
              type='fontisto'
              name='smiley'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 5 ? '#4CB97A' : 'black'}
            />
          </Pressable>

          <Text>Great</Text>
        </View>
      </View>
      <View style={{ width: '50%' }}>
        <Button
          title='+ Add Feelings'
          onPress={() => setShowFeelings(!showFeelings)}
        />
      </View>
    </View>
  );
};

export default Mood;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
      margin: 0,
    },
    avatar: {
      width: 75,
      height: 75,
    },
    avatarView: {
      flexDirection: 'row',
      marginTop: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    divider: {
      height: 1,
      backgroundColor: '#816868',
      marginVertical: 20,
    },
    categoryText: {
      marginVertical: 6,
      marginHorizontal: 16,
      color: '#F5F5F5',
      fontSize: 16,
    },
    categoryView: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4CB97A',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      marginHorizontal: 2,
    },
    heading: {
      color: '#4CB97A',
      fontSize: 20,
      fontWeight: 'bold',
    },
    iconView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    inlineRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    text: {
      color: '#816868',
      fontSize: 16,
      textAlign: 'center',
    },
    pageDescription: {
      color: '#816868',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      fontWeight: 'bold',
      marginRight: 20,
    },
    pageEnd: {
      marginBottom: 100,
    },
    pageSetup: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      padding: 35,
      paddingBottom: -10,
      paddingTop: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
    picker: {
      height: 32,
      width: '100%',
    },
    pickerView: {
      borderWidth: 1,
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: '70%',
      backgroundColor: '#f4f3f4',
    },
    textReg: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      textDecorationLine: 'none',
      textAlign: 'left',
    },
  });
