import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
} from 'react-native';
import { Icon } from 'react-native-elements';

const AdvanceMealTracking = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          backgroundColor: '#816868',
          borderRadius: 10,
          padding: 10,
          paddingBottom: 10,
          marginBottom: 20,
          paddingTop: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 7,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon 
            name='restaurant' 
            color={global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor}
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder='Meal name'
            color='#C4BEBD'
            placeholderTextColor='#C4BEBD'
            style={{
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              width: 100,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#553C3C',
            borderRadius: 10,
            padding: 10,
            margin: 10,
            paddingBottom: 10,
            paddingTop: 15,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 7,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Icon 
              name='fastfood'
              color={global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor}
              style={{ marginRight: 8 }} 
            />
            <TextInput
              placeholder='Food name'
              color='#C4BEBD'
              placeholderTextColor='#C4BEBD'
              style={{
                borderBottomColor: '#E5E5E5',
                borderBottomWidth: 1,
                width: 100,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().textAltLight}>Serving measurement: </Text>
            <TextInput
              placeholder='Tbsp, bags, etc.'
              color='#C4BEBD'
              placeholderTextColor='#C4BEBD'
              style={{
                borderBottomColor: '#E5E5E5',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 125,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().textAltLight}>Serving amount: </Text>
            <TextInput
              placeholder='#'
              color='#C4BEBD'
              placeholderTextColor='#C4BEBD'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> servings</Text>
          </View>
          <Text style={styles().headingAlt}>NUTRIENTS PER SERVING:</Text>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
              <Text style={styles().textAltLight}>Calories: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> cal</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
              <Text style={styles().textAltLight}>Total Fat: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> g</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
              <Text style={styles().textAltLight}>Cholesterol: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> mg</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
              <Text style={styles().textAltLight}>Sodium: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> mg</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
              <Text style={styles().textAltLight}>Total Carbs: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> g</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
              <Text style={styles().textAltLight}>Fiber: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> g</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
              <Text style={styles().textAltLight}>Total Sugars: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> g</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
              <Text style={styles().textAltLight}>Protein: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> g</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
              <Text style={styles().textAltLight}>Vitamin D: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> mcg</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
              <Text style={styles().textAltLight}>Calcium: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> mg</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
              <Text style={styles().textAltLight}>Iron: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> mg</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
              <Text style={styles().textAltLight}>Potassium: </Text>
              <TextInput
                placeholder='#'
                color='#C4BEBD'
                placeholderTextColor='#C4BEBD'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                  width: 30,
                }}
                keyboardType='number-pad'
              />
              <Text style={styles().textAltLight}> mg</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '40%', marginLeft: 10, marginBottom: 10, }}>
          <Button 
            title='+ Add Food' 
            color={
              global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor}
          />
        </View>
      </View>
      <View style={{ width: '40%' }}>
        <Button 
          title='+ Add Meal' 
          color={
            global.colorblindMode
            ? global.cb_optionButtonsColor
            : global.optionButtonsColor}
        />
      </View>
    </View>
  );
};

const MealHistory = ({
  eatenToday,
  setEatenToday,
  showAdvanceMealTracking,
  setShowAdvanceMealTracking,
}) => {
  return (
    <View style={{ width: '90%' }}>
      <Text style={styles().heading}>MEAL HISTORY</Text>

      <View style={{ marginTop: 10, marginBottom: 20, }}>
        <View style={styles().line}/>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles().text}>Have you eaten today?</Text>
          <View style={styles().switchView}>
            <View style={styles().line2}/>
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={eatenToday ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={() => setEatenToday(!eatenToday)}
              value={eatenToday}
            />
          </View>
        </View>
        <View style={styles().line}/>
      </View>

      <Text style={styles().text}>
        If you kept track of your calories, how many calories did you consume?
        (Leave field blank if you are unsure.)
      </Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
            width: 50,
          }}
          keyboardType='number-pad'
        />
        <Text style={styles().text}> cal</Text>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: -10, }}>
        <Text
          style={styles().heading}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}>
          ADVANCED MEAL TRACKING
        </Text>
        <Icon
          name={showAdvanceMealTracking ? 'arrow-drop-up' : 'arrow-drop-down'}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}
          color={global.colorblindMode 
            ? global.cb_textColor 
            : global.textColor}
        />
      </View>
      {showAdvanceMealTracking && <AdvanceMealTracking />}
    </View>
  );
};

export default MealHistory;

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
    headingAlt: {
      color: '#E5E5E5',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    line: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderBottomWidth: 1,
      minHeight: 1,
    },
    line2: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderRightWidth: 1,
      minHeight: 28,
      marginTop: 4,
      marginBottom: 4,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
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
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: global.colorblindMode 
        ? global.cb_textColor 
        : global.textColor,
      fontSize: 16,
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline'
    },
  });
