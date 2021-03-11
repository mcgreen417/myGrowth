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
  import historyImg from '../../shared/assets/rectangle.png';
  import correlationImg from '../../shared/assets/icon.png';
  import activityImg from '../../shared/assets/icon.png';
  import intensityImg from '../../shared/assets/icon.png';
  import prescriptionImg from '../../shared/assets/icon.png';
  import timeSleepImg from '../../shared/assets/icon.png';
  import qualityImg from '../../shared/assets/icon.png';
  import exerciseImg from '../../shared/assets/icon.png';

  const TabBarandContent = ({
      history = false,
      historyGenComp = false,
      dailyActivities = false,
      generalHealth = false,
      medication = false,
      sleep = false,
      fitness = false,
  }) => {
    var imgSource = historyImg;

    /* History Comp version */
    if(history)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* History */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>History</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    /* Gen comp version: mood, stress, period, meal */
    if(historyGenComp)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* History */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>History</Text>
                    </Pressable>

                    {/* Correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    /* daily activities */
    if(dailyActivities)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* history */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>History</Text>
                    </Pressable>

                    {/* activity view */}
                    <Pressable
                        onPress = {() => {imgSource = activityImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Activity View</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    /* general health */
    if(generalHealth)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* history */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>History</Text>
                    </Pressable>

                    {/* intensity */}
                    <Pressable
                        onPress = {() => {imgSource = intensityImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Intensity</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    /* medication */
    if(medication)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* prescription */}
                    <Pressable
                        onPress = {() => {imgSource = prescriptionImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Prescription</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    /* sleep */
    if(sleep)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* time asleep */}
                    <Pressable
                        onPress = {() => {imgSource = timeSleepImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text>Time Asleep</Text>
                    </Pressable>

                    {/* quality */}
                    <Pressable
                        onPress = {() => {imgSource = qualityImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text>Quality</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    /* fitness */
    if(fitness)
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    {/* history */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text>History</Text>
                    </Pressable>

                    {/* exercises */}
                    <Pressable
                        onPress = {() => {imgSource = exerciseImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text>Exercises</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                backgroundColor: press ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style = {styles.coloredBar}/>
                {/* render image */}
                <Image source = {imgSource}/>
            </View>
        );

    return null;
};

//export default TabBarandContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 220,
        height: 220,
    },
    coloredBar: {
        flex: 1,
        height: 1,
        width: 220,
        backgroundColor: '#4CB97A',
    },
    images: {
        width: 220,
        height: 220,
    },
});