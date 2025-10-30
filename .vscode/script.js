/*let str="Apna college";
console.log(str);
str=str.toUpperCase();//actually modifies the new str variable not existing one
console.log(str);//strings are immutable in js

let str2="HELLO WORLD";
str2=str2.toLowerCase();
console.log(str2);

let str3="     trim me    ";
console.log(str3);
str3=str3.trim();
console.log(str3);

let str4="Hello World";
console.log(str4.slice(0,5));//0 to 4 index
console.log(str4.slice(6));//6 to end

let str5="Hello World";
console.log(str5.replace("World","Universe"));//Hello Universe
console.log(str5);//original string remains unchanged

let str6="Hello";
console.log(str6.charAt(1));//e
console.log(str6[1]);//e
console.log(str6.charAt(10));//'' empty string

let username=prompt("Enter your name:");
let len=username.length;
console.log("@"+username+len);// strings are immutable and arrays are mutable

let heroes=["Spiderman","Ironman","Hulk"];
for (let hero of heroes){
    console.log(hero);
}

let marvel=["Hulk", "Thor", "Loki"];
let dc=["Batman", "Superman", "Flash"];
let allHeroes=marvel.concat(dc);
console.log(allHeroes);// array concatenation requires new variable to store the result

let fruits=["Apple", "Banana", "Orange"];
fruits.push("Grapes");
console.log(fruits);//appends last

fruits.pop();
console.log(fruits);//removes last

fruits.shift();
console.log(fruits);//removes first

fruits.unshift("Mango");
console.log(fruits);//appends first

let veggies=["Carrot", "Broccoli", "Spinach", "Peas", "Cabbage"];//need variable to store the sliced array
let someVeggies=veggies.slice(1,4);//1 to 3 index
console.log(someVeggies);

let colors=["Red", "Green", "Blue"];
colors.splice(1,1,"Yellow","Purple");//at index 1, remove 1 element and add Yellow and Purple
console.log(colors);*/

let function1 =(str)=>{
    let count=0;
    for (let char of str){
        if (char==='a' || char==='e' || char==='i' || char==='o' || char==='u' ||
            char==='A' || char==='E' || char==='I' || char==='O' || char==='U'){
                count++;
            }
    }
    return count;
}

//call back function doubt???????


