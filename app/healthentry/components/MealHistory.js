import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Icon } from 'react-native-elements';

function removeFood(meals, setMeals, mealIndex, foodIndex) {
  let tempMeals = [...meals];
  tempMeals[mealIndex].Food.pop(foodIndex);
  setMeals(tempMeals);
}

const AddFood = ({
  meals,
  setMeals,
  mealIndex,
  foodIndex,
  fiber,
  name,
  measurement,
  amount,
  calories,
  fats,
  cholesterol,
  sodium,
  carbs,
  sugars,
  protein,
  vitaminD,
  calcium,
  iron,
  potassium,
}) => {
  const [deleteFood, setDeleteFood] = useState(false);

  return (
    <View>
      {/* Delete food modal */}
      <View style={styles().container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={deleteFood}
          onRequestClose={() => {
            setDeleteFood(!deleteFood);
          }}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setDeleteFood(!deleteFood)}>
            <View style={styles().modalContainer}>
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                  }}>
                  <Icon
                    name='fastfood'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Delete Food</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginVertical: 10,
                }}>
                <Text style={styles().text}>
                  Are you sure you wish to delete this food?
                </Text>
                <Text style={styles().textBoldAlt}>
                  This action cannot be undone.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginVertical: 10,
                  marginHorizontal: '5%',
                }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => {
                    setDeleteFood(!deleteFood);
                    removeFood(meals, setMeals, mealIndex, foodIndex);
                  }}>
                  <Text style={styles().textButton}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeleteFood(!deleteFood)}>
                  <Text style={styles().textButton}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>
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
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder='Food name'
            color='#C4BEBD'
            placeholderTextColor='#C4BEBD'
            fontSize={16}
            style={{
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              width: 150,
            }}
            value={name}
            onChangeText={(val) => {
              let tempMeals = [...meals];
              let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
              tempFood.name = val.toString();
              tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
              setMeals(tempMeals);
            }}
          />
          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
            <Icon
              name='close'
              color={
                global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor
              }
              onPress={() => setDeleteFood(!deleteFood)}
            />
          </View>
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
            value={measurement.toString()}
            onChangeText={(val) => {
              let tempMeals = [...meals];
              let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
              tempFood.measurement = val.toString();
              tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
              setMeals(tempMeals);
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
            value={amount.toString()}
            onChangeText={(val) => {
              let tempMeals = [...meals];
              let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
              tempFood.amount = parseInt(val || 0);
              tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
              setMeals(tempMeals);
            }}
            keyboardType='number-pad'
          />
          <Text style={styles().textAltLight}> servings</Text>
        </View>
        <View>
          <Text style={styles().headingAlt}>NUTRIENTS PER SERVING:</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-around',
            // width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',
            }}>
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
              value={calories.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.calories = parseInt(val || 0);
                tempMeals[mealIndex].Calories =
                  tempMeals[mealIndex].Calories -
                  parseInt(calories) +
                  tempFood.calories;
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> cal</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}>
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
              value={fats.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.fats = parseInt(val || 0);
                tempMeals[mealIndex].Fats =
                  tempMeals[mealIndex].Fats - parseInt(fats) + tempFood.fats;
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> g</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-around',
            // width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',
            }}>
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
              value={cholesterol.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.cholesterol = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> mg</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}>
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
              value={sodium.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.sodium = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> mg</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',
            }}>
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
              value={carbs.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.carbs = parseInt(val || 0);
                tempMeals[mealIndex].Carbs =
                  tempMeals[mealIndex].Carbs - parseInt(carbs) + tempFood.carbs;
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> g</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}>
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
              value={fiber.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.fiber = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> g</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',
            }}>
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
              value={sugars.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.sugars = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> g</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}>
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
              value={protein.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.protein = parseInt(val || 0);
                tempMeals[mealIndex].Proteins =
                  tempMeals[mealIndex].Proteins -
                  parseInt(protein) +
                  tempFood.protein;
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> g</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',
            }}>
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
              value={vitaminD.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.vitaminD = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> mcg</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}>
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
              value={calcium.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.calcium = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> mg</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-around',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',
            }}>
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
              value={iron.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.iron = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> mg</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '45%',
            }}>
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
              value={potassium.toString()}
              onChangeText={(val) => {
                let tempMeals = [...meals];
                let tempFood = JSON.parse(tempMeals[mealIndex].Food[foodIndex]);
                tempFood.potassium = parseInt(val || 0);
                tempMeals[mealIndex].Food[foodIndex] = JSON.stringify(tempFood);
                setMeals(tempMeals);
              }}
              keyboardType='number-pad'
            />
            <Text style={styles().textAltLight}> mg</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

function removeMeal(meals, setMeals, index) {
  let tempMeals = [...meals];
  tempMeals.pop(index);
  setMeals(tempMeals);
}

const AddMeal = ({ meals, setMeals, index, foods, mealName }) => {
  const [deleteMeal, setDeleteMeal] = useState(false);

  return (
    <View>
      {/* Delete meal modal */}
      <View style={styles().container}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={deleteMeal}
          onRequestClose={() => {
            setDeleteMeal(!deleteMeal);
          }}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              backgroundColor: '#00000055',
            }}
            onPressOut={() => setDeleteMeal(!deleteMeal)}>
            <View style={styles().modalContainer}>
              <View style={styles().modalHeaderBar}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 2,
                    marginLeft: 6,
                    marginVertical: 4,
                  }}>
                  <Icon
                    name='restaurant'
                    color='white'
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles().textAlt}>Delete Meal</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginHorizontal: '5%',
                  maxHeight: '60%',
                  marginVertical: 10,
                }}>
                <Text style={styles().text}>
                  Are you sure you wish to delete this meal?
                </Text>
                <Text style={styles().textBoldAlt}>
                  This action cannot be undone.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginVertical: 10,
                  marginHorizontal: '5%',
                }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => {
                    setDeleteMeal(!deleteMeal);
                    removeMeal(meals, setMeals, index);
                  }}>
                  <Text style={styles().textButton}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDeleteMeal(!deleteMeal)}>
                  <Text style={styles().textButton}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Pressable>
        </Modal>
      </View>

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
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder='Meal name'
            color='#C4BEBD'
            placeholderTextColor='#C4BEBD'
            fontSize={16}
            value={mealName}
            onChangeText={(val) => {
              let tempMeals = [...meals];
              tempMeals[index].Name = val;
              setMeals(tempMeals);
            }}
            style={{
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 1,
              width: 150,
            }}
          />
          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
            <Icon
              name='close'
              color={
                global.colorblindMode
                  ? global.cb_optionButtonsColor
                  : global.optionButtonsColor
              }
              onPress={() => setDeleteMeal(!deleteMeal)}
            />
          </View>
        </View>
        {foods.map((item, foodIndex) => {
          const {
            name,
            measurement,
            amount,
            calories,
            fats,
            cholesterol,
            sodium,
            carbs,
            fiber,
            sugars,
            protein,
            vitaminD,
            calcium,
            iron,
            potassium,
          } = JSON.parse(item);
          return (
            <AddFood
              key={foodIndex}
              meals={meals}
              setMeals={setMeals}
              mealIndex={index}
              foodIndex={foodIndex}
              fiber={fiber}
              name={name}
              measurement={measurement}
              amount={amount}
              calories={calories}
              fats={fats}
              cholesterol={cholesterol}
              sodium={sodium}
              carbs={carbs}
              sugars={sugars}
              protein={protein}
              vitaminD={vitaminD}
              calcium={calcium}
              iron={iron}
              potassium={potassium}
            />
          );
        })}

        <View style={{ width: '40%', marginLeft: 10, marginBottom: 10 }}>
          <Button
            title='+ Add Food'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => {
              let tempMeals = [...meals];
              tempMeals[index].Food.push(
                JSON.stringify({
                  name: '',
                  measurement: '',
                  amount: 0,
                  calories: 0,
                  fats: 0,
                  cholesterol: 0,
                  sodium: 0,
                  carbs: 0,
                  fiber: 0,
                  sugars: 0,
                  protein: 0,
                  vitaminD: 0,
                  calcium: 0,
                  iron: 0,
                  potassium: 0,
                })
              );
              setMeals(tempMeals);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const AdvanceMealTracking = ({ meals, setMeals }) => {
  return (
    <View style={{ marginTop: 10 }}>
      {meals.map((item, index) => {
        return (
          <AddMeal
            key={index}
            index={index}
            meals={meals}
            setMeals={setMeals}
            foods={item.Food}
            mealName={item.Name}
          />
        );
      })}

      <View style={{ width: '40%' }}>
        <Button
          title='+ Add Meal'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
          onPress={() => {
            let tempMeals = [...meals];
            tempMeals.push({
              Name: '',
              Food: [],
              Calories: 0,
              Proteins: 0,
              Carbs: 0,
              Fats: 0,
            });
            setMeals(tempMeals);
          }}
        />
      </View>
    </View>
  );
};

const MealHistory = ({
  eatenToday,
  setEatenToday,
  totalCalories,
  setTotalCalories,
  totalProteins,
  setTotalProteins,
  totalCarbs,
  setTotalCarbs,
  totalFats,
  setTotalFats,
  meals,
  setMeals,
}) => {
  const [showAdvanceMealTracking, setShowAdvanceMealTracking] = useState(false);

  return (
    <View style={{ width: '90%' }}>
      <Text style={styles().heading}>MEAL HISTORY</Text>

      <View style={{ marginTop: 10 }}>
        <View style={styles().line} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles().text}>Did you eat today?</Text>
          <View style={styles().switchView}>
            <View style={styles().line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={eatenToday ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={() => setEatenToday(!eatenToday)}
              value={eatenToday}
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
        <View style={styles().line} />
      </View>

      {eatenToday && (
        <View style={{ marginTop: 10 }}>
          <Text style={styles().text}>
            If you kept track of your calories, how many calories did you
            consume?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder='#'
              color='#816868'
              fontSize={16}
              style={{
                borderBottomColor: '#C4BEBD',
                borderBottomWidth: 1,
                textAlign: 'center',
                width: 50,
              }}
              //value={totalCalories.toString()}
              onChangeText={setTotalCalories}
              keyboardType='number-pad'
            />
            <Text style={styles().text}> cal</Text>
          </View>
        </View>
      )}

      <Pressable
        style={{ flexDirection: 'row', marginTop: 20, marginBottom: -10 }}
        onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}>
        <Text style={styles().headingSub}>ADVANCED MEAL TRACKING</Text>
        <Icon
          name={showAdvanceMealTracking ? 'arrow-drop-up' : 'arrow-drop-down'}
          color={global.colorblindMode ? global.cb_textColor : global.textColor}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}
        />
      </Pressable>
      {showAdvanceMealTracking && (
        <AdvanceMealTracking meals={meals} setMeals={setMeals} />
      )}
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
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    headingSub: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
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
    modalContainer: {
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      alignItems: 'center',
      width: '80%',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    modalHeaderBar: {
      backgroundColor: global.colorblindMode
        ? global.cb_optionButtonsColor
        : global.optionButtonsColor,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textAlt: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
    },
    textBoldAlt: {
      fontSize: 16,
      color: '#816868',
      fontWeight: 'bold',
      marginTop: 4,
    },
    textButton: {
      fontSize: 16,
      color: '#4CB97A',
      fontWeight: 'bold',
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
