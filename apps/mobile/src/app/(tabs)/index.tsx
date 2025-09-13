import { FeedItem } from '@/src/components/feed/FeedItem';
import { User } from '@/src/domain/user/User';
import { useSafeAsync } from '@/src/hooks/useSafeAsync';
import { announcementService } from '@/src/infrastructure/service';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function Tab() {
  const {
    data: announcements,
    loading,
    error,
  } = useSafeAsync(() => announcementService.getAllAnnouncements());

  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedItem text={item.message} />}
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
