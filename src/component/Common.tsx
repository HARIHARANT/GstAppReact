const globalObj = {
  appName: 'GSTAPP',
  loginScr: 'Login',
  regEx: {
    email: new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
    password: new RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/),
  },
};

Object.freeze(globalObj);

export default globalObj;
