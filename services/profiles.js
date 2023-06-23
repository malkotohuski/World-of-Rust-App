import qs from 'query-string';
import Config from 'react-native-config';
import {getReq, putReq} from './axios/makeRequest';
import {myProfileModel} from './models/profile';

const baseUrl = `${Config.PORTAL_API}/profile`;

export const getMyProfile = async () => {
  const [data, err] = await getReq(`${baseUrl}/v2/my`);
  return [data && myProfileModel(data), err];
};

export const getAllNicknames = data => {
  const params = qs.stringify({Nickname: data});
  return getReq(`${baseUrl}/accounts/getAccountsByNickname?${params}`);
};

export const switchAccount = id => putReq(`${baseUrl}/setcurrent`, {id});
