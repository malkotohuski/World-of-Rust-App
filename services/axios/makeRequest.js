/* eslint-disable no-console */
import axios from 'axios';

const getProperty = (properties, object) =>
  properties.reduce((xs, x) => xs && xs[x], object);

export const getReq = async (url, config, keys = []) => {
  try {
    const response = await axios.get(url, config);
    const data = getProperty(['data'].concat(keys), response);
    return Promise.resolve([data, null]);
  } catch (err) {
    console.log({err});
    return Promise.resolve([null, err.response]);
  }
};

export const deleteReq = async (url, config, keys = []) => {
  try {
    const response = await axios.delete(url, config);
    const data = getProperty(['data'].concat(keys), response);
    return Promise.resolve([data, null]);
  } catch (err) {
    console.log({err});
    return Promise.resolve([null, err.response]);
  }
};

export const postReq = async (url, body, config, keys = []) => {
  try {
    const response = await axios.post(url, body, config);
    const data = getProperty(['data'].concat(keys), response);
    return Promise.resolve([data, null]);
  } catch (err) {
    console.log({err});
    return Promise.resolve([null, err.response]);
  }
};

export const putReq = async (url, body, config, keys = []) => {
  try {
    const response = await axios.put(url, body, config);
    const data = getProperty(['data'].concat(keys), response);
    return Promise.resolve([data, null]);
  } catch (err) {
    console.log({err});
    return Promise.resolve([null, err.response]);
  }
};

export const patchReq = async (url, body, config, keys = []) => {
  try {
    const response = await axios.patch(url, body, config);
    const data = getProperty(['data'].concat(keys), response);
    return Promise.resolve([data, null]);
  } catch (err) {
    console.log({err});
    return Promise.resolve([null, err.response]);
  }
};

export const getConfig = () => axios.defaults;
