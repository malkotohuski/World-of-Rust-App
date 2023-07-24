import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [
      {icon: 'map', color: '#fe9488', label: 'Language', type: 'link'},
      {
        id: 'darkMode',
        icon: 'moon',
        color: '#007afe',
        label: 'Dark Mode',
        type: 'toggle',
      },
      {
        id: 'wifi',
        icon: 'wifi',
        color: '#007afe',
        label: 'Use Wi-Fi',
        type: 'toggle',
      },
      {
        id: 'navigation',
        color: '#32c759',
        label: 'Location',
        type: 'link',
      },
      {
        id: 'showCollaborators',
        icon: 'users',
        color: '#32c759',
        label: 'Show Collaborators',
        type: 'toggle',
      },
      {
        id: 'accessibilityMode',
        icon: 'airplay',
        color: '#32c759',
        label: 'Accessibility Mode',
        type: 'toggle',
      },
      {icon: 'music', color: '#fd2d54', label: 'Sounds', type: 'link'},
      {icon: 'tool', color: '#fd2d54', label: 'Tools', type: 'link'},
    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      {icon: 'save', color: '#8c8d91', label: 'Report Bug', type: 'link'},
      {icon: 'mail', color: '#007afe', label: 'Contact Us', type: 'link'},
    ],
  },
  {
    header: 'Content',
    icon: 'align-center',
    items: [
      {icon: 'save', color: '#32c759', label: 'Saved', type: 'link'},
      {icon: 'download', color: '#fd2d54', label: 'Download', type: 'link'},
      {icon: 'hard-drive', color: '#007afe', label: 'Storage', type: 'link'},
      {icon: 'info', color: '#fe9488', label: 'Info', type: 'link'},
    ],
  },
];

const PROFILE_PICTURE =
  'https://scontent.fsof1-2.fna.fbcdn.net/v/t1.6435-9/167948801_105755308284836_2213881515557944955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2cPteDZsVp8AX8y0L9K&_nc_ht=scontent.fsof1-2.fna&oh=00_AfCWhRZv0FQIoNB1Hdo24iqfAiYGuPmplk7NP831bCvhKw&oe=64CC83C3';

const SettingsScreen = ({route}) => {
  const navigation = useNavigation();
  const {newProfilePicture, newProfileName, newProfileAddress} =
    route.params || {};
  const [profilePicture, setProfilePicture] = useState(PROFILE_PICTURE);
  const [profileName, setProfileName] = useState('Daniel Dimitrov');
  const [profileAddress, setProfileAddress] = useState(
    '10 BeliMel Street, Sofia, Bulgaria, 1756',
  );
  const [form, setForm] = useState({
    darkMode: true,
    wifi: false,
    showCollaborators: true,
    accessibilityMode: false,
  });

  const isDarkMode = form.darkMode;

  return (
    <ScrollView
      source={require('../../images/backgroundImageRust.jpg')}
      style={[
        styles.container,
        isDarkMode && styles.containerDark, // Apply dark mode to the container
      ]}>
      <ImageBackground
        source={require('../../images/backgroundImageRust.jpg')}
        style={[styles.profile, isDarkMode && styles.profileDark]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AccountInfo', {
              setProfilePicture,
              setProfileName,
              setProfileAddress,
            })
          }>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt="Profile picture"
              source={{uri: newProfilePicture || profilePicture}}
              style={styles.profileAvatar}
            />
            <View style={styles.profileAction}>
              <Icon name="edit-3" size={15} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={[styles.profileName, isDarkMode && styles.profileNameDark]}>
          {newProfileName || profileName}
        </Text>
        <Text style={styles.profileAddress}>
          {newProfileAddress || profileAddress}
        </Text>
      </ImageBackground>

      {SECTIONS.map(({header, items}) => {
        const sectionStyle = isDarkMode ? styles.darkSection : styles.section;

        return (
          <View
            source={require('../../images/backgroundImageRust.jpg')}
            style={sectionStyle}
            key={header}>
            <Text style={styles.sectionHeader}>{header}</Text>

            {items.map(({id, label, type, icon, color}) => (
              <TouchableOpacity
                key={icon}
                onPress={() => {
                  // Handler onPress
                }}>
                <View style={styles.row}>
                  <View style={[styles.rowIcon, {backgroundColor: color}]}>
                    <Icon name={icon} color="#fff" size={18} />
                  </View>
                  <Text style={styles.rowLabel}>{label}</Text>

                  <View style={{flex: 1}} />

                  {type === 'toggle' && (
                    <Switch
                      value={form[id]}
                      onValueChange={value => setForm({...form, [id]: value})}
                    />
                  )}

                  {type === 'link' && (
                    <Icon name="chevron-right" color="#0c0c0c" size={22} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  containerDark: {
    backgroundColor: '#333333', // Dark mode background color
  },
  profile: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 24,
  },
  profileDark: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777',
    borderRadius: 8,
    marginBottom: 24,
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
  },
  profileNameDark: {
    color: '#000', // Dark mode profile name color
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  profileAvatar: {
    width: 112,
    height: 112,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    width: 28,
    height: 28,
    backgroundColor: '#007bff',
    borderRadius: 9999,
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkSection: {
    paddingHorizontal: 24,
    backgroundColor: '#555555', // Dark mode section background color
    borderRadius: 8,
    marginBottom: 12,
  },
  section: {
    paddingHorizontal: 24,
    backgroundColor: '#999',
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    color: '#0c0c0c',
  },
});

export default SettingsScreen;
