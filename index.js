const Conection = require('./conection.js');
const App = require('./App.js');

const conection = new Conection();
App(conection.expressServerConection());

//App();
// conection.conectServer();
// conection.expressServerConection();