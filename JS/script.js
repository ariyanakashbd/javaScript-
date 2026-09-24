// let products = [
//   { name: "Pen", price: 20 },
//   { name: "Book", price: 100 },
//   { name: "Bag", price: 500 }
// ];


// let tottal = products.reduce((tottal,number ) =>{
//     if (tottal.max < number.price){
//        tottal.max = number.price
//     }
    
//     if (tottal.min > number.price){
//        tottal.min = number.price
//     }
//     return tottal
// },{
//     min: products[0].price,
//     max: products[0].price

// });
// console.log(tottal);

// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.reduce((tottal,number) =>{
//     return tottal + number
// },0);

// let avarage = result / numbers.length;
// console.log(avarage);

// let numbers = [2, 3, 4, 5];

// let result = numbers.reduce((tottal , number ) =>{
//     return tottal * number;
// },1);

// console.log(result);


// let numbers = [15, 42, 8, 73, 29, 3, 91];

// let result = numbers.reduce((tottal , number) =>{
//     if (tottal.max < number){
//      tottal.max = number
//     }

//     if(tottal.min > number){
//         tottal.min = number
//     }
//   return tottal
// },{
//      min: numbers[0],
//      max: numbers[0]
// });
// console.log(result);
// let products = [
//     { name: "Pen", price: 20, quantity: 5 },
//     { name: "Book", price: 100, quantity: 2 },
//     { name: "Bag", price: 500, quantity: 3 }
// ];
// let result = products.reduce(( tottal , number ) =>{
   
//    return tottal + number.price * number.quantity
// },0)

// console.log(result);


// let products = {
//      name : "laptop",
//      price : 45000,
//      brand : "HP",
//      stock : 10,
//      category : "Electronics"
// };

// console.log(products);


// let student = {
//     name: "Akash",
//     age: 23,
//     city: "Dhaka"
// };

// student.age = 24,

// student.city = "Chittagong",

// student.profession = "Full Stack Developer"

// console.log(student);


// let product = {
//     name: "Laptop",
//     price: 45000,
//     quantity: 3
// };

// let result = product.price * product.quantity;

// console.log(result);

// let products = [
//     {
//         name: "Laptop",
//         price: 45000,
//         quantity: 2
//     },
//     {
//         name: "Mobile",
//         price: 20000,
//         quantity: 3
//     },
//     {
//         name: "Headphone",
//         price: 3000,
//         quantity: 5
//     }
// ];

// console.log(products[1].name);
// console.log(products[2].name);
// console.log(products[0].name );

// let products = [
//     {
//         name: "Laptop",
//         price: 45000,
//         quantity: 2
//     },
//     {
//         name: "Mobile",
//         price: 20000,
//         quantity: 3
//     },
//     {
//         name: "Headphone",
//         price: 3000,
//         quantity: 5
//     }
// ];

// let result = products.reduce((total ,number) =>{
//     return total + number.price * number.quantity
// },0)

// console.log(result);

// let products = [
//     { name: "Pen", price: 20, quantity: 5 },
//     { name: "Book", price: 100, quantity: 2 },
//     { name: "Bag", price: 500, quantity: 3 }
// ]; 

// let result = products.reduce((total,number ) =>{
//     let currentTotal = number.price * number.quantity;

//     if (currentTotal > total.total){
//        total.name = number.name
//        total.total = currentTotal
//     }
//     return total
// },
// {
//     name : "",
//     total : 0
// });

// console.log(result);
// let products = [
//     { name: "Pen", price: 20, quantity: 5 },
//     { name: "Book", price: 100, quantity: 2 },
//     { name: "Bag", price: 500, quantity: 3 }
// ];

// let result = products.reduce(( total,number) =>{
//     let currentTotal = number.price * number.quantity;

//     if (currentTotal > total.price) {
//         total.name = number.name
//         total.total = currentTotal
//     }
//     return total
// },{
//    name : "" ,
//    total : 0
// });
// console.log(result);

// let products = [
//     { name: "Pen", price: 20, quantity: 5 },
//     { name: "Book", price: 100, quantity: 2 },
//     { name: "Bag", price: 500, quantity: 3 }
// ];

// let result = products.reduce((total,number) =>{
//     let currentTotal = number.price * number.quantity;

//     if (currentTotal >total.total){
//       total.name = number.name;

//       total.total = currentTotal;
//     };
//    return total;
// },{
//    number : "",
//     total : 0
// });

// console.log(result);



// let products = [
//     { name: "Mouse", price: 500, quantity: 2 },
//     { name: "Keyboard", price: 1000, quantity: 3 },
//     { name: "Monitor", price: 5000, quantity: 1 }
// ];

// let result = products.reduce((total , number) =>{

//     let currentTotal = number.price * number.quantity;

//     total.totalSeles += currentTotal ;
//     total.totalQuantity += number.quantity;

//     return total

// },{
//     totalSeles : 0,
//     totalQuantity :0
// });

// console.log(result);


// let products = [
//     { name: "Mouse", price: 500},
//     { name: "Keyboard", price: 1000 },
//     { name: "Monitor", price: 5000}
// ];

// let result = products.reduce((total,objact) =>{

//     let currentTotal = objact.price;

//   if (currentTotal > total.total) {
//     total.name = objact.name;
//     total.total = currentTotal;
// };

//     return total;

// },{
//     name : '',
//     total : 0
// });

// console.log(result);


// let products = [
//     { name: "Pen", price: 20, quantity: 5 },
//     { name: "Book", price: 100, quantity: 2 },
//     { name: "Bag", price: 500, quantity: 3 }
// ];

// let result = products.reduce((total,objact) =>{
    
//     let currentTotal = objact.price * objact.quantity;

//   if (currentTotal < total.total){
  
//         total.total = currentTotal;
//         total.name = objact.name;
//   };

//     return total
// },{
//     name : '',
//     total : Infinity
// });

// console.log(result);


// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Bag", price: 500 },
//     { name: "Pencil", price: 10 },
//     { name: "Watch", price: 300 },
//     { name: "Mouse", price: 250 }
// ];

// let result = products.filter((item) =>{
//    if (item.price >= 200 && item.name !== 'Bag' || item.name === 'Pen' ) {
//       return true;
//    };
// });
  
// console.log(result);

// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 }
// ];

// let result = products.some((item) =>{
//    return item.price > 1000;
// });

// console.log(result);


// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 }
// ]; 

// let result = products.some((item) =>{
//    return item.name === 'Mobile';
// });

// console.log(result);


// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 300 },
//     { name: "Laptop", price: 45000 }
// ];

// let result = products.every((item) =>{
//    return item.price > 100;
// });
// console.log(result);


// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 80 },
//     { name: "Laptop", price: 45000 }
// ];

// let result = products.every((item) =>{
//    return item.price > 100;
// });

// console.log(result);

// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.findIndex((item) =>{
//    return item.name === 'Laptop'
// });
// console.log(result);

// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.find((item) =>{
//    return item.price >= 500;
// });
// console.log(result);


// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.sort((a,b) =>{
//    return b.price - a.price;
// });

// console.log(result);
// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.sort((a , b) =>{
//     return a.price - b.price;
// });
// console.log(result);
// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.sort(( a , b) =>{

//     if(a.name === 'Laptop'){
//       return 1;
//     };
//     if (b.name === 'Laptop'){
//         return -1;
//     };
//     return a.price-b.price; 
// });

// console.log(result);


// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];


// let result = products.filter((item) =>{
//     return item.price > 100;
// })

// .sort((a ,b) =>{
//     return b.name.localeCompare(a.name);
// });

// console.log(result);

// let products = [
//     { name: "Pen", price: 200 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 },
//     { name: "Mobile", price: 20000 }
// ];

// let result = products.filter((item) => item.price > 500 )

// .sort((a,b) => a.price - b.price)

// .map((item) =>{
//    return item.name.toUpperCase() ;
     
// });
// console.log(result);

// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.every((item) =>{
//     return item.price > 10;
// });

// console.log(result);


// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];

// let result = products.some((item) =>{
//     return item.price > 1000;
// });

// console.log(result);

// let products = [
//     { name: "Pen", price: 20 },
//     { name: "Book", price: 100 },
//     { name: "Laptop", price: 45000 },
//     { name: "Bag", price: 500 }
// ];


// let result =products.filter((item)=>{
//     return item.price >= 100;

// });
// console.log(result);

// let numbers = [10, 20, 10, 30, 20, 40];

// let result =[...new Set(numbers)];

// console.log(result);

// let fruits1 = ["Apple", "Mango"];

// let fruits2 = ["Banana", "Orange"];

// let result = [...fruits1,...fruits2];
// console.log(result);

// let fruits = ["Apple", "Mango"];

// let result = [...fruits,"Banana", "Orange"]

// console.log(result);

// let fruits = ["Apple", "Mango", "Banana"];

// let result =[...fruits];
// console.log(result);

// let numbers = [5, 10, 5, 20, 10, 30, 20];

// let newArry = [...new Set(numbers)];

// console.log(newArry);

// let user = {
//     name: "Akash",
//     age: 24
// };

// let result = {
//     ...user,
//       city: "Bogura"
    
// };

// console.log(result);

// let user = {
//     name: "Akash",
//     age: 24,
//     city: "Bogura"
// };

// let result = {
//     ...user,
//     age : 25
// };
// console.log(result);

// let user = {
//     name: "Akash",
//     age: 24,
//     city: "Bogura"
// };

// let result ={
//     ...user,
//     profession : "Full Stack Developer",

//     age: 25
// };
// console.log(result);

// function myFruits (...item){
//      console.log(item);
     
// };

// myFruits("Apple", "Mango", "Orange");

// function total (...number){

//   let result = number.reduce((total,item)=>{
//       return item + total;
//     },0);
//     console.log(result);
    
// };
// total(10, 20, 30, 40);

// function multiply (...number){
//   let result = number.reduce((total,item) =>{
//       return total * item;
//   },1);
//   console.log(result);
  
// };

// multiply(5, 2, 3);

// function getSmall (...number){
//    let result = number.reduce((total,item) =>{
//        if(item < 10 ){
//         return [...total,item] ;
//        }else{
//         return total;
//        };
       
//    },[])

//    console.log(result);
   
// };
// getSmall(5, 15, 8, 25, 3, 30);

let info = ["Akash", "JavaScript", "React", "Node.js"];

 let [fast, ...skills] = info;

console.log(fast);
console.log(skills);