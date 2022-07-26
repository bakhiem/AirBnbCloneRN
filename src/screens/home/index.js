import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import Fontiso from 'react-native-vector-icons/Fontisto';

const HomeScreen = props => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          console.warn('search btn clicked');
        }}>
        <View style={styles.buttonSearch}>
          <Fontiso name="search" size={25} color="#f15454" />
          <Text style={styles.buttonSearchText}>Where are you going?</Text>
        </View>
      </TouchableWithoutFeedback>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go near</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.warn('Btn clicked');
          }}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
