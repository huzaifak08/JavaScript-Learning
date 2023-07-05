// Fetch API: (Get Request) has its own limit.

// AJAX: (Asynchronous Javascript and XML) used to fetch xml data but now we use it for JSON data.

// p is promise here;
let p = fetch("https://goweather.herokuapp.com/weather/Islamabad");

p.then((response) => { // This will return status and ok.

    console.log(response.status); // status code
    console.log(response.ok); // Boolean value
    return response.json(); // its your choice to use json or text but do not use both at same time.

}).then((value) => { // This will return the value;
    console.log(value);
});

