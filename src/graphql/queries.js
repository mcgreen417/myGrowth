/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const helloWorld = /* GraphQL */ `
  query HelloWorld($consumer_key: String, $consumer_secret: String) {
    helloWorld(consumer_key: $consumer_key, consumer_secret: $consumer_secret)
  }
`;
export const function2 = /* GraphQL */ `
  query Function2($consumer_key: String, $consumer_secret: String) {
    function2(consumer_key: $consumer_key, consumer_secret: $consumer_secret)
  }
`;
export const getMilestones = /* GraphQL */ `
  query GetMilestones($UserID: ID, $count: Int, $nextToken: String) {
    getMilestones(UserID: $UserID, count: $count, nextToken: $nextToken) {
      Milestones {
        UserID
        Title
        Completed
        Timestamp
        Category
        Progress
        Reward
      }
      nextToken
    }
  }
`;
export const getMilestone = /* GraphQL */ `
  query GetMilestone($UserID: ID, $timestamp: AWSDateTime!) {
    getMilestone(UserID: $UserID, timestamp: $timestamp) {
      UserID
      Title
      Completed
      Timestamp
      Category
      Progress
      Reward
    }
  }
`;
export const getTodos = /* GraphQL */ `
  query GetTodos($UserID: ID, $count: Int, $nextToken: String) {
    getTodos(UserID: $UserID, count: $count, nextToken: $nextToken) {
      toDos {
        UserID
        Title
        Completed
        Timestamp
        Category
        Due
        Details
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($UserID: ID, $timestamp: AWSDateTime!) {
    getTodo(UserID: $UserID, timestamp: $timestamp) {
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
export const getSetting = /* GraphQL */ `
  query GetSetting($UserID: ID) {
    getSetting(UserID: $UserID) {
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
export const getDailyEntry = /* GraphQL */ `
  query GetDailyEntry($UserID: ID, $Timestamp: AWSDateTime!) {
    getDailyEntry(UserID: $UserID, Timestamp: $Timestamp) {
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
      MedCheck {
        Name
        Taken
      }
      Activities {
        Activities {
          Name
          Duration
        }
      }
    }
  }
`;
export const getDailyEntries = /* GraphQL */ `
  query GetDailyEntries(
    $UserID: ID
    $count: Int
    $nextToken: String
    $timerange: String
  ) {
    getDailyEntries(
      UserID: $UserID
      count: $count
      nextToken: $nextToken
      timerange: $timerange
    ) {
      dailyEntries {
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
        MedCheck {
          Name
          Taken
        }
        Activities {
          Activities {
            Name
            Duration
          }
        }
      }
      nextToken
    }
  }
`;
export const getDailyEntriesAsc = /* GraphQL */ `
  query GetDailyEntriesAsc(
    $UserID: ID
    $count: Int
    $nextToken: String
    $timerange: String
  ) {
    getDailyEntriesAsc(
      UserID: $UserID
      count: $count
      nextToken: $nextToken
      timerange: $timerange
    ) {
      dailyEntries {
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
        MedCheck {
          Name
          Taken
        }
        Activities {
          Activities {
            Name
            Duration
          }
        }
      }
      nextToken
    }
  }
`;
export const getChartData = /* GraphQL */ `
  query GetChartData($UserID: ID) {
    getChartData(UserID: $UserID) {
      latestDate
      moodData
      stressData
      nightSleepData
      napSleepData
      nightQualityData
      napQualityData
      weightData
      periodData
      fitnessData {
        burned
        dur
        steps
        exercises
      }
      activityData
      mealData {
        calories
        carbs
        fats
        proteins
      }
      symptomData
      medicineData {
        allTaken
        meds
      }
    }
  }
`;
export const getJournalEntry = /* GraphQL */ `
  query GetJournalEntry($UserID: ID, $Timestamp: AWSDateTime!) {
    getJournalEntry(UserID: $UserID, Timestamp: $Timestamp) {
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
export const getJournalEntries = /* GraphQL */ `
  query GetJournalEntries(
    $UserID: ID
    $count: Int
    $nextToken: String
    $timerange: String
  ) {
    getJournalEntries(
      UserID: $UserID
      count: $count
      nextToken: $nextToken
      timerange: $timerange
    ) {
      journalEntries {
        Entry
        Timestamp
        FreqWords {
          word
          count
        }
        LastUpdated
      }
      nextToken
    }
  }
`;
