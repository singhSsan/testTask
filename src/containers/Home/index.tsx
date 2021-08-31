import React from 'react'
import { View, Text, Image } from 'react-native';

/*---------- config ------------*/
import globalStyle from '../../config/globalStyle'
import styles from './styles';

/*-------- Interfaces ----------*/
import { HomeProps } from '../../Interfaces/containers';

/*---------- components ------------*/
import Button from '../../components/Button';

/*---------- helper ------------*/
import { appString, ScreenName } from '../../utils/contants';
import { ScrollView } from 'react-native-gesture-handler';

/*---------- Assets ------------*/
import DummyImage from '../../assets/icons/Property.jpeg';

const Home = ({
  navigation,
}: HomeProps) => {

  const goToPageOne = () => {
    navigation.navigate(ScreenName.PAGE_ONE)
  }

  const goToPageTwo = () => {
    navigation.navigate(ScreenName.PAGE_TWO)
  }

  return (
    <View style={globalStyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={styles.mainTitle}>{appString.home}</Text>
        <View style={styles.imageView}>
          <Image
            source={DummyImage}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            text={appString.page_one}
            onClick={goToPageOne}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            text={appString.page_two}
            onClick={goToPageTwo}
          />
        </View>
      </ScrollView>
    </View>
  )
}

/*-------- export container  ----------*/
export default Home;
