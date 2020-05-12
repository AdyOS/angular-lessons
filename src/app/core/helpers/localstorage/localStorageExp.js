const localStorageExp = {
  setItem(key, jsonData, expirationSec = null) {
    const expirationMS = expirationSec ? expirationSec * 1000 : Number.MAX_VALUE;
    const record = { value: JSON.stringify(jsonData), timestamp: new Date().getTime() + expirationMS };

    localStorage.setItem(key, JSON.stringify(record));

    return jsonData;
  },

  getItem(key) {
    const record = localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));

    if (!record) {
      return null;
    }

    return (new Date().getTime() < record.timestamp && JSON.parse(record.value));
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },
};

export default localStorageExp;
