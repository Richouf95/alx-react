// Import Immutable.js library
import { fromJS } from 'immutable';

// Function to convert a JS object into an Immutable Map
function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;