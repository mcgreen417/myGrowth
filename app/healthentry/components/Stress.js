import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

{/* Add Stressors pop-up */}
const StressorsModal = ({ stressors, setStressors }) => {
  const [stressor, setStressor] = useState();
  
  return (
    <Pressable>
      {console.log(stressors)}
      <View style={styles().modalView}>
        {/* Stressors user input */}
        <View style={{ alignItems: 'center', flexDirection: 'row', }}>
          <Text style={styles().text}>Stressor:</Text>
          <TextInput
            placeholder='Stressor Name'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 150,
              marginLeft: 10,
            }}
            value={stressor}
            onChangeText={setStressor}
          />
        </View>
        
        {/* Add Stressor pop-up */}
        <View style={{ width: '50%', marginVertical: 20, }}>
          <Button
            title='Add Stressor'
            onPress={() => {
              let temp = new Array(stressor).concat(stressors);
              console.log('temp:', temp);
              setStressors(temp);
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

{/* Stressors section */}
const Stress = ({ stress, setStress, stressors, setStressors }) => {
  const [showStressors, setShowStressors] = useState(false);
  return (
    <View style={{ width: '90%' }}>
      {/* Add Stressors modal */}
      <Modal
        transparent={true}
        visible={showStressors}
        onRequestClose={() => {
          setShowStressors(!showStressors);
        }}>
        <Pressable
          onPressOut={() => setShowStressors(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <StressorsModal stressors={stressors} setStressors={setStressors} />
        </Pressable>
      </Modal>
      
      {/* Stress heading */}
      <Text style={styles().heading}>STRESS</Text>
      <Text style={styles().text}>How would you rate your level of stress today?</Text>

      {/* Stress slider */}
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 20,
            marginHorizontal: 10,
            alignItems: 'center',
            width: '83.5%',
          }}>
          <View
            style={{
              flex: 1,
              height: 5,
              backgroundColor: '#816868',
              position: 'absolute',
              position: 'absolute',
              zIndex: 0,
              left: 0,
              right: 0,
              bottom: 0,
              top: 20 / 2,
            }}/>

          {/* Not stresssed */}
          <Pressable onPress={() => setStress(0)}>
            <View
              style={{
                width: stress == 0 ? 25 : 5,
                height: 25,
                borderRadius: stress == 0 ? 25 : 10,
                backgroundColor: stress == 0 ? '#A5DFB2' : '#816868',
                marginLeft: stress == 0 ? -10 : 0,
                zIndex: 1,
              }}/>
            <Text style={styles().textSlider}>1</Text>
          </Pressable>
          <View style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4, }}/>

          {/* A bit stressed */}
          <Pressable onPress={() => setStress(1)}>
            <View
              style={{
                width: stress == 1 ? 25 : 5,
                height: 25,
                borderRadius: stress == 1 ? 25 : 10,
                backgroundColor: stress == 1 ? '#A5DFB2' : '#816868',
                marginLeft: stress == 1 ? -10 : 0,
                zIndex: 1,
              }}/>
            <Text style={styles().textSlider}>2</Text>
          </Pressable>
          <View style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4, }}/>

          {/* Stressed */}
          <Pressable onPress={() => setStress(2)}>
            <View
              style={{
                width: stress == 2 ? 25 : 5,
                height: 25,
                borderRadius: stress == 2 ? 25 : 10,
                backgroundColor: stress == 2 ? '#A5DFB2' : '#816868',
                marginLeft: stress == 2 ? -10 : 0,
                zIndex: 1,
              }}/>
            <Text style={styles().textSlider}>3</Text>
          </Pressable>
          <View style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4, }}/>

          {/* Very stressed */}
          <Pressable onPress={() => setStress(3)}>
            <View
              style={{
                width: stress == 3 ? 25 : 5,
                height: 25,
                borderRadius: stress == 3 ? 25 : 10,
                backgroundColor: stress == 3 ? '#A5DFB2' : '#816868',
                marginLeft: stress == 3 ? -10 : 0,
                zIndex: 1,
              }}/>
            <Text style={styles().textSlider}>4</Text>
          </Pressable>
          <View style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4, }}/>

          {/* Extremely stressed */}
          <Pressable onPress={() => setStress(4)}>
            <View
              style={{
                width: stress == 4 ? 25 : 5,
                height: 25,
                borderRadius: stress == 4 ? 25 : 10,
                backgroundColor: stress == 4 ? '#A5DFB2' : '#816868',
                marginLeft: stress == 4 ? -10 : 0,
                zIndex: 1,
              }}/>
            <Text style={styles().textSlider}>5</Text>
          </Pressable>
        </View>
      </View>

      {/* Add Stressors button */}
      <View style={{ width: '40%', }}>
        <Button
          title='+ Add Stressors'
          onPress={() => setShowStressors(true)}
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

export default Stress;

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
      color: global.colorblindMode
        ? global.cb_textColor
        : global.textColor,
      fontSize: 16,
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
    text: {
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 16,
    },
    textSlider: {
      flex: 1,
      flexGrow: 1,
      width: 45,
      textAlign: 'center',
      marginLeft: -20,
      flexWrap: 'wrap',
      marginTop: 4,
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 20,
    },
  });
