function fetchTasks (done) {
    $.get('/api/todos', function (data) {
        done(data)
    })
}

function addTask (title, description, due_date, priority, done) {
    $.post('/api/todos', {
        title : title,
        description : description,
        due_date : due_date,
        priority : priority,
    }, function() {
        done()
    })
}

function createTaskCard (task) {
    return $(`
    <li class="list-group-item list-group-item-info">
            <div class="col-8 card mx-2 p-4">
                <span><h5 class="task-title">${task.title}</h5><span>
                <div class="task-description">${task.description}</div>
                <div class="col-m p-7 mt-2">
                    <b>Due date : ${task.due_date}</b>
                    <b style="float : right;">Priority : ${task.priority}</b>
                </div>
            </div>
            <button class="btn btn-primary btn-customized m-2" id="btn">Show notes</button>
            <div class="note">
            <ul class="list-group">
                <li class="list-group-item ml-4 w-50"> Complete it with front-end </li>
                <li class="list-group-item ml-4 w-50"><input type="text" class="form-control" id="newNote" placeholder="Add new note"><button type="submit" class="btn btn-primary btn-customized mt-1">Add</button></li>
            </ul>
            </div>
        </li>`
        )
}