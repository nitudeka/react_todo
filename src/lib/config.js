const development = {
  apiURL: 'http://localhost:3000/',
  appURL: '/'
};

const production = {
  apiURL: 'https://reacttodoapi.herokuapp.com/',
  appURL: '/react_todo/'
};

const moduleToExport = process.env.NODE_ENV === 'development' ? development : production;

module.exports = moduleToExport;
