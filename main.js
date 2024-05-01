// var index = 0;

// show_image(index);

// function show_image(i) {
//     index += i;

//     var images = document.getElementsByClassName("image");
//     var dots = document.getElementsByClassName("dot");

//     for (i = 0; i < images.length; i++)
//     {
//         images[i].style.display = "none";
//     }

//     for (i = 0; i < dots.length; i++)
//     {
//         dots[i].className = dots[i].className.replace("active", "");
//     }

//     if (index  > images.length - 1) 
//     index = 0;

//     if (index < 0) 
//     index = images.length - 1;

//     images[index].style.display = "block";
//     dots[index].className += " active";
// }

// window.addEventListener("onload", show_image(index));

// const userInput = document.getElementById("userInput");

// var expression = '';

// function press(num){
//     expression += num;
//     userInput.value = expression;
// }

// function equal(){
//     userInput.value = eval(expression);
//     expression = '';
// }

// function erase(){
//     expression = '';
//     userInput.value = expression;
// }


// var today = new Date();
// var cmas = new Date(today.getFullYear(), 11, 25);

// if (today.getMonth() == 11 && today.getDate() > 25){
//     cmas.setFullYear(cmas.getFullYear() + 1);
// }

// var one_day = 1000 * 60 * 60 * 24;

// console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + ' days left before Christmas!');

// var str = 'Nguyen Le Quang Hung Le Hung HUng';
// console.log(str.replace(/Hung/g, 'hihihi'));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.trim());
// var languages = 'java, php, ruby';
// console.log(languages.split(''));
// var str2 = 'Son Dang';
// console.log(str2[1]);

// var str = '     Vinland Saga is a really great anime     ';
// console.log(str.indexOf('a', 10));
// console.log(str.replace('great', 'beautiful'));
// console.log(str.replace(/a/g, 'i'));
// console.log(str.trim());
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.length);
// console.log(str.split(' '));
// console.log(str.split(''));
// console.log(str[14]);

var myArray = [
    'java',
    'php',
    'ruby'
]

console.log(myArray.join(' - '));
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.push('ruby'));
console.log(myArray);
console.log(myArray.shift());
console.log(myArray.unshift('java'));
console.log(myArray.unshift('dart'));
console.log(myArray);
console.log(myArray.splice(1, 3, 'C++'));
console.log(myArray);
console.log(myArray.concat('hah', 'haahahah'));
console.log(myArray);
console.log(myArray.slice(0, 2));

