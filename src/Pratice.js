let person =[
    { id:1, name:'Ram', age:25},
    { id:2, name:'Laxman', age:25},
    { id:3, name:'Sita', age:23},
    { id:4, name:'Gita', age:24},
    { id:5, name:'Parbati', age:29},

];
//[23,24,25,29]
let ages=[];
//for(let i=0;i<persons.length;i++){
//ages.push(person[i].age);
//}
//persons.forEach(function (p){
  //  ages.push(p.age)
//});
let ages=persons.map(person=> person.age*2);
Console.log(person[0].age);

