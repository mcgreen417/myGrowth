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

function removeFood(foods, setFoods, index) {
  console.log(foods);
  let tempFoods = [...foods];
  tempFoods.pop(index);
  setFoods(tempFoods);
}

const AddFood = ({
  index,
  foods,
  setFoods,
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
  setFiber,
  setName,
  setMeasurement,
  setAmount,
  setCalories,
  setFats,
  setCholesterol,
  setSodium,
  setCarbs,
  setSugars,
  setProtein,
  setVitaminD,
  setCalcium,
  setIron,
  setPotassium,
  editable,
}) => {
  return (
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
          style={{
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
            width: 100,
          }}
          value={name}
          onChangeText={(val) => {
            editable ? setName(val) : null;
          }}
          editable={editable}
        />
        {index != null && setFoods != null && (
          <Icon
            name='close'
            onPress={() => removeFood(foods, setFoods, index)}
          />
        )}
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
            editable ? setMeasurement(val) : null;
          }}
          editable={editable}
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
            editable ? setAmount(val) : null;
          }}
          keyboardType='number-pad'
          editable={editable}
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
          style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
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
              editable ? setCalories(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> cal</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
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
              editable ? setFats(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
          style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
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
              editable ? setCholesterol(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> mg</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
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
              editable ? setSodium(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
          style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
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
              editable ? setCarbs(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> g</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
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
              editable ? setFiber(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
          style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
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
              editable ? setSugars(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> g</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
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
              editable ? setProtein(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
          style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
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
              editable ? setVitaminD(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> mcg</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
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
              editable ? setCalcium(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
          style={{ flexDirection: 'row', alignItems: 'center', width: '55%' }}>
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
              editable ? setIron(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> mg</Text>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', width: '45%' }}>
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
              editable ? setPotassium(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text style={styles().textAltLight}> mg</Text>
        </View>
      </View>
    </View>
  );
};

function removeMeal(meals, setMeals, index) {
  console.log(meals);
  let tempMeals = [...meals];
  tempMeals.pop(index);
  setMeals(tempMeals);
}

const AddMeal = ({
  meals,
  setMeals,
  index,
  foods,
  setFoods,
  calories,
  setCalories,
  proteins,
  setProteins,
  carbs,
  setCarbs,
  fats,
  setFats,
  editable,
}) => {
  const [foodCalories, setFoodCalories] = useState(0);
  const [foodName, setFoodName] = useState('');
  const [foodMeasurement, setFoodMeasurement] = useState(0);
  const [foodAmount, setFoodAmount] = useState(0);
  const [foodFats, setFoodFats] = useState(0);
  const [foodCholesterol, setFoodCholesterol] = useState(0);
  const [foodSodium, setFoodSodium] = useState(0);
  const [foodFiber, setFoodFiber] = useState(0);
  const [foodCarbs, setFoodCarbs] = useState(0);
  const [foodSugars, setFoodSugars] = useState(0);
  const [foodProtein, setFoodProtein] = useState(0);
  const [foodVitaminD, setFoodVitaminD] = useState(0);
  const [foodCalcium, setFoodCalcium] = useState(0);
  const [foodIron, setFoodIron] = useState(0);
  const [foodPotassium, setFoodPotassium] = useState(0);

  return (
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
          style={{
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 1,
            width: 100,
          }}
        />
        {index != null && (
          <Icon
            name='close'
            onPress={() => removeMeal(meals, setMeals, index)}
          />
        )}
      </View>
      {foods != null &&
        foods.map((item, index) => {
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
              key={index}
              index={index}
              foods={foods}
              setFoods={setFoods}
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
              editable={false}
            />
          );
        })}
      {index == null && (
        <AddFood
          foods={foods}
          setFoods={setFoods}
          fiber={foodFiber}
          name={foodName}
          measurement={foodMeasurement}
          amount={foodAmount}
          calories={foodCalories}
          fats={foodFats}
          cholesterol={foodCholesterol}
          sodium={foodSodium}
          carbs={foodCarbs}
          sugars={foodSugars}
          protein={foodProtein}
          vitaminD={foodVitaminD}
          calcium={foodCalcium}
          iron={foodIron}
          potassium={foodPotassium}
          setFiber={setFoodFiber}
          setName={setFoodName}
          setMeasurement={setFoodMeasurement}
          setAmount={setFoodAmount}
          setCalories={setFoodCalories}
          setFats={setFoodFats}
          setCholesterol={setFoodCholesterol}
          setSodium={setFoodSodium}
          setCarbs={setFoodCarbs}
          setSugars={setFoodSugars}
          setProtein={setFoodProtein}
          setVitaminD={setFoodVitaminD}
          setCalcium={setFoodCalcium}
          setIron={setFoodIron}
          setPotassium={setFoodPotassium}
          editable={editable}
        />
      )}

      {index == null && (
        <View style={{ width: '40%', marginLeft: 10, marginBottom: 10 }}>
          <Button
            title='+ Add Food'
            color={
              global.colorblindMode
                ? global.cb_optionButtonsColor
                : global.optionButtonsColor
            }
            onPress={() => {
              let tempFoods = [...foods];
              tempFoods.push(
                JSON.stringify({
                  name: foodName,
                  measurement: foodMeasurement,
                  amount: foodAmount,
                  calories: foodCalories,
                  fats: foodFats,
                  cholesterol: foodCholesterol,
                  sodium: foodSodium,
                  carbs: foodCarbs,
                  fiber: foodFiber,
                  sugars: foodSugars,
                  protein: foodProtein,
                  vitaminD: foodVitaminD,
                  calcium: foodCalcium,
                  iron: foodIron,
                  potassium: foodPotassium,
                })
              );
              setFoods(tempFoods);
              setFoodFiber(0);
              setFoodName('');
              setFoodMeasurement(0);
              setFoodAmount(0);
              setFoodCalories(0);
              setFoodFats(0);
              setFoodCholesterol(0);
              setFoodSodium(0);
              setFoodCarbs(0);
              setFoodSugars(0);
              setFoodProtein(0);
              setFoodVitaminD(0);
              setFoodCalcium(0);
              setFoodIron(0);
              setFoodPotassium(0);
            }}
          />
        </View>
      )}
    </View>
  );
};

const AdvanceMealTracking = ({ meals, setMeals }) => {
  const [foods, setFoods] = useState([]);
  const [calories, setCalories] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);

  return (
    <View style={{ marginTop: 10 }}>
      {meals.map((item, index) => {
        return (
          <AddMeal
            key={index}
            index={index}
            foods={item.Food}
            meals={meals}
            setMeals={setMeals}
            calories={item.Calories}
            proteins={item.Proteins}
            carbs={item.Carbs}
            fats={item.Fats}
            editable={false}
          />
        );
      })}
      <AddMeal
        meals={meals}
        setMeals={setMeals}
        foods={foods}
        setFoods={setFoods}
        calories={calories}
        setCalories={setCalories}
        proteins={proteins}
        setProteins={setProteins}
        carbs={carbs}
        setCarbs={setCarbs}
        fats={fats}
        setFats={setFats}
        editable={true}
      />
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
              Food: foods,
              Calories: calories,
              Proteins: proteins,
              Carbs: carbs,
              Fats: fats,
            });
            setMeals(tempMeals);
            setFoods([]);
            setCalories(0);
            setProteins(0);
            setCarbs(0);
            setFats(0);
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

      <View style={{ marginTop: 10, }}>
        <View style={styles().line} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles().text}>Have you eaten today?</Text>
          <View style={styles().switchView}>
            <View style={styles().line2} />
            <Switch
              trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
              thumbColor={eatenToday ? '#4CB97A' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={() => setEatenToday(!eatenToday)}
              value={eatenToday}
              style={{ marginLeft: 8, }}
            />
          </View>
        </View>
        <View style={styles().line} />
      </View>

      {eatenToday &&
        <View style={{ marginTop: 10, }}>
          <Text style={styles().text}>
            If you kept track of your calories, how many calories did you consume?
            (Leave field blank if you are unsure.)
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder='#'
              color='#816868'
              fontSize={18}
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
      }

      <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: -10 }}>
        <Text
          style={styles().heading}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}>
          ADVANCED MEAL TRACKING
        </Text>
        <Icon
          name={showAdvanceMealTracking ? 'arrow-drop-up' : 'arrow-drop-down'}
          onPress={() => setShowAdvanceMealTracking(!showAdvanceMealTracking)}
          color={global.colorblindMode ? global.cb_textColor : global.textColor}
        />
      </View>
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
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textAltLight: {
      color: '#E5E5E5',
      fontSize: 16,
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
  });
