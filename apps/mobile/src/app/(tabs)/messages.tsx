import { Colors } from '@/src/constants/Colors';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Tab() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>dear tay tay,</Text>
      <View style={{ height: 10 }} />
      <Text>i hope this message finds you well.</Text>
      <View style={{ height: 10 }} />
      <Text>roses are red violets are blue</Text>
      <View style={{ height: 10 }} />
      <Text>spongebob is yellow</Text>
      <View style={{ height: 10 }} />
      <Text>and your knees are purple (bruise moment) </Text>
      <View style={{ height: 100 }} />
      <Button
        color={Colors.custom.accent4}
        title="click to see how pretty my girl is"
        onPress={() => router.push('/(tabs)/profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
