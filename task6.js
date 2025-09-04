

// Type your code below this line!

function ShoppingList(items) {
  this.items = items;

  this.printList = function() {
    console.log("Lista de compras:");
    this.items.forEach(item => {
      console.log("- " + item.name + " x" + item.quantity);
    });
  };
}

const count = parseInt(process.argv[2]); 
const items = [];

for (let i = 0; i < count; i++) {
  const name = process.argv[3 + (i * 2)];
  const quantity = parseInt(process.argv[4 + (i * 2)]);
  items.push({ name: name, quantity: quantity });
}
//se podria poner la lista en la terminal como si fuera automatico 
const myList = new ShoppingList(items);

myList.printList();

// Type your code above this line!

