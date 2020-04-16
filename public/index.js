$(document).ready(function () {
  $("button").click(function () {
    $note = $(".note")
    $note.slideToggle(500,function(){
      $("button").text("Hide")
    })
      });
    });
$(function () {
  let taskList = $('#taskList')
  fetchTasks(function (tasks) {
    taskList.empty()
    for (task of tasks) {
      taskList.append(createTaskCard(task))
    }
  })

})  
