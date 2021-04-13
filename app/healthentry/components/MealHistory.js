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
        <Text>Serving measurement: </Text>
        <TextInput
          placeholder='Tbsp, bags, etc.'
          style={{
            borderBottomColor: '#C4BEBD',
            borderBottomWidth: 1,
            textAlign: 'center',
            width: 100,
          }}
          value={measurement.toString()}
          onChangeText={(val) => {
            editable ? setMeasurement(val) : null;
          }}
          editable={editable}
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
          value={amount.toString()}
          onChangeText={(val) => {
            editable ? setAmount(val) : null;
          }}
          keyboardType='number-pad'
          editable={editable}
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
            value={calories.toString()}
            onChangeText={(val) => {
              editable ? setCalories(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={fats.toString()}
            onChangeText={(val) => {
              editable ? setFats(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={cholesterol.toString()}
            onChangeText={(val) => {
              editable ? setCholesterol(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={sodium.toString()}
            onChangeText={(val) => {
              editable ? setSodium(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={carbs.toString()}
            onChangeText={(val) => {
              editable ? setCarbs(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={fiber.toString()}
            onChangeText={(val) => {
              editable ? setFiber(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={sugars.toString()}
            onChangeText={(val) => {
              editable ? setSugars(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={protein.toString()}
            onChangeText={(val) => {
              editable ? setProtein(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={vitaminD.toString()}
            onChangeText={(val) => {
              editable ? setVitaminD(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={calcium.toString()}
            onChangeText={(val) => {
              editable ? setCalcium(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={iron.toString()}
            onChangeText={(val) => {
              editable ? setIron(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
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
            value={potassium.toString()}
            onChangeText={(val) => {
              editable ? setPotassium(val) : null;
            }}
            keyboardType='number-pad'
            editable={editable}
          />
          <Text>mg</Text>
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
        <View style={{ width: '50%', marginLeft: 10 }}>
          <Button
            title='+ Add Food'
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
      <View style={{ width: '50%' }}>
        <Button
          title='+ Add Meal'
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
          value={totalCalories.toString()}
          onChangeText={setTotalCalories}
          keyboardType='number-pad'
        />
        <Text> cal</Text>
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
      {showAdvanceMealTracking && (
        <AdvanceMealTracking meals={meals} setMeals={setMeals} />
      )}
    </View>
  );
};

export default MealHistory;

const styles = StyleSheet.create({});
