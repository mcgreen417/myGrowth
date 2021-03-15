import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

const Journal = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pageSetup}>
        {/* Gardener avatar + page blurb */}
        <View style={styles.avatarView}>
          <Text style={styles.pageDescription}>
            Let's get to writing! Put your feelings on paper and let the stress
            melt away!
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

        <Image
          style={styles.fillerImage}
          source={require('../../shared/assets/Journal.png')}
        />

        {/* Write new entry + view past entries buttons */}
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          <View style={{ width: '42.5%' }}>
            <Button
              title='Write New Entry'
              color='#A5DFB2'
              onPress={() => navigation.navigate('CreateNewJournalEntry')}
            />
          </View>
          <View style={{ width: '5%' }} />
          <View style={{ width: '42.5%' }}>
            <Button
              title='View Past Entries'
              color='#A5DFB2'
              onPress={() => navigation.navigate('JournalHistory')}
            />
          </View>
        </View>

        {/* Page divider */}
        <View style={styles.dividerView}>
          <View style={styles.divider} />
        </View>

        {/* Word search bar */}
        <View style={{ width: '90%' }}>
          <Text style={styles.text}>
            Or search through past journal entries by entering a specific world
            or phrase...
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              height: 40,
              margin: 12,
              borderWidth: 1,
              borderColor: '#A6A1A0',
            }}>
            <TextInput
              style={{
                height: 20,
                margin: 10,
                justifyContent: 'flex-start',
                flex: 1,
              }}
            />
            <Icon
              style={{ height: 20, margin: 10 }}
              name='search-outline'
              type='ionicon'
              color='#A6A1A0'
            />
          </View>
        </View>
      </View>
      <NavBar journal={true} navigation={navigation} />
    </SafeAreaView>
  );
};

export default Journal;

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
  buttons: {
    marginTop: 7,
    marginBottom: 7,
    width: '110%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  fillerImage: {
    width: 340,
    height: 240,
    marginTop: -20,
  },
  text: {
    color: '#816868',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginRight: 50,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
    marginRight: 20,
  },
  dividerLeft: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginLeft: 20,
  },
  dividerRight: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginRight: 20,
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  dividerViewLow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  line2: {
    backgroundColor: '#816868',
    marginLeft: 40,
    marginRight: 40,
    height: '100%',
    width: 2,
  },
  pageDescription: {
    color: '#816868',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 20,
  },
  pageEnd: {
    marginBottom: 100,
  },
  pageSetup: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  plant: {
    width: '60%',
    height: '90%',
  },
  plantButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  plantSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '90%',
  },
  plantImage: {
    width: '100%',
    height: 260,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 6,
    borderColor: '#816868',
  },
  plantItem: {
    margin: 10,
  },
  plantItemSelect: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  plantItemPress: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderWidth: 3,
    borderColor: '#816868',
  },
  plantLinks: {
    color: '#4CB97A',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  plantSelectView: {
    justifyContent: 'center',
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 5,
  },
  text: {
    fontSize: 16,
    color: '#816868',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#A6A1A0',
    margin: 30,
    borderRadius: 2,
  },
});
