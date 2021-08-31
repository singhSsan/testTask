import React, { useRef, useState } from 'react'
import { View, ScrollView, FlatList } from 'react-native';

/*---------- style ------------*/
import styles from './styles';

/*---------- components ------------*/
import FirstHeader from '../../components/FirstHeader';
import ListItem from '../../components/ListItem';
import BottomView from '../../components/BottomView';

/*-------- Interfaces ----------*/
import { PageOneProps } from '../../Interfaces/containers';

/*---------- helper ------------*/
import { data } from '../../utils/tempData/pageOneData';

const PageOne = ({
  navigation,
}: PageOneProps) => {
  const flatlistRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = () => {
    if (currentIndex < data.length - 1) {
      flatlistRef.current.scrollToIndex({ animated: true, index: currentIndex + 1 })
      setCurrentIndex(currentIndex + 1)
    }
  }

  const onPrevious = () => {
    if (currentIndex >= 1) {
      flatlistRef.current.scrollToIndex({ animated: true, index: currentIndex - 1 })
      setCurrentIndex(currentIndex - 1)
    }
  }

  const renderItem = (item: any) => {
    return (
      <ListItem index={item.index} item={item.item} />
    )
  };

  return (
    <View style={styles.containerView}>
      <View style={{ position: 'absolute', zIndex: 999 }}>
        <FirstHeader
          onBack={() => navigation.goBack()}
          chapterNum={currentIndex + 1}
          chapterName={data[currentIndex].title}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: 'transparent' }}
        bounces={false}
      >
        <FlatList
          data={data}
          horizontal={true}
          scrollEnabled={false}
          ref={flatlistRef}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item: { id: any; }) => item.id}
        />
      </ScrollView>
      <BottomView
        index={currentIndex}
        totalNum={data.length - 1}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </View>
  )
}

/*-------- export container  ----------*/
export default PageOne;
