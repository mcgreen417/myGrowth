/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const helloWorld = /* GraphQL */ `
  query HelloWorld($consumer_key: String, $consumer_secret: String) {
    helloWorld(consumer_key: $consumer_key, consumer_secret: $consumer_secret)
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
  query GetDailyEntry($UserID: ID, $Timestamp: AWSDate!) {
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
export const getChartData = /* GraphQL */ `
  query GetChartData($UserID: ID) {
    getChartData(UserID: $UserID) {
      latestDate
      moodData
      stressData
      nightSleepData
      napSleepData
      weightData
      periodData
    }
  }
`;
export const getJournalEntry = /* GraphQL */ `
  query GetJournalEntry($UserID: ID, $Timestamp: AWSDate!) {
    getJournalEntry(UserID: $UserID, Timestamp: $Timestamp) {
      Entry
      Timestamp
      FreqWords {
        word
        count
      }
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
      }
      nextToken
    }
  }
`;
