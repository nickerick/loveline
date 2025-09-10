import { Colors } from '@/src/constants/Colors';
import { View, StyleSheet, Text } from 'react-native';

type FeedItemProps = {
  text: string;
};

export function FeedItem({text}: FeedItemProps) {
  const bgColor = getRandomColor();
  
  return (
    <View style={[styles.container, {backgroundColor: bgColor, borderColor: bgColor}]}>
      <Text>{text}</Text>
    </View>
  );
}

function getRandomColor() {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}

const colorPalette = [
  Colors.custom.accent1,
  Colors.custom.accent2,
  Colors.custom.accent3,
  Colors.custom.accent4,
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
});