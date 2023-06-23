import axios from 'axios';
import Config from 'react-native-config';
import {authorize, refresh} from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageConstants} from '../utils/constants';

const {token} = AsyncStorageConstants;

const config = {
  issuer: `${Config.IDENTITY}`,
  clientId: 'OneAcademy',
  clientSecret: 'OneAcademySecret',
  redirectUrl: 'com.oneforex:/oauthredirect',
  scopes: ['OneLife_api', 'openid', 'offline_access'],
  dangerouslyAllowInsecureHttpRequests: true,
  additionalParameters: {prompt: 'login'},
};

export const renewToken = async () => {
  const tokenData = await getToken();
  if (!tokenData) return true;

  const res = await refresh(config, {
    refreshToken: tokenData.refreshToken,
  });

  if (!res?.accessToken) return true;

  await setToken(res);
};

export const login = async () => {
  try {
    const res = await authorize(config);
    await setToken(res);
  } catch (error) {
    return error;
  }
};

export const getToken = async () => {
  try {
    const tokenData = await AsyncStorage.getItem(token);
    return tokenData != null ? JSON.parse(tokenData) : null;
  } catch {
    return null;
  }
};

export const setToken = async tokenData => {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenData.accessToken}`;
  await AsyncStorage.setItem(token, JSON.stringify(tokenData));
};
