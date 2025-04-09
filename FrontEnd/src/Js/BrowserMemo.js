const getFromLocal = (key) => {
    const getItem = localStorage.getItem(`khanoumi-${key}`);
    return getItem ? JSON.parse(getItem) : null
  }
  const setToLocal = (key, value) => {
    localStorage.setItem(`khanoumi-${key}`, JSON.stringify(value));
  }
  const removeFromLocal = (key) => {
    localStorage.removeItem(`khanoumi-${key}`);
  }
  const getFromSession = (key) => {
    const getItem = sessionStorage.getItem(`khanoumi-${key}`);
    return getItem ? JSON.parse(getItem) : null
  }
  const setToSession = (key, value) => {
    sessionStorage.setItem(`khanoumi-${key}`, JSON.stringify(value));
  }
  
  export  {
    getFromLocal,
    setToLocal,
    removeFromLocal,
    getFromSession,
    setToSession
  }