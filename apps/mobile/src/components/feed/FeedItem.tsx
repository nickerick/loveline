import { Colors } from '@/src/constants/Colors';
import { View, StyleSheet, Text } from 'react-native';

type FeedItemProps = {
  text: string;
  author: string;
  createdAt: string;
};

export function FeedItem({ text, author, createdAt }: FeedItemProps) {
  const bgColor = getRandomColor();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bgColor, borderColor: bgColor },
      ]}
    >
      <Text>{text}</Text>

      {/* Bottom-right author + timestamp */}
      <View style={styles.metaContainer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
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
    paddingBottom: 50, // leave space for meta info
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    position: 'relative', // needed for absolute positioning
  },
  metaContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    alignItems: 'flex-end', // stack texts vertically, right-aligned
  },
  author: {
    fontSize: 12,
    color: '#555',
    backgroundColor: 'rgba(255,255,255,0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 2,
  },
  createdAt: {
    fontSize: 10,
    color: '#333',
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
