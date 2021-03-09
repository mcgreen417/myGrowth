import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Button,
    Pressable,
  } from 'react-native';
  import { Icon } from 'react-native-elements';

  const TabBarandContent = ({
      history = false,
      historyGenComp = false,
      dailyActivities = false,
      generalHealth = false,
      medication = false,
      sleep = false,
      fitness = false,
  }) => {
    return (
        <View>
            {/* History Comp version */}
            <View>
                {/* History */}
                <Pressable>

                </Pressable>
            </View>

            {/* Gen comp version: mood, stress, period, meal */}
            <View>
                {/* History */}
                <Pressable>

                </Pressable>
                {/* Correlation */}
                <Pressable>

                </Pressable>
            </View>

            {/* daily activities */}
            <View>
                {/* history */}
                <Pressable>

                </Pressable>
                {/* activity view */}
                <Pressable>

                </Pressable>
                {/* correlation */}
                <Pressable>

                </Pressable>
            </View>

            {/* general health */}
            <View>
                {/* history */}
                <Pressable>

                </Pressable>
                {/* intensity */}
                <Pressable>

                </Pressable>
                {/* correlation */}
                <Pressable>

                </Pressable>
            </View>

            {/* medication */}
            <View>
                {/* prescription */}
                <Pressable>

                </Pressable>
                {/* correlation */}
                <Pressable>

                </Pressable>
            </View>

            {/* sleep */}
            <View>
                {/* time asleep */}
                <Pressable>

                </Pressable>
                {/* quality */}
                <Pressable>

                </Pressable>
                {/* correlation */}
                <Pressable>

                </Pressable>
            </View>

            {/* fitness */}
            <View>
                {/* history */}
                <Pressable>

                </Pressable>
                {/* exercises */}
                <Pressable>

                </Pressable>
                {/* correlation */}
                <Pressable>
                    
                </Pressable>
            </View>
        </View>
    );
  };