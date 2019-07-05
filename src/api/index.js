import { gridRef } from './firebase.js';

export const getGrid = gridRef.on('value', (response) => {
  if (response) console.log(response.val());
});
