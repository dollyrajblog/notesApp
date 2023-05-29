export const USERDATA = 'userdata';
export const setUser = txt => {
  // console.log(txt);
  return {
    type: USERDATA,
    payload: txt,
  };
};
