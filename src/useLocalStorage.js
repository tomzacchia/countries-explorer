const { useState } = require("react");

function useLocalStorage(key, initialValue) {
  var [storedState, setStoredState] = useState(() => {
    //** if access to LocalStorage is denied, an error can be thrown */
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      //** Catch errors such as no acces, storage is full, etc... */
      return initialValue;
    }
  });

  function setValue(value) {
    try {
      setStoredState(value);

      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      //** TODO: more advanced error handling */
      console.log(error);
    }
  }

  return [storedState, setValue];
}

export default useLocalStorage;
