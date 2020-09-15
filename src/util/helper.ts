export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const uuid4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  // eslint-disable-next-line
  const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

export const truncate = (str: string, n: number) => (str.length > n) ? str.substr(0, n - 1) + ' &hellip;' : str;
