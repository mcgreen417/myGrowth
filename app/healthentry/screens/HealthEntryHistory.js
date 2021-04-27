import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import * as queries from '../../../src/graphql/queries';
import { Calendar } from 'react-native-calendars';
import NavBar from '../../shared/components/NavBar';

const HealthEntryHistory = ({ navigation }) => {
  const [VeryFirstEntryString, setVeryFirstEntryString] = useState(Date());
  const [markers, setMarkers] = useState({});
  const [tempMarker, setTempMarker] = useState({});

  useEffect(() => {
    async function setFirstEntryString() {
      var setString = '';
      const user = await Auth.currentAuthenticatedUser();
      var temp = null;

      //put query here
      const res = await API.graphql({
        query: queries.getDailyEntries,
        variables: { UserID: user.username },
      });
      // console.log(res);
      console.log('len = ', res.data.getDailyEntries.dailyEntries.length);

      //if res dailyentries is empty
      if (res.data.getDailyEntries.dailyEntries.length == 0);
      else {
        let tempMarkers = {};
        for (let i = 0; i < res.data.getDailyEntries.dailyEntries.length; i++) {
          console.log(res.data.getDailyEntries.dailyEntries[i].Timestamp);
          var date = new Date(
            res.data.getDailyEntries.dailyEntries[i].Timestamp
          );
          const month = date.getMonth() + 1;
          const day = date.getDate();
          const year = date.getFullYear();
          let tempTimestamp = ''
            .concat(year)
            .concat('-')
            .concat(month < 10 ? '0'.concat(month) : month)
            .concat('-')
            .concat(day < 10 ? '0'.concat(day) : day);

          tempMarkers[tempTimestamp] = { marked: true };
        }
        console.log(tempMarkers);
        console.log(tempMarker);
        setMarkers(tempMarkers);
        const lastInd = res.data.getDailyEntries.dailyEntries.length - 1;
        var date = new Date(
          res.data.getDailyEntries.dailyEntries[lastInd].Timestamp
        );
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        setString = ''
          .concat(year)
          .concat('-')
          .concat(month)
          .concat('-')
          .concat(day < 10 ? '0'.concat(day) : day);
      }

      setVeryFirstEntryString(setString);
    }

    setFirstEntryString();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
        <View style={styles.pageSetup}>
          {/* Gardener avatar + page blurb */}
          <View style={styles.avatarView}>
            <Text style={styles.pageDescription}>
              How have you been feeling lately? Click below to view past health
              entries!
            </Text>
            <Image
              style={styles.avatar}
              source={require('../../shared/assets/gardener-avatar.png')}
            />
          </View>
          {/* Top page divider */}
          <View style={styles.dividerView}>
            <View style={styles.divider} />
          </View>

          <View style={{ width: '90%', marginTop: -10 }}>
            <Calendar
              //minDate={VeryFirstEntryString} <- Qeury fetches this after the calendar loads, so
              minDate={Object.keys(markers)[Object.keys(markers).length - 1]}
              // the calendar doesn't get the right date initially; pass this value in through home
              // (and wherever else the page can be accessed from)-- will have to pass this value out
              // to health entry view pages as well so it can be passed back in to this page on back
              //maxDate={Date()} <- This date is off bc UTC, please fix!
              maxDate={Object.keys(markers)[0]}
              enableSwipeMonths={true}
              markedDates={
                markers
                // tempMarker
                // { '2021-04-07': { selected: true, marked: true } }
                //selectedDays: {marked: true}, <- Should be days that have an associated entry
                //'2021-04-07': {selected: true, marked: true, } <- Current day, marked if it has an
                // entry associated with it
              }
              onDayPress={(day) => {
                console.log(day);
                let newDay = new Date(day.dateString);
                console.log(newDay);
                newDay.setHours(newDay.getTimezoneOffset() / 10);
                console.log(newDay);
                if (day != undefined) {
                  navigation.navigate('HealthEntry', {
                    reviewTimestamp: newDay.toISOString(),
                  });
                }
              }}
              theme={{
                calendarBackground: '#F6EFED',
                textSectionTitleColor: '#816868',
                arrowColor: '#816868',
                selectedDayBackgroundColor: '#A5DFB2',
                dotColor: '#4CB97A',
                todayTextColor: '#4CB97A',
                dayTextColor: '#816868',
                monthTextColor: '#816868',
                textDisabledColor: '#DED3D3',
                textMonthFontWeight: 'bold',
                textMonthFontSize: 20,
                textDayHeaderFontSize: 16,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HealthEntryHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  avatar: {
    width: 75,
    height: 75,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginHorizontal: '5%',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  pageDescription: {
    color: global.colorblindMode ? global.cb_textColor : global.textColor,
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 20,
  },
  pageSetup: {
    alignItems: 'center',
    height: '100%',
  },
});
