"use strict";
let array = [1, 2, 3];
Object.freeze(array);
try {
  array[0] = 3;
} catch (error) {
  console.log("Cannot mutate freezed object.") 
}
