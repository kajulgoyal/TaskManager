function getDate() {
    var today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear(); 
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("due_date").value = today;
  }
  window.onload = function() {
    getDate();
  };


$(function () {
    let taskTitle = $('#title')
    let taskDescription = $('#description')
    let taskDueDate = $('#due_date')
    let taskPriority = $('#priority')
    $('#add').click(function () {
        addTask(
            taskTitle.val(),
            taskDescription.val(),
            taskDueDate.val(),
            taskPriority.val(),
            function () {
            })
    })
})