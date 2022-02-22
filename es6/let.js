const x = () => {
  var numArray = [];
  for (var i = 0; i < 3; i++) {
    numArray.push(i);
  }
  console.log(numArray);
  console.log(i);
};

const y = () => {
  numArray = [];
  for (let i = 0; i < 3; i++) {
    numArray.push(i); 
  }
  console.log(numArray);
  try {
    console.log(i);
  } catch (ReferenceError) {
    console.log('Variable i is unaccessible out of the loop scope.') 
  }
};

x();
y();
