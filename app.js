function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const arrow = document.getElementById('arrow');


  let toDos= [];
  let toDoId = 1;

  /*
  We'll pass in the event as an argument to the event handler,
  and then call the preventDefault() method on it within the
  function.
  */
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //Get the text from the input and assign it to a variable, title.
    let title = newToDoText.value;

    let toDoObj = {
      name: title,
      id: toDoId
    }

    toDoId++;
    toDos.push(toDoObj);

    console.log(toDos);



    //create a new input
    let checkbox = document.createElement('input');

    //create a new li
    let newLi = document.createElement('li');

    //make delete button
    let deleteBtn = document.createElement('button');

    //assign name to delete button
    deleteBtn.textContent = "Delete";

    //add event listener for delete button
    deleteBtn.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;

      toDoList.removeChild(this.parentElement);

      //foreach item, run this function
      toDos.forEach(function(currentToDo, index){
        // console.log(currentToDo,index);
        // console.log(this);

        if(currentToDo === buttonLiText){
          //remove from array
          //splice chooses location and how many.
          toDos.splice(index, 1);
        }
        console.log(toDos);
      })
    })

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete button
    newLi.appendChild(deleteBtn);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
}









//pass an anonymous function that calls a JavaScript alert():
/*
We'll create our app in a function called onReady,
and call that function within the event handler.
*/
window.onload = function() {
  onReady();
}
