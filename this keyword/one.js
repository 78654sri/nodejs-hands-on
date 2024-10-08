const student = {
    first_name:"varsha",
    sec_name:"pooja",
    getFullname(){
        return student.first_name + " " + student.sec_name;
    },
}
console.log(student.getFullname());

const student1 = {
    first_name:"varsha",
    sec_name:"pooja",
    getFullname(){
        return this.first_name + " " + this.sec_name;
    },
}
console.log(student1.getFullname());
//this keyword refers to the obj it is called on
//we always want to look how the function is called


const student2 ={
    first:"john",
    getName(){
        return this.first;
    }
    
}
const getName = student2.getName;
console.log(student2.getName())