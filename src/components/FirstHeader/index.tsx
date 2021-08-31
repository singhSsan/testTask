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
import MenuIcon from '../../assets/icons/left-arrow.png';

const FirstHeader = ({
  onBack,
  chapterNum,
  chapterName
}: {
  onBack: () => void;
  chapterNum?: string,
  chapterName?: string,
  navigation?: any
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
        <Text style={styles.text_one}>
          {appString.chapter + " "}
        </Text>
        <Text style={styles.text_two}>
          {" " + chapterNum} |
        </Text>
        <Text style={styles.text_three}>
          {" " + chapterName}
        </Text>
      </View>
      <View />
    </View>
  );
};

export default FirstHeader;

