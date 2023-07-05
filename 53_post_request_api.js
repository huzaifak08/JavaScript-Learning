// Post request using fetch():

let options = { // Object

    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({ // This Will convert everything to string.
        title: 'Huzaifa',
        body: 'Khan',
        userId: 8,
    }),

}

fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((response) => {
        return response.json();
    }).then((value) => {
        console.log(value);
    })

// Now using async/await: async/await always return a promise;

const createTodo = async () => {

    let options = { // Object
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ // This Will convert everything to string.
            title: 'Huzaifa',
            body: 'Khan',
            userId: 8,
        }),
    }
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let response = await p.json();
    return response;

}

const mainFunc = async () => {
    let todo = await createTodo();
    console.log(todo);
}

mainFunc();

// Parse your todo:

const createTodo1 = async (todo) => {

    let options = { // Object
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let response = await p.json();
    return response;

}

const mainFunc1 = async () => {

    const mytodo = {
        title: 'Huzaifa',
        body: 'Khan',
        userId: 8,
    }

    let todo = await createTodo1(mytodo);
    console.log(todo);
}

mainFunc1();

// Post and Get both:

const createTodo2 = async (todo) => {

    let options = { // Object
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo), // This Will convert everything to string.
    }
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let response = await p.json();
    return response;

}

const getTodo = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let r = await response.json();
    return r;
}

const mainFunc2 = async () => {

    const mytodo = {
        title: 'Huzaifa',
        body: 'Khan',
        userId: 8,
    }

    // Post:
    let todo = await createTodo2(mytodo);
    console.log(todo);

    // Get:
    console.log(await getTodo(5));
}

mainFunc2();