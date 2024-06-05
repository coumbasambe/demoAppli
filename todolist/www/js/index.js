let selectedTask = null;

function ajouterTask() {
    const task = document.getElementById('task');
    const taskListInProgress = document.getElementById('taskListInProgress');
    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        taskListInProgress.appendChild(newItem);
        $(newItem).on('click', function() {
            if (selectedTask) {
                selectedTask.classList.remove('selected');
            }
            selectedTask = this;
            selectedTask.classList.add('selected');
        });
        $(newItem).on('swiperight', function(e) {
            $(this).toggleClass('done');
            if ($(this).hasClass('done')) {
                deplacerTask(this, taskListInProgress, taskList);
            } else {
                deplacerTask(this, taskList, taskListInProgress);
            }
        });
        $(newItem).on('swipeleft', function(e) {
            $(this).hide('slow', function() {
                $(this).remove();
            });
        });
        $(taskListInProgress).listview('refresh');
    }
    task.select();
}

function reinitialiserList() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const taskListInProgress = document.getElementById('taskListInProgress');
    task.value = '';
    taskList.innerHTML = '';
    taskListInProgress.innerHTML = '';
    task.focus();
}

function terminerTask() {
    const taskListInProgress = document.getElementById('taskListInProgress');
    if (selectedTask) {
        selectedTask.classList.toggle('done');
        if (selectedTask.classList.contains('done')) {
            deplacerTask(selectedTask, taskListInProgress, taskList);
        } else {
            deplacerTask(selectedTask, taskList, taskListInProgress);
        }
    }
}

function deplacerTask(task, listSource, listDestination) {
    listSource.removeChild(task);
    listDestination.appendChild(task);
    $(listSource).listview('refresh');
    $(listDestination).listview('refresh');
}

$(document).on("pagecreate", function() {
    $(document).on("swipeleft", "#taskList li", function() {
        $(this).remove();
    });

    $(document).ready(function() {
        $(document).on("swiperight", "#taskList li", function(event) {
            event.preventDefault();
            $(this).toggleClass("done");
            $(this).find('i').toggle();
        });
    });
});
