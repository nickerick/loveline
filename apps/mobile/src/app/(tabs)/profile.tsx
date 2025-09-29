import { StyledButton } from '@/src/components/core/StyledButton';
import { Colors } from '@/src/constants/Colors';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tab() {
  const [showImage, setShowImage] = useState(false);

  function renderImageHandler() {
    let sourceImage =
      'https://images.pexels.com/photos/20050653/pexels-photo-20050653.jpeg?_gl=1*nwuvzk*_ga*MTM5OTc1MTA4NC4xNzU5MTE0MDg2*_ga_8JE65Q40S6*czE3NTkxMTQwODUkbzEkZzEkdDE3NTkxMTQxMzUkajEwJGwwJGgw';

    if (!showImage)
      return (
        <StyledButton title={'Show me!'} onPress={() => setShowImage(true)} />
      );
    return (
      <Image
        style={styles.image}
        source={
          require('@/assets/images/beautiful-girl.jpg') || { uri: sourceImage }
        }
        resizeMode='contain'
        alt='pretty girl loading...'
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>This is where my pretty girl is</Text>
      <View style={{ height: 10 }} />
      {renderImageHandler()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '70%',
    aspectRatio: 0.75,
    borderStyle: 'solid',
    borderWidth: 10,
    borderColor: Colors.custom.primary,
    borderRadius: 20,
    backgroundColor: Colors.custom.primary,
  },
});
