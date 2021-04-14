import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  Dimensions,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as queries from '../../../src/graphql/queries';
import * as mutations from '../../../src/graphql/mutations';
import DateTimePicker from '@react-native-community/datetimepicker';

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

const AddNap = ({ naps, setNaps, setShowAddNap }) => {
  const [qualityOfNap, setQualityOfNap] = useState(-1);
  const [napTimeStart, setNapTimeStart] = useState(new Date());
  const [napTimeEnd, setNapTimeEnd] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onEndChange = (event, selectedDate) => {
    setShowEndPicker(false);
    const currentDate = selectedDate || napTimeEnd;
    setNapTimeEnd(new Date(currentDate));
  };

  const onStartChange = (event, selectedDate) => {
    setShowStartPicker(false);
    const currentDate = selectedDate || napTimeStart;
    setNapTimeStart(new Date(currentDate));
  };

  return (
    <Pressable>
      <View style={styles().modalView}>
        <View>
          <Text>When did you nap today?</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name='schedule' />
              <TouchableOpacity
                onPress={() => {
                  setShowStartPicker(true);
                }}
                style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text
                  style={{ textDecorationLine: 'underline', color: '#4CB97A' }}>
                  {getTime(napTimeStart)}
                </Text>
                <Icon name='arrow-drop-down' type='material' />
              </TouchableOpacity>
            </View>
            {showStartPicker && (
              <DateTimePicker
                value={napTimeStart}
                mode={'time'}
                is24Hour={false}
                display='clock'
                onChange={onStartChange}
              />
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name='schedule' />
              <TouchableOpacity
                onPress={() => setShowEndPicker(true)}
                style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text
                  style={{ textDecorationLine: 'underline', color: '#4CB97A' }}>
                  {getTime(napTimeEnd)}
                </Text>
                <Icon name='arrow-drop-down' type='material' />
              </TouchableOpacity>
            </View>
            {showEndPicker && (
              <DateTimePicker
                value={napTimeEnd}
                mode={'time'}
                is24Hour={false}
                display='clock'
                onChange={onEndChange}
              />
            )}
          </View>
        </View>
        <View>
          <Text>How would you rate your quality of sleep during your nap?</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                height: 5,
                backgroundColor: '#816868',
                position: 'absolute',
                position: 'absolute',
                zIndex: 0,
                left: 0,
                right: 0,
                bottom: 0,
                top: 20 / 2,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(0)}>
              <View
                style={{
                  width: qualityOfNap == 0 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 0 ? 25 : 10,
                  backgroundColor: qualityOfNap == 0 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 0 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  flexGrow: 1,
                  width: 45,
                  textAlign: 'center',
                  marginLeft: -20,
                  flexWrap: 'wrap',
                }}>
                Slept very poorly
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(1)}>
              <View
                style={{
                  width: qualityOfNap == 1 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 1 ? 25 : 10,
                  backgroundColor: qualityOfNap == 1 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 1 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  flexGrow: 1,
                  width: 45,
                  textAlign: 'center',
                  marginLeft: -20,
                  flexWrap: 'wrap',
                }}>
                Slept poorly
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(2)}>
              <View
                style={{
                  width: qualityOfNap == 2 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 2 ? 25 : 10,
                  backgroundColor: qualityOfNap == 2 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 2 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  flexGrow: 1,
                  width: 45,
                  textAlign: 'center',
                  marginLeft: -20,
                  flexWrap: 'wrap',
                }}>
                Slept alright
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(3)}>
              <View
                style={{
                  width: qualityOfNap == 3 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 3 ? 25 : 10,
                  backgroundColor: qualityOfNap == 3 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 3 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  flexGrow: 1,
                  width: 45,
                  textAlign: 'center',
                  marginLeft: -20,
                  flexWrap: 'wrap',
                }}>
                Slept well
              </Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => setQualityOfNap(4)}>
              <View
                style={{
                  width: qualityOfNap == 4 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 4 ? 25 : 10,
                  backgroundColor: qualityOfNap == 4 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 4 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text
                style={{
                  flex: 1,
                  flexGrow: 1,
                  width: 45,
                  textAlign: 'center',
                  marginLeft: -40,
                  flexWrap: 'wrap',
                }}>
                Slept very well
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Button
            title='Add Nap'
            onPress={() => {
              let tempNaps = [...naps];
              tempNaps.push({
                Start: napTimeStart.toISOString(),
                End: napTimeEnd.toISOString(),
                Quality: qualityOfNap,
              });
              setNaps(tempNaps);
              setShowAddNap(false);
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

const Sleep = ({
  hadSleep,
  setHadSleep,
  qualityOfSleep,
  setQualityOfSleep,
  naps,
  setNaps,
  sleepTimeStart,
  setSleepTimeStart,
  sleepTimeEnd,
  setSleepTimeEnd,
}) => {
  const [showAddNap, setShowAddNap] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const onEndChange = (event, selectedDate) => {
    setShowEndTime(false);
    const currentDate = selectedDate || sleepTimeEnd;
    setSleepTimeEnd(new Date(currentDate));
  };

  const onStartChange = (event, selectedDate) => {
    setShowStartTime(false);
    const currentDate = selectedDate || sleepTimeStart;
    setSleepTimeStart(new Date(currentDate));
  };

  return (
    <View style={{ width: '90%' }}>
      <Modal
        transparent={true}
        visible={showAddNap}
        onRequestClose={() => {
          setShowAddNap(!showAddNap);
        }}>
        <Pressable
          onPressOut={() => setShowAddNap(false)}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <AddNap naps={naps} setNaps={setNaps} setShowAddNap={setShowAddNap} />
        </Pressable>
      </Modal>
      <Text style={styles().heading}>SLEEP</Text>
      <View style={styles().line} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles().text}>Did you sleep today?</Text>
        <View style={styles().switchView}>
          <View style={styles().line2} />
          <Switch
            trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
            thumbColor={hadSleep ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={() => setHadSleep(!hadSleep)}
            value={hadSleep}
            style={{ marginLeft: 8 }}
          />
        </View>
      </View>
      <View style={styles().line} />

      <View style={{ marginVertical: 20 }}>
        <Text style={styles().text}>When did you sleep last night?</Text>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
          <Text style={styles().text}>From </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name='schedule'
              color={
                global.colorblindMode ? global.cb_textColor : global.textColor
              }
              style={{ marginRight: 4 }}
            />
            <TouchableOpacity
              onPress={() => setShowStartTime(true)}
              style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text style={styles().textLink}>{getTime(sleepTimeStart)}</Text>
              <Icon
                name='arrow-drop-down'
                type='material'
                color={
                  global.colorblindMode ? global.cb_textColor : global.textColor
                }
              />
            </TouchableOpacity>
          </View>
          {showStartTime && (
            <DateTimePicker
              value={sleepTimeStart}
              mode={'time'}
              is24Hour={false}
              display='clock'
              onChange={onStartChange}
            />
          )}
          <Text style={styles().text}> to </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name='schedule'
              color={
                global.colorblindMode ? global.cb_textColor : global.textColor
              }
              style={{ marginRight: 4 }}
            />
            <TouchableOpacity
              onPress={() => setShowEndTime(true)}
              style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text style={styles().textLink}>{getTime(sleepTimeEnd)}</Text>
              <Icon
                name='arrow-drop-down'
                type='material'
                color={
                  global.colorblindMode ? global.cb_textColor : global.textColor
                }
              />
            </TouchableOpacity>
          </View>
          {showEndTime && (
            <DateTimePicker
              value={sleepTimeEnd}
              mode={'time'}
              is24Hour={false}
              display='clock'
              onChange={onEndChange}
            />
          )}
        </View>
      </View>

      <Text style={styles().text}>
        How would you rate your quality of sleep last night?
      </Text>

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            alignItems: 'center',
            width: '83.5%',
          }}>
          <View
            style={{
              flex: 1,
              height: 5,
              backgroundColor: '#816868',
              position: 'absolute',
              position: 'absolute',
              zIndex: 0,
              left: 0,
              right: 0,
              bottom: 0,
              top: 20 / 2,
            }}
          />
          <Pressable onPress={() => setQualityOfSleep(0)}>
            <View
              style={{
                width: qualityOfSleep == 0 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 0 ? 25 : 10,
                backgroundColor: qualityOfSleep == 0 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 0 ? -10 : 0,
                zIndex: 1,
              }}
            />
            <Text style={styles().textSlider}>1</Text>
          </Pressable>

          <View
            style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4 }}
          />
          <Pressable onPress={() => setQualityOfSleep(1)}>
            <View
              style={{
                width: qualityOfSleep == 1 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 1 ? 25 : 10,
                backgroundColor: qualityOfSleep == 1 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 1 ? -10 : 0,
                zIndex: 1,
              }}
            />
            <Text style={styles().textSlider}>2</Text>
          </Pressable>

          <View
            style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4 }}
          />
          <Pressable onPress={() => setQualityOfSleep(2)}>
            <View
              style={{
                width: qualityOfSleep == 2 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 2 ? 25 : 10,
                backgroundColor: qualityOfSleep == 2 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 2 ? -10 : 0,
                zIndex: 1,
              }}
            />
            <Text style={styles().textSlider}>3</Text>
          </Pressable>

          <View
            style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4 }}
          />
          <Pressable onPress={() => setQualityOfSleep(3)}>
            <View
              style={{
                width: qualityOfSleep == 3 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 3 ? 25 : 10,
                backgroundColor: qualityOfSleep == 3 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 3 ? -10 : 0,
                zIndex: 1,
              }}
            />
            <Text style={styles().textSlider}>4</Text>
          </Pressable>

          <View
            style={{ width: (Dimensions.get('window').width * 0.55 - 20) / 4 }}
          />
          <Pressable onPress={() => setQualityOfSleep(4)}>
            <View
              style={{
                width: qualityOfSleep == 4 ? 25 : 5,
                height: 25,
                borderRadius: qualityOfSleep == 4 ? 25 : 10,
                backgroundColor: qualityOfSleep == 4 ? '#A5DFB2' : '#816868',
                marginLeft: qualityOfSleep == 4 ? -10 : 0,
                zIndex: 1,
              }}
            />
            <Text style={styles().textSlider}>5</Text>
          </Pressable>
        </View>
      </View>
      <View>
        {naps.map((item, index) => {
          return (
            <View key={index}>
              <Text>
                {item.Start} to {item.End} with Quality of {item.Quality}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={{ width: '40%' }}>
        <Button
          title='+ Add New Nap'
          color={
            global.colorblindMode
              ? global.cb_optionButtonsColor
              : global.optionButtonsColor
          }
          onPress={() => setShowAddNap(true)}
        />
      </View>
    </View>
  );
};

export default Sleep;

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: global.colorblindMode
        ? global.cb_pageBackgroundColor
        : global.pageBackgroundColor,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '100%',
    },
    heading: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    line: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderBottomWidth: 1,
      minHeight: 1,
    },
    line2: {
      borderColor: global.colorblindMode
        ? global.cb_lineColor
        : global.lineColor,
      borderRightWidth: 1,
      minHeight: 28,
      marginTop: 4,
      marginBottom: 4,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    modalView: {
      margin: 20,
      backgroundColor: '#E5E5E5',
      borderRadius: 10,
      padding: 35,
      paddingBottom: -10,
      paddingTop: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 7,
    },
    switchView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 16,
    },
    textLink: {
      color: '#4CB97A',
      fontSize: 16,
      textDecorationLine: 'underline',
    },
    textSlider: {
      flex: 1,
      flexGrow: 1,
      width: 45,
      textAlign: 'center',
      marginLeft: -20,
      flexWrap: 'wrap',
      marginTop: 4,
      color: global.colorblindMode ? global.cb_textColor : global.textColor,
      fontSize: 20,
    },
  });
