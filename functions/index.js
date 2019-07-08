const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = admin.initializeApp(functions.config().firebase);
const toggle = require('./utils.js')

exports.selectBox = functions.database.ref('/input/{row}/{column}')
  .onUpdate((_, context) => {
    const { row, column } = context.params;
    const gridRef = app.database().ref('grid');

    return gridRef.transaction((oldGrid) => {
      if (oldGrid === null) return null;
      return toggle(row, column, oldGrid);
    });
  });
