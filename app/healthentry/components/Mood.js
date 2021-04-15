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

{
  /* Add Feelings pop-up */
}
const FeelingsModal = ({ feelings, setFeelings }) => {
  const [feel, setFeel] = useState();

  return (
    <Pressable>
      {console.log(feelings)}
      <View style={styles().modalView}>
        {/* Feeling user input box */}
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Text style={styles().text}>Feeling:</Text>
          <TextInput
            placeholder='Feeling Name'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 150,
              marginLeft: 10,
            }}
            value={feel}
            onChangeText={setFeel}
          />
        </View>

        {/* Add Feeling button */}
        <View style={{ width: '50%', marginVertical: 20 }}>
          <Button
            title='Add Feeling'
            onPress={() => {
              let temp = new Array(feel).concat(feelings);
              console.log('temp:', temp);
              setFeelings(temp);
              console.log('feelings', feelings);
              console.log('feelings', feelings);
            }}
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
          />
        </View>
      </View>
    </Pressable>
  );
};

const Mood = ({ mood, setMood, feelings, setFeelings }) => {
  const [showFeelings, setShowFeelings] = useState(false);
  return (
    <View style={{ width: '90%' }}>
      {/* Add Feelings modal */}
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

      {/* Mood heading */}
      <Text style={styles().heading}>MOOD</Text>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{ alignItems: 'center' }}>
          {/* Awful face */}
          <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(1)}>
            <Icon
              type='fontisto'
              name='mad'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              onPress={() => setMood(1)}
              color={mood == 1 ? '#4CB97A' : '#816868'}
            />
          </Pressable>
          <Text
            style={{
              color:
                mood == 1
                  ? '#4CB97A'
                  : global.colorblindMode
                  ? global.cb_textColor
                  : global.textColor,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Awful
          </Text>
        </View>

        {/* Bad face */}
        <View style={{ alignItems: 'center' }}>
          <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(2)}>
            <Icon
              type='fontisto'
              name='frowning'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 2 ? '#4CB97A' : '#816868'}
            />
          </Pressable>
          <Text
            style={{
              color:
                mood == 2
                  ? '#4CB97A'
                  : global.colorblindMode
                  ? global.cb_textColor
                  : global.textColor,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Bad
          </Text>
        </View>

        {/* Okay face */}
        <View style={{ alignItems: 'center' }}>
          <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(3)}>
            <Icon
              type='fontisto'
              name='neutral'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 3 ? '#4CB97A' : '#816868'}
            />
          </Pressable>
          <Text
            style={{
              color:
                mood == 3
                  ? '#4CB97A'
                  : global.colorblindMode
                  ? global.cb_textColor
                  : global.textColor,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Okay
          </Text>
        </View>

        {/* Good face */}
        <View style={{ alignItems: 'center' }}>
          <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(4)}>
            <Icon
              type='fontisto'
              name='smiling'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 4 ? '#4CB97A' : '#816868'}
            />
          </Pressable>
          <Text
            style={{
              color:
                mood == 4
                  ? '#4CB97A'
                  : global.colorblindMode
                  ? global.cb_textColor
                  : global.textColor,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Good
          </Text>
        </View>

        {/* Great face */}
        <View style={{ alignItems: 'center' }}>
          <Pressable style={{ marginBottom: 4 }} onPress={() => setMood(5)}>
            <Icon
              type='fontisto'
              name='smiley'
              size={(Dimensions.get('window').width * 0.8) / 5 - 10}
              color={mood == 5 ? '#4CB97A' : '#816868'}
            />
          </Pressable>
          <Text
            style={{
              color:
                mood == 5
                  ? '#4CB97A'
                  : global.colorblindMode
                  ? global.cb_textColor
                  : global.textColor,
              fontSize: 16,
              textAlign: 'center',
            }}>
            Great
          </Text>
        </View>
      </View>

      {/* Add Feelings button */}
      <View style={{ width: '40%', marginTop: 10 }}>
        <Button
          title='+ Add Feelings'
          onPress={() => setShowFeelings(!showFeelings)}
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
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
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
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
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
  });
