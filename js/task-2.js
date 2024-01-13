class Storage {
    #items = [];

        constructor(items) {
        this.#items = items;
    }
        getItems() {
        return this.#items;
    } 

        addItem(newItem) {
        return this.#items.push(newItem);
    } 
        removeItem(itemToRemove) {
            const deleteItem = this.#items.indexOf(itemToRemove)
            if (deleteItem) {
                this.#items.splice(deleteItem, 1)
                
        }    
            return this.items
    } 
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

