//Program explicitly declare variables
let var1="A man";        //explicit declaration and assignment
let var2=" with a fan."; //explicit declaration and assignment
let var3=var1 + var2;    //explicit declaration, assignment and further operation
console.log(var3);


// we can also explicitly declare variables in a single line then assign them values in different lines
let var4, var5, var6;  //declared multiple variable in a single line
var4="I";              //assigning value
var5=" have a car.";   //assigning value
var6=var4 + var5;      //assignement and operation 
console.log(var6);


// we can also use variables without declaring them i.e. implicit declaration(not recommended)
var7="This is";       //var7 declaration(implicit) then assignment
var8=" a computer.";  //var8 declaration(implicit) then assignment
var9=var7 + var8;     //var9 declaration(implicit) then concatenating strings or operating variables
console.log(var9);


/* We can also use const and var to declare variables but var isn't used in modern code since it is global scoped and its effect isn't limited to specific part of the document and can introduce bugs to the code*/


// Declaring variables using let
{
    let num1 = 7;                //declared num1
    let num2;                    //declared num2
    num2 = num1;                 //assigned num1 to num2
}
console.log(num2); // O/P shows num2 isn't defined because it is defined using let which can be scoped to prevent its effect outside the scope.

// But if we do declared a variable implicitly then...
{
    let variable1 = 16;
    variable2 = variable1;        // variable2 is implicitly declared and becomes global scoped and behaves as if declared using the var keyword.
}
console.log(variable2);           // o/p shows 16 because variable2 since implicitly declared has global scope and has reach throughout the document.
