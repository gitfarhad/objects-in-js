// simple object 
var a = {
    name : "thanos",
    age : 1000,
    race : "titan",
    ars : "gauntlet",
    stones : ["time", "mind", "space","reality"],
    rem : function(){
        return this.age + " power";
    },

    // object inside object 
    family : {
        kids : 2,
        name1: "ghamora",
        name2: "nebula",
        fighters : true,
        },

// object inside array which is inside an object
    daughters : [
        {call1 : "green", age : 120},
        {call2 : "blue", age : 100},
        {call3 : "grey", age : 200},
    ],
    desc : function () {
        return `${this.name} is the villain in movie,
        he has a ${this.ars}
        `
    }
}
a.family.name2 = "nebula-cyborg";  // updating the value of a key inside objext 
console.log(a);   //printing the object
console.log(a.daughters);    //accessing the array which is stored inside and object and has an object inside it.
