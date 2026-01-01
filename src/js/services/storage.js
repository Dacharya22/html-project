// LocalStorage service with JSON handling
const KEY = 'app:data';
export const save = (data) => localStorage.setItem(KEY, JSON.stringify(data));
export const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
};
