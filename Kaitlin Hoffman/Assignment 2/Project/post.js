document.getElementById("post").addEventListener('submit', function(event)
{
    event.preventDefault();

    const task = document.getElementById("add").value;

    const user = {
        task: task
    };

    console.log("Task added: ", user);
});