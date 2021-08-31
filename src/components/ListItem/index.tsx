import React from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import styles from './styles';

const ListItem = ({
  item,
  index
}: {
  item: any;
  index?: number;
}): JSX.Element => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
        <Text style={styles.titleText}>
          {item.title}
        </Text>
      </ImageBackground>
      <Text style={styles.descText}>
        {item.description}
      </Text>
      <Text style={styles.descText}>
        {item.paragraph}
      </Text>

    </View>
  );
};

export default ListItem;

