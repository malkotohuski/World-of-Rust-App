import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');
  };

  const renderProfileImage = isUserMessage => {
    if (isUserMessage) {
      return (
        <Image
          source={{
            uri: 'https://scontent.fsof9-1.fna.fbcdn.net/v/t1.6435-9/167948801_105755308284836_2213881515557944955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_q_RD3CqnjIAX8zyeTF&_nc_ht=scontent.fsof9-1.fna&oh=00_AfCp-pEyYBkVEKv51sY5GUXNHmXU7Op-x2_kdPHWrIW6Hw&oe=64D89983',
          }}
          style={styles.profileAvatar}
        />
      );
    }
  };

  const renderItem = ({item}) => {
    const isUserMessage = item.sender === 'user';

    return (
      <View>
        <View style={styles.profileNameContainer}>
          {renderProfileImage(isUserMessage)}
        </View>
        <View
          style={[
            styles.messageContainer,
            isUserMessage && styles.userMessageContainer,
          ]}>
          <Text
            style={[
              styles.messageText,
              isUserMessage && styles.userMessageText,
            ]}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://scontent.fsof9-1.fna.fbcdn.net/v/t1.6435-9/167948801_105755308284836_2213881515557944955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_q_RD3CqnjIAX8zyeTF&_nc_ht=scontent.fsof9-1.fna&oh=00_AfCp-pEyYBkVEKv51sY5GUXNHmXU7Op-x2_kdPHWrIW6Hw&oe=64D89983',
          }}
          style={styles.profileAvatar}
        />
        <Text style={styles.profileName}>Daniel Dimitrov</Text>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.messagesContainer}
        inverted
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={handleSend}
          blurOnSubmit={false}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ccc',
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  messagesContainer: {
    flexGrow: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  messageContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#007afe',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  userMessageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#007afe',
    borderRadius: 8,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  profileNameContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 4,
  },
  profileNameText: {
    fontSize: 12,
    color: '#999',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
});

export default Chat;
