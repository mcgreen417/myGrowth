import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Party from '../../shared/assets/svgs/party-emoji.svg';

const EntryCompletion = ({ route, navigation }) => {
  const { timestamp } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View
          style={{
            alignContent: 'center',
            marginHorizontal: '10%',
            marginTop: '-5%',
          }}>
          <Text
            style={{
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
            source={require('../../shared/assets/bee-sprites/worker-bee.png')}
          />
          <View style={{ marginVertical: '10%' }}>
            <Text
              style={{
                fontSize: 20,
                color: '#816868',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              You've watered your plant today!
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#816868',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Your plant has gained +5 EXP!
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
                navigation.navigate('HealthEntry', {
                  reviewTimestamp: timestamp,
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

export default EntryCompletion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFED',
  },
  heading: {
    color: '#4CB97A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fillerImage: {
    flex: 1,
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-end',
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
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginRight: 20,
  },
});
