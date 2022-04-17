// The event loop is what allow node.js to perform non-blocking I/O operations - despite the fact that JavaScript is single threaded - by offloading operations to the system kernel whenever possible.

/*
    What is single threaded?
    Ans. JS reads everything line by line , hence a time consuming task can hang up all the applications.
        1. setTimeout simply offloads the task.
*/