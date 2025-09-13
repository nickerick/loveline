import { StyledButton } from '@/src/components/core/StyledButton';
import { FeedItem } from '@/src/components/feed/FeedItem';
import { Colors } from '@/src/constants/Colors';
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
  Button,
  TextInput,
} from 'react-native';

export default function Tab() {
  const [showCreateView, setShowCreateView] = useState(false);
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');

  const { data: announcements, refetch: fetchAnnouncements } = useSafeAsync(
    () => announcementService.getAllAnnouncements(),
  );

  const handleCreate = async () => {
    if (!message.trim() || !author.trim()) return;
    await announcementService.createAnnouncement(message, author);
    fetchAnnouncements();
    setMessage('');
    setAuthor('');
    setShowCreateView(false);
  };

  if (showCreateView) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder='Write your announcement...'
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <Text style={styles.label}>Author</Text>
        <TextInput
          style={styles.input}
          placeholder='Your name'
          value={author}
          onChangeText={setAuthor}
        />

        <StyledButton
          title='Create announcement'
          style={styles.button}
          onPress={handleCreate}
        />

        <StyledButton
          title='Back'
          style={StyleSheet.flatten([
            styles.button,
            { marginTop: 8, backgroundColor: '#aaa' },
          ])}
          onPress={() => setShowCreateView(false)}
        />
      </View>
    );
  }

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
      <StyledButton
        title='Create announcement'
        style={styles.button}
        onPress={() => setShowCreateView(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  messageInput: {
    minHeight: 100,
    textAlignVertical: 'top', // keeps text at the top of multiline
  },
  button: {
    width: '100%',
    marginTop: 8,
  },
});
