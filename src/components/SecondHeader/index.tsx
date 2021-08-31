import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import styles from './styles';

/*-------- helper ----------*/
import { appString } from '../../utils/contants';

/*---------- Assets ------------*/
import MenuIcon from '../../assets/icons/left-arrow-white.png';

const SecondHeader = ({
  onBack,
}: {
  onBack: () => void;
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageView}
        activeOpacity={0.8}
        onPress={() => onBack()}
      >
        <Image
          source={MenuIcon}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.horizontalView}>
        <Text style={styles.text}>
          {appString.second_header_title}
        </Text>
      </View>
      <View />
    </View>
  );
};

export default SecondHeader;

