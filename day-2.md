# Intro to JavaScript

- JavaScript can be used to add advanced behaviour to our pages.

## Writing JavaScript

- We add our script to our page using a `<script>` element.
- Javascript is executed from top to bottom.
- You can include comments in JavaScript using `/*Your comment*/`
or `//Your comment` for single-line comments.

## Variables

- `var name;`: this is a _variable_.
- A variable is like a 'box' for storing a value:

	```
	var name = "Nick Malecki";
	name = "Aaron Takizad";
	name = 76;
	```
- We use the `=` sign to 'assign' a variable a value. We can then use
that value later in our script.
- We can output text to the console using `console.log('hello!');`.
- Operations on variables:
  - `+`: adds two variables together.
  - `-`: subtracts two variables.
  - `=`: assigns a variable a value.
  - `*`: multiplies two variables.
  - `/`: divides two variables.
  - E.G. 
  
  ```
  var foo = 15;
  var bar = 8;
  var baz = foo + bar; //23
  ```

## Functions

- Functions are essentially sequences of instructions that you can 'call'
to execute.
- Functions are, in essence, a type of variable.
- E.G.

```
function hello(){
	console.log('Hello!');
}
```

- Functions can be 'called', or executed like so:

```
hello(); //Prints 'Hello!'
```

- Functions may accept 'parameters' - extra information that we give the
function:

```
function hello(var name){
	console.log("Hello, " + name);
}

hello("Nick");//Prints 'Hello, Nick'
```

- Functions can also _return_ data:

```
function add(var a, var b){
	return a + b;
}

console.log("My favourite number is " + add(2, 3));//Prints 5
```

- Importantly, we can assign functions to variables.

```
var functionVariable = function(){
	console.log("Foo!");
}

functionVariable();//Prints 'Foo!'

var hello = functionVariable;

hello();//Prints 'Foo!'
```

- Also, since functions are variables, we can use them as parameters to other functions:

```
function doSomething(var aParameter){
	aParameter();
}

doSomething(functionVariable);//Prints 'Foo!'
```

- This method of calling a function parameter from another function is known as using a *callback*.

## Scope

- We can use variables of the same name, so long as they are in different scopes.
- What is a scope?
- A scope is a frame of reference within our code - there are two main scopes in JavaScript: global
scope and function scope.
- An example of global scope:

```
var word = "lemons";

function iLike(){
	console.log("I like " + word);
}

iLike();//Prints 'lemons'
```

- An example of local scope:

```
function weLike(){
	var thing = "puppies";
	console.log("We like " + thing);//Prints 'we like puppies'
}

function youLike(){
	console.log("You like " + thing);//Error!
}
```

- The reason this produces an error is because the variable `var thing` is isolated to the
scope of the function `weLike`, and is thus, unavailable to `youLike`.

## Loops, Ifs, and Elses

- `if` statements allow a set of actions to be performed based on whether a condition is true.
We can follow an `if` by an `else` to execute a set of actions when the condition is not true.
	- E.G.
	
	```
	var hello = 7;
	if(hello > 2){
		console.log("Bigger than 2.");
	}
	else {
		console.log("Smaller than 2.");
	}
	//Prints 'Bigger than 2.'
	```
- Loops allow us to perform a set of actions multiple times, based on some condition.
- `while` loops:
  - Allow us to perform some instructions _while_ a condition is true, for instance:
  
  ```
  var counter = 0;
  while (counter != 10){
	  console.log(counter);
	  counter = counter + 1;
  }
  //Prints 0 1 2 3 4 5 6 7 8 9.
  ```
- `for` loops:
  - Allow us to perform some instructions a for set number of times, for instance:
  
  ```
  for(var counter = 0; counter != 10; counter = counter + 1){
	  console.log(counter);
  }
  //Prints 0 1 2 3 4 5 6 7 8 9.
  ```

## Objects and Arrays

- What if we wanted to store multiple things under one variable name?
- We could write:

```
var hello1 = "My";
var hello2 = "name";
var hello3 = "is";
var hello4 = "Mitch.";
```

- But why should we? Enter the array.

```
var myArray = ["My", "name", "is", "Mitch."];

myArray[0]; //"My"
myArray[1]; //"name"
myArray[2]; //"is"
myArray[3]; //"Mitch."

myArray[3] = "Penny";//Sets myArray[2] to "Penny".
```

- Objects are similar in that they allow us to group multiple pieces of data under one
name:

```
var myObject = {
	name: "Nick",
	hair: "brown",
	age: 97
}

myObject.name; //"Nick"
myObject.hair; //"brown"
myObject.age; //97

myObject.name = "Ben";//Sets myObject.name to "Ben".
```

- Since arrays and objects are certain kinds of variables, _we can pass them to functions
as parameters._

## Advanced Examples

- Hopefully everything made sense there.
- Putting everything together:

```
function hello(){
	console.log("Hello!");
}

var myObject = {
	myFunction: hello;
}

myObject.myFunction();
```

- Notice we refer to the function inside myObject by it's 'key name', `myFunction`.
