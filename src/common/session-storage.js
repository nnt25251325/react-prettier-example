import { jsonParse } from './utils';

export const reactSessionStorage = {
  set(key, value) {
    sessionStorage[key] = value;
    return sessionStorage[key];
  },

  get(key, defaultValue) {
    return sessionStorage[key] || defaultValue;
  },

  setObject(key, value) {
    sessionStorage[key] = JSON.stringify(value);
    return sessionStorage[key];
  },

  getObject(key) {
    return jsonParse(sessionStorage[key] || '{}');
  },

  clear() {
    return sessionStorage.clear();
  }
};
