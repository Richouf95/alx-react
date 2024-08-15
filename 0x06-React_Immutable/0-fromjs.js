// Import Immutable.js library
const { fromJS } = require('immutable');

// Function to convert a JS object into an Immutable Map
function getImmutableObject(object) {
    return fromJS(object);
}

// Example usage
const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

console.log(getImmutableObject(obj));

module.exports = getImmutableObject;