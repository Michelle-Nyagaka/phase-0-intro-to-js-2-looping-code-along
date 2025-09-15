// Code your solutions in this file
function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    let message = "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
    messages.push(message);
  }

  return messages;
}

console.log(writeCards(["Grande", "Sonia", "Oliver"], "birthday"));

function countDown (number){
    while (number>=0){
        console.log(number)
        number = number -1;  
      }
}
