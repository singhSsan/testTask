import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import styles from './styles';

/*---------- Assets ------------*/
import LeftIcon from '../../assets/icons/left-arrow.png';
import RightIcon from '../../assets/icons/right-arrow.png';

const BottomView = ({
  index,
  totalNum,
  onPrevious,
  onNext
}: {
  index?: number,
  totalNum?: number,
  onPrevious?: () => void,
  onNext?: () => void,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageView}
        activeOpacity={0.8}
        onPress={() => onPrevious()}
      >
        <Image
          source={LeftIcon}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.horizontalView}>
        <Text style={styles.text}>
          {index + " /"}
        </Text>
        <Text style={styles.text}>
          {totalNum + " "}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.imageView}
        activeOpacity={0.8}
        onPress={() => onNext()}
      >
        <Image
          source={RightIcon}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomView;

