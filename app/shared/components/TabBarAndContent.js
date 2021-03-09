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
                    {/* display image */}
                </Pressable>
            </View>

            {/* Gen comp version: mood, stress, period, meal */}
            <View>
                {/* History */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* Correlation */}
                <Pressable>
                    {/* display image */}
                </Pressable>
            </View>

            {/* daily activities */}
            <View>
                {/* history */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* activity view */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* correlation */}
                <Pressable>
                    {/* display image */}
                </Pressable>
            </View>

            {/* general health */}
            <View>
                {/* history */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* intensity */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* correlation */}
                <Pressable>
                    {/* display image */}
                </Pressable>
            </View>

            {/* medication */}
            <View>
                {/* prescription */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* correlation */}
                <Pressable>
                    {/* display image */}
                </Pressable>
            </View>

            {/* sleep */}
            <View>
                {/* time asleep */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* quality */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* correlation */}
                <Pressable>
                    {/* display image */}
                </Pressable>
            </View>

            {/* fitness */}
            <View>
                {/* history */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* exercises */}
                <Pressable>
                    {/* display image */}
                </Pressable>
                {/* correlation */}
                <Pressable>
                    {/* display image */}
                </Pressable>
            </View>
        </View>
    );
};

//export default TabBarandContent;

const styles = StyleSheet.create({

});