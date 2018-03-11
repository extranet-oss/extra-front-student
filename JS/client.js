const app = feathers();

// Register a simple todo service that return the name and a text
app.use('todos', {
    async get(name) {
        // Return an object in the form of { name, text }
        return {
            name,
            text: `You have to do ${name}`
        };
    }
});

// A function that gets and logs a todo from the service
async function logTodo(name) {
    // Get the service we registered above
    const service = app.service('todos');
    // Call the `get` method with a name
    const todo = await service.get(name);

    // Log the todo we got back
    console.log(todo);
}

logTodo('dishes');