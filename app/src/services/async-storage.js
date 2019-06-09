import AsyncStorage from '@react-native-community/async-storage';

/**
 * 存储
 * @param namespace
 * @param key
 * @param value
 */
export const storeData = async (namespace, key, value,) => {
  try {
    await AsyncStorage.setItem(`@${namespace}:${key}`, value);
  } catch (error) {
    console.log(error, 'storeData error');
  }
};

/**
* 取值
* @param namespace
* @param key
*/
export const getData = async (namespace, key) => {
  try {
    const value = await AsyncStorage.getItem(`@${namespace}:${key}`);
    return value;
  } catch (error) {
    console.log(error, 'getData error');
  }
};

/**
* 删除对应key的
* @param namespace
* @param key
*/
export const removeData = async (namespace, key) => {
  try {
    await AsyncStorage.removeItem(`@${namespace}:${key}`);
  } catch (error) {
    console.log(error, 'removeData error');
  }
};