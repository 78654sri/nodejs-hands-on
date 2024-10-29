
const video = {
    title:"a",
    play(){
        console.log(this);
    }
}
video.stop = function() {
    console.log(this)
}

// video.stop();
// console.log(video)

// function pideo(title){
//     this.title=title;
//     console.log(this);
// }
// const v = new pideo("b");

const pideo = {
    title:"a",
    tags:["a","b","c"],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag)
        },this)
    }
}
pideo.showTags();


const person = {
    name: "Vyshnavi",
    greet: function() {
        const innerFunction = () => {
            console.log(`Hello, ${this.name}!`);
        };
        innerFunction();
    }
};

person.greet(); 



const myFunction = function() {
    console.log(this);
};

myFunction(); 

const calAge = function(year){
    console.log(2303-year);
    console.log(this);

};
calAge(3333)

global.age=40;
function hi(){
    console.log(this.age);
}
hi();
console.log(global)
