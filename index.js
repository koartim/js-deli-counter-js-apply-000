var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

// create a number variable that starts at 1 instatiated outside the function
// inside the function, have that number increment by one
// push the number into the line array
// return number




// right
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
 
  let newCustomer = line.shift();
  return `Currently serving ${newCustomer}.`;
}



 
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  
  var people = [];

  
  for (var i = 0; i < line.length; i++) {
    people.push(i+1 + ". " + line[i]);
  }
  
  return "The line is currently: " + people.join(", ")
}



