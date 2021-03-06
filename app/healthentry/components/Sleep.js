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
import { Platform } from 'react-native';

function getTime(d) {
  return (
    (d.getHours() % 12) +
    1 +
    ':' +
    (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()) +
    (d.getHours() > 12 ? 'pm' : 'am')
  );
}

function removeNap(naps, setNaps, index) {
  let tempNaps = [...naps];
  tempNaps.splice(index, 1);
  setNaps(tempNaps);
}

function changeQuality(naps, setNaps, index, val) {
  if (val != null || val != undefined) {
    let tempNaps = [...naps];
    tempNaps[index].Quality = val;
    setNaps(tempNaps);
  }
}

function changeStartDate(naps, setNaps, index, val) {
  if (val != null || val != undefined) {
    let tempNaps = [...naps];
    tempNaps[index].Start = val.toISOString();
    setNaps(tempNaps);
  }
}

function changeEndDate(naps, setNaps, index, val) {
  if (val != null || val != undefined) {
    let tempNaps = [...naps];
    tempNaps[index].End = val.toISOString();
    setNaps(tempNaps);
  }
}

const AddNap = ({
  naps,
  setNaps,
  index,
  napTimeStart,
  napTimeEnd,
  qualityOfNap,
}) => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  return (
    <View>
      <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
        <Text style={styles().text}>When did you nap today?</Text>
        <View style={{ alignSelf: 'flex-end', flex: 1 }}></View>
        <Icon
          name='close'
          type='ionicon'
          color='#816868'
          onPress={() => removeNap(naps, setNaps, index)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 6,
        }}>
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
            onPress={() => setShowStartPicker(true)}
            style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Text style={styles().textLink}>
              {getTime(new Date(napTimeStart))}
            </Text>
            <Icon
              name='arrow-drop-down'
              type='material'
              color={
                global.colorblindMode ? global.cb_textColor : global.textColor
              }
            />
          </TouchableOpacity>
        </View>
        {showStartPicker && (
          <DateTimePicker
            value={new Date(napTimeStart)}
            mode={'time'}
            is24Hour={false}
            display='clock'
            onChange={(event, val) => {
              const currentDate = val || new Date(napTimeStart);
              setShowStartPicker(Platform.OS === 'ios');
              changeStartDate(naps, setNaps, index, currentDate);
            }}
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
            onPress={() => setShowEndPicker(true)}
            style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Text style={styles().textLink}>
              {getTime(new Date(napTimeEnd))}
            </Text>
            <Icon
              name='arrow-drop-down'
              type='material'
              color={
                global.colorblindMode ? global.cb_textColor : global.textColor
              }
            />
          </TouchableOpacity>
        </View>
        {showEndPicker && (
          <DateTimePicker
            value={new Date(napTimeEnd)}
            mode={'time'}
            is24Hour={false}
            display='clock'
            onChange={(event, val) => {
              const currentDate = val || new Date(napTimeEnd);
              setShowEndPicker(Platform.OS === 'ios');
              changeEndDate(naps, setNaps, index, currentDate);
            }}
          />
        )}
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles().text}>
          How would you rate your quality of sleep during your nap?
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
              width: Dimensions.get('window').width * 0.78,
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
            <Pressable onPress={() => changeQuality(naps, setNaps, index, 1)}>
              <View
                style={{
                  width: qualityOfNap == 1 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 1 ? 25 : 10,
                  backgroundColor: qualityOfNap == 1 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 1 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text style={styles().textSlider}>1</Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => changeQuality(naps, setNaps, index, 2)}>
              <View
                style={{
                  width: qualityOfNap == 2 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 2 ? 25 : 10,
                  backgroundColor: qualityOfNap == 2 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 2 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text style={styles().textSlider}>2</Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => changeQuality(naps, setNaps, index, 3)}>
              <View
                style={{
                  width: qualityOfNap == 3 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 3 ? 25 : 10,
                  backgroundColor: qualityOfNap == 3 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 3 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text style={styles().textSlider}>3</Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => changeQuality(naps, setNaps, index, 4)}>
              <View
                style={{
                  width: qualityOfNap == 4 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 4 ? 25 : 10,
                  backgroundColor: qualityOfNap == 4 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 4 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text style={styles().textSlider}>4</Text>
            </Pressable>

            <View
              style={{
                width: (Dimensions.get('window').width * 0.55 - 20) / 4,
              }}></View>
            <Pressable onPress={() => changeQuality(naps, setNaps, index, 5)}>
              <View
                style={{
                  width: qualityOfNap == 5 ? 25 : 5,
                  height: 25,
                  borderRadius: qualityOfNap == 5 ? 25 : 10,
                  backgroundColor: qualityOfNap == 5 ? '#A5DFB2' : '#816868',
                  marginLeft: qualityOfNap == 5 ? -10 : 0,
                  zIndex: 1,
                }}></View>
              <Text style={styles().textSlider}>5</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const AddNaps = ({ naps, setNaps }) => {
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <View>
          {naps.map((item, index) => {
            return (
              <View key={index}>
                <AddNap
                  naps={naps}
                  setNaps={setNaps}
                  index={index}
                  napTimeStart={item.Start}
                  napTimeEnd={item.End}
                  qualityOfNap={item.Quality}
                />
              </View>
            );
          })}
        </View>
        <View style={{ minWidth: '40%', maxWidth: '50%', }}>
          <Button
            title='+ Add Nap'
            color='#A5DFB2'
            onPress={() => {
              let tempNaps = [...naps];
              tempNaps.push({
                Start: new Date().toISOString(),
                End: new Date().toISOString(),
                Quality: 0,
              });
              setNaps(tempNaps);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const Sleep = ({
  hadSleep,
  setHadSleep,
  qualityOfSleep,
  setQualityOfSleep,
  hadNap,
  setHadNap,
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
        <Text style={styles().text}>Did you sleep last night?</Text>
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

      {!hadSleep && <View style={{ marginTop: -1 }} />}

      {hadSleep && (
        <View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles().text}>When did you sleep last night?</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
              }}>
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
                    global.colorblindMode
                      ? global.cb_textColor
                      : global.textColor
                  }
                  style={{ marginRight: 4 }}
                />
                <TouchableOpacity
                  onPress={() => setShowStartTime(true)}
                  style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={styles().textLink}>
                    {getTime(new Date(sleepTimeStart))}
                  </Text>
                  <Icon
                    name='arrow-drop-down'
                    type='material'
                    color={
                      global.colorblindMode
                        ? global.cb_textColor
                        : global.textColor
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
                    global.colorblindMode
                      ? global.cb_textColor
                      : global.textColor
                  }
                  style={{ marginRight: 4 }}
                />
                <TouchableOpacity
                  onPress={() => setShowEndTime(true)}
                  style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Text style={styles().textLink}>
                    {getTime(new Date(sleepTimeEnd))}
                  </Text>
                  <Icon
                    name='arrow-drop-down'
                    type='material'
                    color={
                      global.colorblindMode
                        ? global.cb_textColor
                        : global.textColor
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
                width: Dimensions.get('window').width * 0.78,
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
              <Pressable onPress={() => setQualityOfSleep(1)}>
                <View
                  style={{
                    width: qualityOfSleep == 1 ? 25 : 5,
                    height: 25,
                    borderRadius: qualityOfSleep == 1 ? 25 : 10,
                    backgroundColor:
                      qualityOfSleep == 1 ? '#A5DFB2' : '#816868',
                    marginLeft: qualityOfSleep == 1 ? -10 : 0,
                    zIndex: 1,
                  }}
                />
                <Text style={styles().textSlider}>1</Text>
              </Pressable>

              <View
                style={{
                  width: (Dimensions.get('window').width * 0.55 - 20) / 4,
                }}
              />
              <Pressable onPress={() => setQualityOfSleep(2)}>
                <View
                  style={{
                    width: qualityOfSleep == 2 ? 25 : 5,
                    height: 25,
                    borderRadius: qualityOfSleep == 2 ? 25 : 10,
                    backgroundColor:
                      qualityOfSleep == 2 ? '#A5DFB2' : '#816868',
                    marginLeft: qualityOfSleep == 2 ? -10 : 0,
                    zIndex: 1,
                  }}
                />
                <Text style={styles().textSlider}>2</Text>
              </Pressable>

              <View
                style={{
                  width: (Dimensions.get('window').width * 0.55 - 20) / 4,
                }}
              />
              <Pressable onPress={() => setQualityOfSleep(3)}>
                <View
                  style={{
                    width: qualityOfSleep == 3 ? 25 : 5,
                    height: 25,
                    borderRadius: qualityOfSleep == 3 ? 25 : 10,
                    backgroundColor:
                      qualityOfSleep == 3 ? '#A5DFB2' : '#816868',
                    marginLeft: qualityOfSleep == 3 ? -10 : 0,
                    zIndex: 1,
                  }}
                />
                <Text style={styles().textSlider}>3</Text>
              </Pressable>

              <View
                style={{
                  width: (Dimensions.get('window').width * 0.55 - 20) / 4,
                }}
              />
              <Pressable onPress={() => setQualityOfSleep(4)}>
                <View
                  style={{
                    width: qualityOfSleep == 4 ? 25 : 5,
                    height: 25,
                    borderRadius: qualityOfSleep == 4 ? 25 : 10,
                    backgroundColor:
                      qualityOfSleep == 4 ? '#A5DFB2' : '#816868',
                    marginLeft: qualityOfSleep == 4 ? -10 : 0,
                    zIndex: 1,
                  }}
                />
                <Text style={styles().textSlider}>4</Text>
              </Pressable>

              <View
                style={{
                  width: (Dimensions.get('window').width * 0.55 - 20) / 4,
                }}
              />
              <Pressable onPress={() => setQualityOfSleep(5)}>
                <View
                  style={{
                    width: qualityOfSleep == 5 ? 25 : 5,
                    height: 25,
                    borderRadius: qualityOfSleep == 5 ? 25 : 10,
                    backgroundColor:
                      qualityOfSleep == 5 ? '#A5DFB2' : '#816868',
                    marginLeft: qualityOfSleep == 5 ? -10 : 0,
                    zIndex: 1,
                  }}
                />
                <Text style={styles().textSlider}>5</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <View style={styles().line} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles().text}>Did you take a nap today?</Text>
        <View style={styles().switchView}>
          <View style={styles().line2} />
          <Switch
            trackColor={{ false: '#E5E5E5', true: '#9AD2AF' }}
            thumbColor={hadNap ? '#4CB97A' : '#f4f3f4'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={() => {
              setNaps([]);
              setHadNap(!hadNap);
            }}
            value={hadNap}
            style={{ marginLeft: 8 }}
          />
        </View>
      </View>
      <View style={styles().line} />

      {hadNap ? (
        <AddNaps naps={naps} setNaps={setNaps} />
      ) : (
        <View style={{ marginBottom: 10 }} />
      )}
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
      fontSize: 18,
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
