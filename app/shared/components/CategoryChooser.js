import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';

export default class CategoryChooser extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>
                        &times;
                    </span>
                    <View>
                        <View style={{backgroundColor: '#A5DFB2', width: 300, height: 30}}>
                            {/* add category chooser modal here */}
                            <TouchableOpacity>
                                { /* image asset */ }
                                <View>
                                    <Image source={require('../../shared/assets/Path.png')}/>
                                </View>
                                <View>
                                    <Text>|</Text>
                                </View>
                                <View>
                                    <Text>Select a Category</Text>
                                </View>
                                { /* X asset */ }
                                <View>
                                    <Image source={require('../../shared/assets/close.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor: '#F6EFED', width: 300, height: 350}}>
                            { /* health entries */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* mood */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* stress */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* daily activities */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* period tracking */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* weight */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* gen health */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* medicine */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* sleep */ }
                            <View>  
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* meal tracking */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                            { /* fitness */ }
                            <View>
                                <TouchableOpacity>
                                    <Image style={styles.chooserImg} source={require('../../shared/assets/icon.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </div>
            </div>
        );
        }
}

const styles = StyleSheet.create({
    chooserImg: {
        borderWidth: 1,
        borderColor: '#4CB97A',
        width: 40,
        height: 40,
    },
});