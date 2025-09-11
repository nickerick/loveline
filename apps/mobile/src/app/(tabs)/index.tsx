import { FeedItem } from '@/src/components/feed/FeedItem';
import { User } from '@/src/domain/user/User';
import { userService } from '@/src/infrastructure/service';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function Tab() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const result = await userService.getAllUsers();
      if (!ignore) {
        setUsers(result);
      }
    }

    let ignore = false;
    fetchUsers();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedItem text={item.username} />}
        // onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={loading ? <ActivityIndicator /> : null}
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
