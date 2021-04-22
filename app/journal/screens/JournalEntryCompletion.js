import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Party from '../../shared/assets/svgs/party-emoji.svg'

const JournalEntryCompletion = ({ route, navigation }) => {
  const date = route.params.date;
  const updateDate = route.params.updateDate;
  const entry = route.params.entry;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', }}
      >
        <View style={{alignContent: 'center', marginHorizontal: '10%', marginTop: '-5%' }}>
          <Text style={{ 
            fontSize: 44, 
            color: '#816868', 
            fontWeight: 'bold', 
            textAlign: 'center',
            marginBottom: '10%',
          }}>
            Congrats! <Party height={44} width={44} />
          </Text>
          <Image 
            style={{ 
              width: Math.round(Dimensions.get('window').width * 0.5),
              height: Math.round(Dimensions.get('window').width * 0.6), 
              alignSelf: 'center',
            }}
            source={require('../../shared/assets/bee-sprites/excited-bee.png')}
          />
          <View style={{ marginVertical: '10%' }}>
            <Text style={{ fontSize: 20, color: '#816868', fontWeight: 'bold', textAlign: 'center', }}>
              You've completed a journal entry! Keep up the good habit!
            </Text>
          </View>
        </View>

        {/* View Entry + Return to Home buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{ minWidth: '37.5%' }}>
            <Button
              title='View Entry'
              color='#A5DFB2'
              onPress={() =>
                navigation.navigate('ViewJournalEntry', {
                  date,
                  entry, 
                  updateDate
                })
              }
            />
          </View>
          <View style={{ width: '5%' }} />
          <View style={{ minWidth: '37.5%' }}>
            <Button
              title='Return to Home'
              color='#A5DFB2'
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JournalEntryCompletion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  fillerImage: {
    flex: 1,
    width: '90%',
    height: '50%',
    resizeMode: 'contain',
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  text: {
    color: '#816868',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
