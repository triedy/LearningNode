/**
 * Created by triedy on 9/10/14.
 */

// first get the arguments into an array
var arguments = [];

for (index = 2; index < process.argv.length; index++) {
    arguments[index - 2] = process.argv[index];
}

var sum = 0;

for (index=0; index < arguments.length; index++){
    sum += Number(arguments[index]);
}

console.log(sum);


/*
var result = 0

for (var i = 2; i < process.argv.length; i++)
    result += Number(process.argv[i])

console.log(result)*/
