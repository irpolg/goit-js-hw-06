class Storage {
   #item;
   constructor (item) {
       this.#item = item;
   }

getItems() {
    return this.#item;
} 
//повертає масив поточних товарів у приватній властивості items.

addItem(newItem) {
    this.#item.push(newItem);
} 
//приймає новий товар newItem і додає його до масиву 
//товарів у приватну властивість items об'єкта.

removeItem(itemToRemove) {
    const findItem = this.#item.indexOf(itemToRemove);
    if (findItem !== -1) {
        this.#item.splice(findItem, 1);
    }
}
}
// приймає рядок з назвою товару itemToRemove і 
//видаляє його з масиву товарів у приватній властивості items об'єкта.

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]