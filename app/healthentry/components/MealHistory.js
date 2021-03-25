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
          backgroundColor: '#E5E5E5',
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
          <Icon name='restaurant' />
          <TextInput
            placeholder='Meal name'
            style={{
              borderBottomColor: '#C4BEBD',
              borderBottomWidth: 1,
              textAlign: 'center',
              width: 100,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#DADADA',
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
            <Icon name='fastfood' />
            <TextInput
              placeholder='Food name'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 100,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Serving measurement: </Text>
            <TextInput
              placeholder='Tbsp, bags, etc.'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 100,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Serving amount: </Text>
            <TextInput
              placeholder='#'
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
              }}
              keyboardType='number-pad'
            />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>NUTRIENTS PER SERVING:</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              // width: '100%',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Calories: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>cal </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Total Fat: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>g</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              // width: '100%',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Cholesterol: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>mg</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Sodium: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>mg</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Total Carbs: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>g</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Fiber: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>g</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Total Sugars: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>g</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Protein: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>g</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Vitamin D: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>mcg</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Calcium: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>mg</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Iron: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>mg</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>Potassium: </Text>
              <TextInput
                placeholder='#'
                style={{
                  borderBottomColor: '#C4BEBD',
                  borderBottomWidth: 1,
                  textAlign: 'center',
                }}
                keyboardType='number-pad'
              />
              <Text>mg</Text>
            </View>
          </View>
        </View>
        <View style={{ width: '50%', marginLeft: 10 }}>
          <Button title='+ Add Food' />
        </View>
      </View>
      <View style={{ width: '50%' }}>
        <Button title='+ Add Meal' />
      </View>
    </View>
  );
};

const MealHistory = () => {
  const [eatenToday, setEatenToday] = useState(true);
  const [showAdvanceMealTracking, setShowAdvanceMealTracking] = useState(false);
  return (
    <View style={{ width: '80%' }}>
      <Text>Meal History</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Have you eaten today?</Text>
        <Switch
          trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
          thumbColor={eatenToday ? '#4CB97A' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => setEatenToday(!eatenToday)}
          value={eatenToday}
        />
      </View>
      <Text>
        If you kept track of your calories, how many calories did you consume?
        (Leave field blank if you are unsure.)
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          placeholder='#'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
          }}
          keyboardType='number-pad'
        />
        <Text>cal</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={{ fontWeight: 'bold' }}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}>
          ADVANCED MEAL TRACKING
        </Text>
        <Icon
          name={showAdvanceMealTracking ? 'arrow-drop-up' : 'arrow-drop-down'}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}
        />
      </View>
      {showAdvanceMealTracking && <AdvanceMealTracking />}
    </View>
  );
};

export default MealHistory;

const styles = StyleSheet.create({});
