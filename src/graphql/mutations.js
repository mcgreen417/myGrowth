/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTodo = /* GraphQL */ `
  mutation AddTodo(
    $UserID: ID
    $title: String!
    $timestamp: AWSDateTime
    $category: String!
    $due: AWSDateTime!
    $details: String!
  ) {
    addTodo(
      UserID: $UserID
      title: $title
      timestamp: $timestamp
      category: $category
      due: $due
      details: $details
    ) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Due
      Details
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $UserID: ID
    $title: String!
    $timestamp: AWSDateTime!
    $completed: Boolean!
    $category: String!
    $due: AWSDateTime!
    $details: String!
  ) {
    updateTodo(
      UserID: $UserID
      title: $title
      timestamp: $timestamp
      completed: $completed
      category: $category
      due: $due
      details: $details
    ) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Due
      Details
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($UserID: ID, $timestamp: AWSDateTime!) {
    deleteTodo(UserID: $UserID, timestamp: $timestamp) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Due
      Details
    }
  }
`;
export const addMilestone = /* GraphQL */ `
  mutation AddMilestone(
    $UserID: ID
    $Title: String!
    $Timestamp: AWSDateTime
    $Category: String!
    $Requirement: Int!
    $Progress: Int!
    $Reward: Int!
  ) {
    addMilestone(
      UserID: $UserID
      Title: $Title
      Timestamp: $Timestamp
      Category: $Category
      Requirement: $Requirement
      Progress: $Progress
      Reward: $Reward
    ) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Requirement
      Progress
      Reward
    }
  }
`;
export const updateMilestone = /* GraphQL */ `
  mutation UpdateMilestone(
    $UserID: ID
    $Title: String!
    $Timestamp: AWSDateTime!
    $Completed: Boolean!
    $Category: String!
    $Requirement: Int!
    $Progress: Int!
    $Reward: Int!
  ) {
    updateMilestone(
      UserID: $UserID
      Title: $Title
      Timestamp: $Timestamp
      Completed: $Completed
      Category: $Category
      Requirement: $Requirement
      Progress: $Progress
      Reward: $Reward
    ) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Requirement
      Progress
      Reward
    }
  }
`;
export const deleteMilestone = /* GraphQL */ `
  mutation DeleteMilestone($UserID: ID, $timestamp: AWSDateTime!) {
    deleteMilestone(UserID: $UserID, timestamp: $timestamp) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Requirement
      Progress
      Reward
    }
  }
`;
export const addSetting = /* GraphQL */ `
  mutation AddSetting($UserID: ID, $options: OptionInput!) {
    addSetting(UserID: $UserID, options: $options) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const updateSetting = /* GraphQL */ `
  mutation UpdateSetting($UserID: ID, $options: OptionInput!) {
    updateSetting(UserID: $UserID, options: $options) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const deleteSetting = /* GraphQL */ `
  mutation DeleteSetting($UserID: ID) {
    deleteSetting(UserID: $UserID) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const addMedication = /* GraphQL */ `
  mutation AddMedication($UserID: ID, $medication: MedicationInput!) {
    addMedication(UserID: $UserID, medication: $medication) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const updateMedication = /* GraphQL */ `
  mutation UpdateMedication(
    $UserID: ID
    $medication: MedicationInput!
    $index: Int!
  ) {
    updateMedication(UserID: $UserID, medication: $medication, index: $index) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const removeMedication = /* GraphQL */ `
  mutation RemoveMedication($UserID: ID, $index: Int!) {
    removeMedication(UserID: $UserID, index: $index) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const updatePlantData = /* GraphQL */ `
  mutation UpdatePlantData($UserID: ID, $plantData: PlantDataIn!) {
    updatePlantData(UserID: $UserID, plantData: $plantData) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const updatePoints = /* GraphQL */ `
  mutation UpdatePoints($UserID: ID, $points: Int!) {
    updatePoints(UserID: $UserID, points: $points) {
      UserID
      Options {
        stress
        dailyActivities
        weight
        period
        medication
        sleep
        meal
        fitness
        userHeight
        userWeight
        metric
        activityLevel
      }
      Medications {
        name
        times
      }
      PlantData {
        plant
        ownedPlants
        customizations
        ownedCustomizations
      }
      Points
    }
  }
`;
export const addDailyEntry = /* GraphQL */ `
  mutation AddDailyEntry(
    $UserID: ID
    $Timestamp: AWSDateTime
    $Health: HealthIn
    $Symptoms: [SymptomIn!]
    $Stress: StressIn
    $Mood: MoodIn
    $Sleep: SleepIn
    $Meals: MealsIn
    $Fitness: FitnessIn
    $Medcheck: [MedCheckIn!]
    $Activities: [ActivityIn!]
  ) {
    addDailyEntry(
      UserID: $UserID
      Timestamp: $Timestamp
      Health: $Health
      Symptoms: $Symptoms
      Stress: $Stress
      Mood: $Mood
      Sleep: $Sleep
      Meals: $Meals
      Fitness: $Fitness
      Medcheck: $Medcheck
      Activities: $Activities
    ) {
      UserID
      Timestamp
      Health {
        Period
        Weight
      }
      Symptoms {
        Title
        Severity
      }
      Stress {
        Severity
        Stressors
      }
      Mood {
        Mood
        Feelings
      }
      Sleep {
        Slept
        Start
        End
        Quality
        Naps {
          Start
          End
          Quality
        }
      }
      Meals {
        Ate
        TotalCalories
        MealList {
          Name
          Food
          Calories
          Proteins
          Carbs
          Fats
        }
        TotalProteins
        TotalCarbs
        TotalFats
      }
      Fitness {
        Exercised
        Duration
        CaloriesBurned
        Steps
        Exercises {
          Name
          Sets
          Reps
          Duration
          Weight
          CaloriesBurned
        }
      }
      Medcheck {
        Name
        Taken
      }
      Activities {
        Name
        Duration
      }
    }
  }
`;
export const updateDailyEntry = /* GraphQL */ `
  mutation UpdateDailyEntry(
    $UserID: ID
    $Timestamp: AWSDateTime!
    $Health: HealthIn
    $Symptoms: [SymptomIn!]
    $Stress: StressIn
    $Mood: MoodIn
    $Sleep: SleepIn
    $Meals: MealsIn
    $Fitness: FitnessIn
    $Medcheck: [MedCheckIn!]
    $Activities: [ActivityIn!]
  ) {
    updateDailyEntry(
      UserID: $UserID
      Timestamp: $Timestamp
      Health: $Health
      Symptoms: $Symptoms
      Stress: $Stress
      Mood: $Mood
      Sleep: $Sleep
      Meals: $Meals
      Fitness: $Fitness
      Medcheck: $Medcheck
      Activities: $Activities
    ) {
      UserID
      Timestamp
      Health {
        Period
        Weight
      }
      Symptoms {
        Title
        Severity
      }
      Stress {
        Severity
        Stressors
      }
      Mood {
        Mood
        Feelings
      }
      Sleep {
        Slept
        Start
        End
        Quality
        Naps {
          Start
          End
          Quality
        }
      }
      Meals {
        Ate
        TotalCalories
        MealList {
          Name
          Food
          Calories
          Proteins
          Carbs
          Fats
        }
        TotalProteins
        TotalCarbs
        TotalFats
      }
      Fitness {
        Exercised
        Duration
        CaloriesBurned
        Steps
        Exercises {
          Name
          Sets
          Reps
          Duration
          Weight
          CaloriesBurned
        }
      }
      Medcheck {
        Name
        Taken
      }
      Activities {
        Name
        Duration
      }
    }
  }
`;
export const deleteDailyEntry = /* GraphQL */ `
  mutation DeleteDailyEntry($UserID: ID, $Timestamp: AWSDateTime!) {
    deleteDailyEntry(UserID: $UserID, Timestamp: $Timestamp) {
      UserID
      Timestamp
      Health {
        Period
        Weight
      }
      Symptoms {
        Title
        Severity
      }
      Stress {
        Severity
        Stressors
      }
      Mood {
        Mood
        Feelings
      }
      Sleep {
        Slept
        Start
        End
        Quality
        Naps {
          Start
          End
          Quality
        }
      }
      Meals {
        Ate
        TotalCalories
        MealList {
          Name
          Food
          Calories
          Proteins
          Carbs
          Fats
        }
        TotalProteins
        TotalCarbs
        TotalFats
      }
      Fitness {
        Exercised
        Duration
        CaloriesBurned
        Steps
        Exercises {
          Name
          Sets
          Reps
          Duration
          Weight
          CaloriesBurned
        }
      }
      Medcheck {
        Name
        Taken
      }
      Activities {
        Name
        Duration
      }
    }
  }
`;
export const updateJournalEntry = /* GraphQL */ `
  mutation UpdateJournalEntry(
    $UserID: ID
    $Timestamp: AWSDateTime!
    $Entry: String!
    $FreqWords: [FreqWordsIn!]
    $LastUpdated: AWSDateTime
  ) {
    updateJournalEntry(
      UserID: $UserID
      Timestamp: $Timestamp
      Entry: $Entry
      FreqWords: $FreqWords
      LastUpdated: $LastUpdated
    ) {
      Entry
      Timestamp
      FreqWords {
        word
        count
      }
      LastUpdated
    }
  }
`;
export const removeJournalEntry = /* GraphQL */ `
  mutation RemoveJournalEntry($UserID: ID, $Timestamp: AWSDateTime!) {
    removeJournalEntry(UserID: $UserID, Timestamp: $Timestamp) {
      Entry
      Timestamp
      FreqWords {
        word
        count
      }
      LastUpdated
    }
  }
`;
