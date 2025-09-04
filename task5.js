

// Type your code below this line!
function FriendsList(names) {
  this.names = names;
}

const count = parseInt(process.argv[2]); 
const names = [];

for (let i = names; i < count; i++) {
  names.push(process.argv[3 + i]);
}

const myFriends = new FriendsList(names);

console.log(myFriends.names);


// Type your code above this line!

