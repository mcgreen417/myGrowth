import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
  } from 'react-native';
  import historyImg from '../../shared/assets/Rectangle.png';
  import correlationImg from '../../shared/assets/close.png';
  import activityImg from '../../shared/assets/gardener-avatar.png';
  import intensityImg from '../../shared/assets/SettingsGirlReading.png';
  import prescriptionImg from '../../shared/assets/splash.png';
  import timeSleepImg from '../../shared/assets/Rectangle.png';
  import qualityImg from '../../shared/assets/splash.png';
  import exerciseImg from '../../shared/assets/splash.png';

  const TabBarandContent = ({
      history = false,
      historyGenComp = false,
      dailyActivities = false,
      generalHealth = false,
      medication = false,
      sleep = false,
      fitness = false,
      navigation,
  }) => {

    var imgSource = historyImg;

    /* History Comp version */
    if(history)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* History */}
                    <Pressable
                        onPress = {() => {
                            imgSource = historyImg;
                            navigation.navigate('HistoryPage');
                        }}
                        style = {({ pressed }) => [
                            {
                                width: 55,
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

    /* Gen comp version: mood, stress, period, meal, weight */
    if(historyGenComp)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* History */}
                    <Pressable
                        onPress = {() => {
                            imgSource = historyImg;
                        }}
                        style = {({ pressed }) => [
                            {
                                width: 55,
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
                                width: 90,
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

    /* daily activities <- nav */
    if(dailyActivities)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* history - 1 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = historyImg;
                            navigation.navigate('HistoryDailyActivities1');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* activity view - 2 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = activityImg;
                            navigation.navigate('HistoryDailyActivities2');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 90,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Activity View</Text>
                    </Pressable>

                    {/* correlation - 1 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = correlationImg;
                            navigation.navigate('HistoryDailyActivities1');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 90,
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

    /* general health <- nav */
    if(generalHealth)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* history - 1 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = historyImg;
                            navigation.navigate('HistoryGeneralHealth1');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* intensity - 2 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = intensityImg;
                            navigation.navigate('HistoryGeneralHealth2');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 65,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                    ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Intensity</Text>
                    </Pressable>

                    {/* correlation - 1 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = correlationImg;
                            navigation.navigate('HistoryGeneralHealth1');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 90,
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
                                width: 90,
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
                                width: 90,
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

    /* sleep <- nav */
    if(sleep)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* time asleep - 1 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = timeSleepImg;
                            navigation.navigate('HistorySleep1');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 90,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Time Asleep</Text>
                    </Pressable>

                    {/* quality - 2 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = qualityImg;
                            navigation.navigate('HistorySleep2');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Quality</Text>
                    </Pressable>

                    {/* correlation - 1 */}
                    <Pressable
                        onPress = {() => {
                            imgSource = correlationImg;
                            navigation.navigate('HistorySleep1');
                        }}
                        style = {({pressed}) => [
                            {
                                width: 90,
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

    /* fitness <- nav */
    if(fitness)
        return(
            <View style={{paddingLeft: 22, paddingRight: 22, paddingBottom: 10}}>
                <View style={{height: 30, width: 220, flexDirection: 'row'}}>
                    {/* history - 1 */}
                    <Pressable
                        onPress = {() => {
                            navigation.navigate('HistoryFitness1');
                            imgSource = historyImg;
                        }}
                        style = {({pressed}) => [
                            {
                                width: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>History</Text>
                    </Pressable>

                    {/* exercises - 2 */}
                    <Pressable
                        onPress = {() => {
                            navigation.navigate('HistoryFitness2');
                            imgSource = exerciseImg;
                        }}
                        style = {({pressed}) => [
                            {
                                width: 72,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingRight: 2,
                                backgroundColor: pressed ? '#A5DFB2' : '#4CB97A',
                            },
                        ]}>
                        {/* text */}
                        <Text style={styles.tabText}>Exercises</Text>
                    </Pressable>

                    {/* correlation - 1 */}
                    <Pressable
                        onPress = {() => {
                            navigation.navigate('HistoryFitness1');
                            imgSource = correlationImg;
                        }}
                        style = {({pressed}) => [
                            {
                                width: 90,
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
        fontSize: 14,
        paddingTop: 3,
    }
});