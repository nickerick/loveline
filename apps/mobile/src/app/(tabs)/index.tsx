import { FeedItem } from '@/src/components/feed/FeedItem';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

function generateItems(start: number, count: number, oCount: number = 1) {
  return Array.from({ length: count }, (_, i) => ({
    id: (start + i).toString(),
    text: `I l${'o'.repeat(start + i)}ve you`,
  }));
}

export default function Tab() {
  const [data, setData] = useState(generateItems(1, 20));
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const next = generateItems(data.length + 1, 20);
      setData([...data, ...next]);
      setLoading(false);
    }, 200); // Simulate network delay
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <FeedItem text={item.text} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});