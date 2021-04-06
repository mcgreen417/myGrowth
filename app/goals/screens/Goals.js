import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import NavBar from '../../shared/components/NavBar';

const Goal = ({ title, description, type, navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{ 
      flexDirection: 'row',
      width: '90%',
      alignItems: 'flex-start',
      alignSelf: 'center', 
      marginVertical: 4,
    }}>
      {/* This icon should change to check-box when the user clicks on it (and retain that until daily reset) */}
      <Pressable onPress={() => navigation.navigate('GoalComplete')}>
        <Icon
          name='check-box-outline-blank'
          type='MaterialIcons'
          color='#816868'
          style={{ marginRight: 8 }}
        />
      </Pressable>
      <Text style={styles().text}>{title}</Text>
      <View style={styles().iconView}>
        <View style={{ flexDirection: 'row' }}>
          <Pressable>
            <Icon 
              name='pencil' 
              type='material-community' 
              color='#816868' 
            />
          </Pressable>
          <Pressable>
            <Icon 
              name='close' 
              type='ionicon' 
              color='#816868' 
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

function Goals({ navigation }) {
  var time = new Date();
  const [showDailyGoals, setShowDailyGoals] = useState(true);
  const [showWeeklyGoals, setShowWeeklyGoals] = useState(true);
  const [showLongTermGoals, setShowLongTermGoals] = useState(true);

  return (
    <SafeAreaView style={styles().container}>
      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
        {/* Gardener avatar + page blurb */}
        <View style={styles().avatarView}>
          <Text style={styles().pageDescription}>
            Set healthy goals and do your best to accomplish them! Let's do our
            best today too!
          </Text>
          <Image
            style={styles().avatar}
            source={require('../../shared/assets/gardener-avatar.png')}
          />
        </View>
        <View style={styles().divider} />

        {/* Daily Goals section */}
        <View style={{ marginHorizontal: '5%', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles().heading}>Daily Goals</Text>
              <Icon
                name='information-circle-outline'
                type='ionicon'
                color='#816868'
                style={{ marginLeft: 8, }}
              />
              <View style={styles().iconView}>
                <View style={{ flexDirection: 'row' }}>
                  <Icon 
                    name={showDailyGoals ? 'arrow-drop-up' : 'arrow-drop-down'}
                    onPress={() => setShowDailyGoals(!showDailyGoals)}
                    color='#816868' 
                    style={{ marginRight: 8, }}
                  />
                  <Icon name='plus' type='feather' color='#816868'/>
                </View>
              </View>
            </View>
            <Text style={styles().textBold}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={styles().line} />
        {showDailyGoals &&
          <View style={{ marginVertical: 16 }}>
            <Goal
              title='Write a health entry'
              description='description 1'
              type='daily'
              navigation={navigation}
            />
            <Goal
              title='Write a journal entry'
              description='description 2'
              type='daily'
              navigation={navigation}
            />
            <Goal
              title='Consume 1200 calories total'
              description='description 3'
              type='daily'
              navigation={navigation}
            />
            <Goal
              title='Take medicine'
              description='description 4'
              type='daily'
              navigation={navigation}
            />
          </View>
        }

        {/* Weekly Goals section */}
        <View style={{ marginHorizontal: '5%', marginTop: 20, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
            <Text style={styles().heading}>Weekly Goals</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8, }}
            />
            <View style={styles().iconView}>
              <View style={{ flexDirection: 'row' }}>
                <Icon 
                  name={showWeeklyGoals ? 'arrow-drop-up' : 'arrow-drop-down'}
                  onPress={() => setShowWeeklyGoals(!showWeeklyGoals)}
                  color='#816868' 
                  style={{ marginRight: 8, }}
                />
                <Icon name='plus' type='feather' color='#816868'/>
              </View>
            </View>
          </View>
          <Text style={styles().textBold}>({time.toLocaleString()} until reset)</Text>
        </View>
        <View style={styles().line} />
        {showWeeklyGoals &&
          <View style={{ marginVertical: 16 }}>
            <Goal
              title='Exercise for 30m'
              description='description 1'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Read for 1h'
              description='description 2'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Go to class'
              description='description 3'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Go to work'
              description='description 4'
              type='weekly'
              navigation={navigation}
            />
            <Goal
              title='Study for 3h'
              description='description 5'
              type='weekly'
              navigation={navigation}
            />
          </View>
        }

        {/* Long-Term Goals section */}
        <View style={{ marginHorizontal: '5%', marginTop: 20, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles().heading}>Long-Term Goals</Text>
            <Icon
              name='information-circle-outline'
              type='ionicon'
              color='#816868'
              style={{ marginLeft: 8, }}
            />
            <View style={styles().iconView}>
              <View style={{ flexDirection: 'row' }}>
                <Icon 
                  name={showLongTermGoals ? 'arrow-drop-up' : 'arrow-drop-down'}
                  onPress={() => setShowLongTermGoals(!showLongTermGoals)}
                  color='#816868' 
                  style={{ marginRight: 8, }}
                />
                <Icon name='plus' type='feather' color='#816868'/>
              </View>
            </View>
          </View>
          <Text style={styles().textBold}>Shoot for the stars!</Text>
        </View>
        <View style={styles().line} />
        {showLongTermGoals &&
          <View style={{ marginTop: 16 }}>
            <Goal
              title='Graduate university'
              description='description 1'
              type='longterm'
              navigation={navigation}
            />
            <Goal
              title='Get a job'
              description='description 2'
              type='longterm'
              navigation={navigation}
            />
            <Goal
              title='Buy a house'
              description='description 3'
              type='longterm'
              navigation={navigation}
            />
            <Goal
              title='Get married'
              description='description 4'
              type='longterm'
              navigation={navigation}
            />
          </View>
        }

        <View style={styles().pageEnd} />
      </ScrollView>
      <NavBar goals={true} navigation={navigation} />
    </SafeAreaView>
  );
}

export { Goals };

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colorblindMode
      ? global.cb_pageBackgroundColor
      : global.pageBackgroundColor,
  },
  avatar: {
    width: 75,
    height: 75,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#816868',
    marginVertical: 20,
    marginHorizontal: '5%',
  },
  goalButtonText: {
    marginVertical: 8,
    marginLeft: 16,
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  goalButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CB97A',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  heading: {
    color: '#4CB97A',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  inlineRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  inlineRow2: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  text: {
    color: '#816868',
    fontSize: 16,
  },
  line: {
    marginHorizontal: '5%',
    borderColor: global.colorblindMode
      ? global.cb_lineColor
      : global.lineColor,
    borderBottomWidth: 1,
    minHeight: 1,
    marginTop: 10,
  },
  textBold: {
    color: '#816868',
    fontSize: 16,
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
  pageEnd: {
    marginBottom: 110,
  },
  bodyText: {
    color: global.colorblindMode
      ? global.cb_textColor
      : global.textColor,
  }
});
