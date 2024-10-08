//1
function getItem(){
    console.log(this);
}

getItem();

//inside function this is refers to the global object

//2

const item={
    title:"ball",
    getItem(){
        console.log("this",this.getItem);

    }
}
item.getItem();

//3
class Items {
    constructor() {
        this.title = "ball1";
    }
    
    getItem() {
        console.log("this", this);
    }
}

const items = new Items();
items.getItem();

class Item2 {
    title = "Ball";
    getItem() {
      function someFn() {
        console.log("this", this);
      }
      someFn();
    }
  }
  
  const item2 = new Item2();
  item2.getItem();
  
