import { jsonParse } from './utils';

export const reactLocalStorage = {
  set(key, value) {
    localStorage[key] = value;
    return localStorage[key];
  },

  get(key, defaultValue) {
    return localStorage[key] || defaultValue;
  },

  setObject(key, value) {
    localStorage[key] = JSON.stringify(value);
    return localStorage[key];
  },

  getObject(key) {
    return jsonParse(localStorage[key] || '{}');
  },

  clear() {
    return localStorage.clear();
  }
};
