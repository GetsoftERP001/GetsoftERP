const express = require('express');
const morgan = require('morgan');
const { use } = require('./routes/tareas');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use('/tareas', require('./routes/tareas'));

app.use(express.static(__dirname + '/public'));

app.listen(8080, () => {
  console.log('Se esta ejecutando en el puerto => ' + app.get('port'));
});
