import React from 'react'
import { View, Text, Image } from 'react-native';

/*---------- style ------------*/
import styles from './styles';

/*---------- components ------------*/
import SecondHeader from '../../components/SecondHeader';

/*-------- Interfaces ----------*/
import { PageTwoProps } from '../../Interfaces/containers';

/*---------- helper ------------*/
import { appString } from '../../utils/contants';
import { colors } from '../../utils/index';
import { data } from '../../utils/tempData/pageTwoData';

/*---------- Assets ------------*/
import ActiveIcon from '../../assets/icons/check.png';
import InactiveIcon from '../../assets/icons/lock.png';

const Login = ({
  navigation,
}: PageTwoProps) => {

  return (
    <View style={styles.containerView}>
      <SecondHeader
        onBack={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {appString.second_title}
          </Text>
        </View>
        {
          data.map((item: any, index: number) => {
            return (
              <View style={[styles.itemView, { borderLeftColor: index < 4 ? colors.green : colors.lightGray }]} key={index}>
                <View style={[styles.iconView, { left: index < 4 ? -8 : -6 }]}>
                  {
                    index < 4 ?
                      <Image source={ActiveIcon} style={styles.active_image} /> :
                      <Image source={InactiveIcon} style={styles.image} />
                  }
                </View>
                <Text style={styles.titleName}>
                  {item.title}
                </Text>
                <Text style={styles.status}>
                  {item.status}
                </Text>
              </View>
            )
          })
        }
        <View style={styles.button}>
          <Text style={styles.btnText}>
            {appString.keep_learning}
          </Text>
        </View>
      </View>
    </View>
  )
}

/*-------- export container  ----------*/
export default Login;
