import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Pressable,
  } from 'react-native';
  import historyImg from '../../shared/assets/Rectangle.png';
  import correlationImg from '../../shared/assets/Rectangle.png';
  import activityImg from '../../shared/assets/Rectangle.png';
  import intensityImg from '../../shared/assets/Rectangle.png';
  import prescriptionImg from '../../shared/assets/Rectangle.png';
  import timeSleepImg from '../../shared/assets/Rectangle.png';
  import qualityImg from '../../shared/assets/Rectangle.png';
  import exerciseImg from '../../shared/assets/Rectangle.png';

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
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* History */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({ pressed }) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView}>
                    <View style={styles.coloredBar} />
                </View>
                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    /* Gen comp version: mood, stress, period, meal */
    if(historyGenComp)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* History */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({ pressed }) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* Correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView}>
                    <View style={styles.coloredBar} />
                </View>
                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    /* daily activities */
    if(dailyActivities)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* history */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* activity view */}
                    <Pressable
                        onPress = {() => {imgSource = activityImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Activity View</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView} >
                    <View style={styles.coloredBar} />
                </View>

                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    /* general health */
    if(generalHealth)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* history */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* intensity */}
                    <Pressable
                        onPress = {() => {imgSource = intensityImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Intensity</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text  style={styles.tabText}>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView}>
                    <View style={styles.coloredBar} />
                </View>
                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    /* medication */
    if(medication)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* prescription */}
                    <Pressable
                        onPress = {() => {imgSource = prescriptionImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Prescription</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView}>
                    <View style={styles.coloredBar} />
                </View>
                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    /* sleep */
    if(sleep)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* time asleep */}
                    <Pressable
                        onPress = {() => {imgSource = timeSleepImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Time Asleep</Text>
                    </Pressable>

                    {/* quality */}
                    <Pressable
                        onPress = {() => {imgSource = qualityImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Quality</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView}>
                    <View style={styles.coloredBar} />
                </View>
                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    /* fitness */
    if(fitness)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* history */}
                    <Pressable
                        onPress = {() => {imgSource = historyImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* exercises */}
                    <Pressable
                        onPress = {() => {imgSource = exerciseImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Exercises</Text>
                    </Pressable>

                    {/* correlation */}
                    <Pressable
                        onPress = {() => {imgSource = correlationImg;}}
                        style = {({pressed}) => [
                            {
                                width: 75,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Correlations</Text>
                    </Pressable>
                </View>
                {/* colored bar */}
                <View style={styles.coloredBarView}>
                    <View style={styles.coloredBar} />
                </View>
                {/* render image */}
                <Image style={styles.images} source = {imgSource}/>
            </View>
        );

    return null;
};

export default TabBarandContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 345,
        height: 230,
    },
    coloredBar: {
        flex: 1,
        height: 3,
        width: 350,
        backgroundColor: '#4CB97A',
    },
    coloredBarView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    images: {
        width: 350,
        height: 220,
    },
    tabText: {
        color: 'white',
        fontSize: 17,
        paddingTop: 3,
    }
});