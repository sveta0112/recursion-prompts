/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {// n = 5,n = 4,n = 3,n = 2,n = 1
	if(n === 0 ){ 
		return 1;
	}
	if(n < 0){
		return null;
	}
   return n * factorial(n - 1);//5 * fact(4),4 * fact(3), 3 * fact(2), 2 * fact(1), 1 * fact(0)
   //return value 1 * 1 * 2 * 3 * 4 * 5 = 120

};
//console.log(factorial(5));

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {//array = [1,2,3,4,5,6],array = [2,3,4,5,6],array = [3,4,5,6],array = [4,5,6],array = [5,6],array = [6] array = []
   if(array.length === 0){//[] === 0
   	return 0;//return value 0
   }
   return array[0] + sum(array.slice(1));//1 + sum([2,3,4,5,6]), 2 + sum([3,4,5,6]), 3 + sum([4,5,6]), 4 + sum([5,6]),5 + sum([6]), 6 + sum([])
   //Return value 0 + 6 + 5 + 4 + 3 + 2 + 1 = Return value 21
};
//console.log(sum([1,2,3,4,5,6]));

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	var sum = 0;
	for(var i = 0; i < array.length; i++){// i = 0 = 1, i = 1 = [2,3]
    //if element of nested array is typeof array
		if(Array.isArray(array[i])){//[2,3] 
			sum += arraySum(array[i]);//use for loop i = 0 = 2, i = 1 = 3
		}else{
			sum += array[i];//  i = 0: (0 + 1 = 1) // i = 1: 0 + 2 = 2, 2 + 3 = 5
		}
	}
     return sum;
};
//console.log(arraySum([1,[2,3],[[4]],5]));


// 4. Check if a number is even.
var isEven = function(n) {// n = 6, n = 4, n = 2, n = 0
	if(n === 0){//0 === 0
      return true;// return value
	}else if(n === 1){
      return false;
	}else if(n < 1){
		return isEven(Math.abs(-n));
	}else{
		return isEven(n - 2);//isEven(4), isEven(2), isEven(0)
	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {//n = 10, n = 9, n = 8, n = 7,...,
	                        //n = - 5,n = - 4,n = - 3,n = - 2, n = -1, n = 0
	if(n === 0){// 0 === 0
		return 0;//return value
	}
	if(n < 0){ //-5, -4, -3, -2,-1
      return (n + 1) + sumBelow(n + 1);//(-4) + sumBelow(-4), (-3) + sumBelow(-3), (-2) + sumBelow(-2),(-1)+sumBelow(-1),(0) + sumBelow(0)
      //return value 0 + 0 + (-1) + (-2) + (-3) + (-4) = 0 + 0 - 1 - 2 - 3 - 4 =  return value - 10
	}else{
	  return (n - 1) + sumBelow(n - 1);//(9) + sumBelow(9), (8) + sumBelow(8), (7) + sumBelow(7), (6) + sumBelow(6)..,(0) + sumBelow(0)
	  //return value 0 + 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = return value 45
	}
	
	
};


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {//x = 2, y = 9 // x = 2, y = 8..x = 2, y = 4
	if(y - x === 1 || y - x === 0){
		return [];
	}  
	if(x > y){
		if(x - y === 1 || y - x === 0){
			return [];
		}
		var arr = [x - 1].concat(range(x - 1, y));
		return arr;
	}
	var arr = [x + 1].concat(range(x + 1, y));
	return arr;
};
//console.log(range(2,9));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {//base = 4, exp = -2,base = 4, exp = 2,base = 4, exp = 1,base = 4,exp = 0
  if(exp === 0){//0 === 0
  	return 1;//return value
  }
  if(exp < 0){//-2 < 0
  	return (1/(exponent(base, -exp)));//1/exp(4,2)
  }else{
  	return base * exponent(base, (exp -1));//4 * exp(4,1), 4 * exp(4,0)
  }
};
//console.log(exponent(4,-2));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {//n = 16, n = 8, n = 4, n = 2, n = 1
	if(n === 1){//1 === 1
		return true;//return value true
	}
	if(n < 1){
		return false;
	}
	return powerOfTwo(n / 2);//powerofTwo = 16 / 2, powerOfTwo(8 / 2), powerOfTwo = (4 / 2), powerOfTwo( 2 / 2)

};

// 9. Write a function that reverses a string.
var reverse = function(string) {//string = "sveta", string = "veta", sveta = "eta", string = "ta", string = "a"; string = ""
	if(string.length === 0){//"" === 0
		return string;//return ""
	}
	return reverse(string.substr(1)) + string.charAt(0);
  //reverse(str.substr(veta))+str.charAt(s),reverse(str.substr(eta))+str.charAt(v),reverse(str.substr(ta))+str.charAt(e),reverse(str.substr(a))+str.charAt(t),..
  //RV:"" + "a"+"t"+"e"+"v"+"s"
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {//string = racecar, string = aceca, string = cec, string = e
  var str = string.toLowerCase();
  if(str.length === 0 || str.length === 1){//1 === 1
  	return true;//return value true
  }	
  if(str[0] === str[str.length -1]){//r === r ,a === a, c === c
  	return palindrome(str.slice(1,str.length -1));//palindrome(aceca), palindrome(cec), palindrome(e)
  }
  return false;

};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(y === 0){      
	  return NaN;   
	}   
	if (x < 0 && y < 0 && y < x){    
	  return x;   
	}   
	if(x < 0 && y < 0 && x < y){   
	  y = -y;     
	  x = -x;     
	  return - modulo(x - y, y);  
    }  
    if (x < 0 && y > 0){     
     	x = -x;     
     	return - modulo(x + y, y); 
    }   
    if(x < y){    
     return x ;
    }   
    return modulo(x - y, y); 
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
   if(x === 0 || y === 0){
   	 return 0;
   }else if(y < 0){
   	 return -x + multiply(x, y + 1);
   }else{
   	 return x + multiply(x, y - 1);
   }
};


// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	if(y === 0){
		return NaN;
	}
	if(y === 1){
		return x;
	}
	if(x === y){
		return 1;
	}
	var isNegative = false;
	if(x < 0){
	    isNegative = true;
	     x = -x;	
	}
	if(y < 0){
		isNegative = true;
		y = -y;
	}
	if(x < y){
		return 0;
	}else{
		if(isNegative){
			return 1 - divide(x - y, y);
			
		}else{
			return 1 + divide(x - y, y);
		}
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm


var gcd = function(x, y) {// x = 6, y = 12; x = 6, y = 6
	if(x === 0 || y === 0){
		return 0;
	}
	if(x < 0 || y < 0){
		return null;
	}
	if(x === y){//(6 === 6)
		return x;//return value is 6 is gcd
	}
	if(x < y){//(6 < 12) true
		return gcd(x, y - x);//gcd(6, 6)
	}else{
    return gcd(x - y, y);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {//str1 = 'house', str2 = 'houses'
	if(str1.length === 0 && str2.length === 0){
		return true;
	}else if(str1[0] === str2[0]){//'h' === 'h' true,'o' === 'o' true,'u' === 'u' true,'s' === 's'true,'e' === 'e'true,'' === 's'false
        return compareStr(str1.slice(1),str2.slice(1));//compareStr('ouse','ouses'),('use','uses'),('se','ses'),('e','es'),
	}
	return false;//return value false
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.


var createArray = function(str) {
   var arr = [];
   if(str.length === 0){//'' === 0 true
   	 return arr;//return []
   }
   arr.push(str[0]);//['s'],['v'],['e'],['t'],['a']
   arr = arr.concat(createArray(str.slice(1)));//arr.concat(createArray('veta')),('eta'),('ta'),('a'),('');
   
   return arr;//['a'],['t','a'],['e','t','a'],['v','e','t','a'],['s','v','e','t','a']
};
//console.log(createArray('sveta'));

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var reversed = [];
  if(array.length === 0){//[] === 0 true
  	return reversed;//return []
  }
  var popped = array.pop();
  reversed.push(popped);//['a'],['t'],['e'],['v'],['s']
  reversed = reversed.concat(reverseArr(array));//reversed.concat(reverseArr(['s','v','e','t'])),(['s','v','e']),(['s','v',]),(['s']),([]);
  return reversed;//['s'],['v','s'],['e','v','s'],['t','e','v','s'],['a','t','e','v','s']
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var array = [];
	if(length === 0){//0 === 0 true
		return array;//[]
	}
	array.push(value);//[7],[7],[7]
	return array.concat(buildList(value, length - 1));//buildList(7,2),buildList(7,1),buildList(7,0);
	//array.concat([7],[7,7],[7,7,7]);
};


// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

var fizzBuzz = function(n) {//n = 5, n = 4, n = 3, n = 2, n = 1, n = 0
  if (n === 0) { //0 === 0
  	return []; //return value []
  }
  var str = '';
  if (n % 3 === 0){ 
  	str += 'Fizz';// str = 'Fizz' 
  }
  if (n % 5 === 0) {// 5 % 5 === 0
    str += 'Buzz'; // str = 'Buzz'
  }
  if (n % 3 !== 0 && n % 5 !== 0){
    str += n; // str = '4', str = '2', str = '1'
  }
  return fizzBuzz(n - 1).concat([str]);//fizzBuzz(4).concat([str]),fizzBuzz(3).concat([str]),fizzBuzz(2).concat([str]),fizzBuzz(1).concat([str]), fizzBuzz(0).concat([str])
  //RV: []-> ['1']->['1','2']->['1','2','Fizz']->['1','2','Fizz','4']->['1','2','Fizz','4','Buzz']
};


// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {// array = [2,'banana',4,4,1,'banana'], value = 'banana'
                                              // array = ['banana',4,4,1,'banana'], value = 'banana'
                                              // array = [4,4,1,'banana'], value = 'banana'
                                              // array = [4,1,'banana'], value = 'banana'
                                              // array = [1,'banana'], value = 'banana'
                                              // array = ['banana'], value = 'banana'
  var counter = 0;                           
	if(array.length === 0){
		return 0;
	}
  if(array[0] === value){//'banana' === 'banana' true, 'banana' === 'banana'
    counter++;// counter = 1, counter = 2
  }
  counter += countOccurrence(array.slice(1),value);//0 + countOccurence(['banana',4,4,1,'banana'], 'banana')
                                                   //1 + countOccurence([4,4,1,'banana'], 'banana')
                                                   //1 + countOccurence([4,1,'banana'], 'banana')
                                                   //1 + countOccurence([1,'banana'], 'banana')
                                                   //1 + countOccurence(['banana'], 'banana')
  return counter;//return 2
	
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {//array = [2,4,6], array = [4,6], array = [6]
   if(array.length === 1){//[6].length === 1 true
   	return callback(array);//return callback([6])
   }
   return [callback(array[0])].concat(rMap(array.slice(1),callback));//[callback(4)].concat(rMap[4,6]),[callback(8)].concat(rMap[6])..
   //[6],[4,6],[2,4,6]-->[4,8,12]
};
var timesTwo = function(el){//el = 2,el = 4,el = [6]
   return el * 2;//2 * 2, 4 * 2, 6 * 2
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var num = 0;
    for (var prop in obj) {
        if (prop === key) {
            num++;
        }
        var value = obj[prop];
        if (typeof value === 'object') {
            num += countKeysInObj(value, key);
        }
    }
    return num;
   
};
var obj = {'e':{'x':'y'},
           't':{
           	  'r':{'e':'r'},
           	  'p':{'y':'r'}
           	},
           	'y':'e'
           };
//console.log(countKeysInObj(obj,'r'));

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var num = 0;
    for (var prop in obj) {
        if (obj[prop] === value) {
            num++;
        }
        var values = obj[prop];
        if (typeof values === 'object') {
            num += countValuesInObj(values, value); 
        }
    }
    return num;
};
//console.log(countValuesInObj(obj,'r'));

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {//obj = obj1, oldKey = 'b',newKey = 'new'
	for (var key in obj) {
    if (typeof obj[key] === 'object') {//b: {b: 2, bb: {b: 3, bb: {b: 2}}} true
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      var value = obj[key];
      delete obj[key];
      obj[newKey] = value;
    }
  }

  return obj;//output: new: { bb: { bb: [Object], new: 3 }, new: 2 } }
};
var obj1 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};


// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {//n = 5, n = 4, n = 3, n = 2, n = 1
  if (n <= 0) { 
  	return null; 
  }
  if (n === 1) { //1 === 1
  	return [0, 1];//rv [0,1]
  }
  var prevValue = fibonacci(n - 1);//prevValue = [0,1], [0,1,1],[0,1,1,2],[0,1,1,2,3],[0,1,1,2,3,5]
  //fib(5-1),fib(4-1),fib(3-1),fib(2-1)
  
  var fibbonachi = prevValue[prevValue.length - 1] + prevValue[prevValue.length - 2];//[2](1 + 0),[3](1 + 1),[4](2 + 1),[5](3 + 2)
  return prevValue.concat([fibbonachi]);
};


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {//n = 3(n = 2 + n = 1)
  if (n < 0) { 
  	return null; 
  }
  if (n === 0 || n === 1) { //1 === 1
  	return n; //RV 1
  }
  return nthFibo(n - 1) + nthFibo(n - 2);//(2)+ (1),(1) // 1 + 0 + 1 --> f(3):2
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
   var arr = [];
   if(array.length === 0){//[] === 0 true
   	return arr;//[],['RECURSION'],['LEARNING'],['AM'],['I']
   }
   arr.push(array[0].toUpperCase());//['I'], ['AM'],['LEARNING'],['RECURSION']
   return arr.concat(capitalizeWords(array.slice(1)));//(['am','learning','recursion']),(['learning','recursion']),(['recursion']),([])
   //RETURN: ['I','AM','LEARNING','RECURSION']
};
var words = ['i', 'am', 'learning', 'recursion'];


// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {//array = ['poop','cat'], array = ['cat'], array = []
  var arr = [];
    if(array.length === 0 ) { //[].length === 0
    	return arr; //[]
    }
    arr.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));//['Poop'],['Cat']
    arr = arr.concat(capitalizeFirst(array.slice(1)));//arr.concat(capitalizeFirst(['cat'])),arr.concat(capitalizeFirst([])),
    //RV:[]->['Cat']->['Poop','Cat']
    return arr;//['Poop','Cat']
};


// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var key in obj) {//iterate through object
    if (typeof obj[key] === 'object') {//if value of object is type of object
      sum += nestedEvenSum(obj[key]);//start recursion on this value,loop through it 
    }
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {//if value of object is typeof number and divisible by 2 with no remainder
      sum += obj[key];//sum + value
    }
  }

  return sum;//total sum return
};
var obj1 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};


// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	var flat = [];
    for (var i = 0; i < array.length; i++) {//iterate through nested array
        if (array[i] instanceof Array) {//if elemnet of nested array is also type of array
        	flat = flat.concat(flatten(array[i]));//start recursion on tjis element, loop through it
        } else {//otherwise
            flat.push(array[i]);//push to flar array
        }
    }
    return flat;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {//str='potato',obj = {}; str = 'otato',obj = {p:1}...,str=''..
  var result = Array.from(arguments)[1] || {};//result = {}
    if(str.length === 0) {//'' === 0
        return result;
    }
    if(!result[str[0]]) {
        result[str[0]] = 1;//result = {p: 1},{p:1,o:1}...{p:1,o:2,t:2,a:1}
    } else {
      result[str[0]]++;
    }
    return letterTally(str.slice(1), result);//letterTally('otato',result)...letterTally('',result)
};


// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {//[1,2,2,3,4,4,5,5,5],[2,2,3,4,4,5,5,5],[2,3,4,4,5,5,5]..
	var result = [];
	if(list.length === 0){
		return result;
	}

	if(list[0] !== list[1]){//1 !== 2, 2 !== 2, 2 !== 3..
		result.push(list[0]);//[1],[2]...
	}
	return result.concat(compress(list.slice(1)));//compress([2,2,3,4,4,5,5,5]),compress([2,3,4,4,5,5,5])..
	
};


// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {// arr = [[],[3],[7]], aug = 5
                                            // arr = [[3],[7]], aug = 5
                                            // arr = [[7]], aug = 5
                                            // arr = [], aug = 5
  if (array.length === 0){ //[].length === 0
    return array; //[]
  }

  var firstEl = array[0];//[]; [3]; [7]
  var rest = array.slice(1);//[[3],[7]]; [[7]]; []

  var result = augmentElements(rest, aug);//augElements([[3],[7]],5); augElements([[7]],5);augElements([],5);

  return [firstEl.concat([aug])].concat(result);
  //[[7].concat([5])->[7,5]].concat([[7,5]])
  //[[3].concat([5])->[3,5]].concat([[3,5],[7,5]])
  //[[].concat([5])->[5]].concat([[5],[3,5],[7,5]])

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if (array.length === 0) { 
		return array;
	}
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
        return minimizeZeroes(array.slice(1));
    } else {
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};


// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {//[-2,-7,8,3,-1,4],[8,3,-1,4],[-1,4],[]
   if (array.length === 0) { //[].length === 0
      return array; //[]
   }
   if(array[0] < 0) { //-2 < 0, -1 < 0
      array[0] = -array[0];//[2,-7,8,3,-1,4],[1,4]
   }
   if(array[1] > 0) { //3 > 0 ,4 > 0
      array[1] = -array[1]; //[8,-3,-1,4],[1,-4]
   }
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));//[2,-7.concat(alternateSign([8,3,-1,4]))]
                                                                    //[8,-3.concat(alternateSign([-1,4]))]
                                                                    //[1,-4.concat(alternateSign([])]
  //RV:[]->[1,-4]->[8,-3,1,-4] ->[2,-7,8,-3,1,-4]                                                                 
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
