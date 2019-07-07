const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = admin.initializeApp(functions.config().firebase);
const toggle = require('./utils.js')

exports.selectBox = functions.database.ref('/input/{row}/{column}')
    .onUpdate((_, context) => {
      const { row, column } = context.params;
      const gridRef = app.database().ref().child('grid');

      return gridRef.once('value', (data) => {
        const oldGrid = data.val();
        const newGrid = toggle(row, column, oldGrid);

        return gridRef.set(newGrid);
      });
    });
