setInterval(() => {
    console.log("Hello World");
},500)

console.log("I will run first");

// setInterval is also async.
// process stays alive unless CONTROL + C is not pressed or unexpected error