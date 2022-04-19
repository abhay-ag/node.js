// we request data and get a response from server
// done using http protocol hence called http messages

// accomplished using express
// servers job is to make a resource always available.

/*
    General structure for http messages:
        1. Start line       ==> method ,url
        2. Header           ==> key value pair (optional)
        3. blank line for metainfo
        4. body             ==> optional if no resource accessed
*/

// HTTP Method
/*
    get, post, put, delete

    1. GET => Read Data
    2. POST => Send Data
*/  

// response message

/*
First line
    1. http -- version
    2. status code
    3. status text

Header ==> info about our response // mainly JSON data
Body
*/