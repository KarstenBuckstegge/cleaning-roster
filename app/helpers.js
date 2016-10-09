import { AsyncStorage, } from 'react-native';

export const getDataFromAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.error(`An error occured while getting data from AsyncStorage:
      ${error}`);
    return null;
  }
  return null;
};
