/*approaching UI as a function of state can make
our code easier to maintain and reuse.*/


function onReady(){

  //access the HTML form.
  const addToDoForm = document.getElementById('addToDoForm');

  //Our state is going to be an array of to-dos.
  let toDos = [];

  /*
  We'll create a function, renderTheUI() which will render
  the UI based on the current state. When the app first loads,
  we want to display the initial state, which will be an
  empty text input and button.
  Let's first add the call to renderTheUI() to onReady().

  Now, when the page loads, it will immediately render
  the initial UI, with the event listener listening
  for a submit event from the form.
  */
  function renderTheUI(){
    //access the <ul> in the HTML.
    const toDoList = document.getElementById('toDoList');
    //when i render the ui again, clear out the ul.
    toDoList.textContent = '';

    /*
    use the array method called forEach() which takes a
    function and applies that function to each item in
    the array. Using forEach is how we'll render each
    to-do as a li in the ul.
    */
    toDos.forEach(function(toDo){
      /*
      The function we pass to forEach() will need to do three things:
      Create the UI we need for each to-do (the li and checkbox).
      Assign the toDo's title text to the li.
      Update the DOM with the li and checkbox.
      */

      //create li and checkbox
      const newLi = document.createElement('li'); //<li></li>
      const checkbox = document.createElement('input'); //<input>
      checkbox.type = "checkbox"; //<input type-"checkbox"/>

      //add the toDo's title text to newLi.
      newLi.textContent = toDo.title; //<li>hello!</li>

      //update DOM
      toDoList.appendChild(newLi); //
      newLi.appendChild(checkbox);//<li>Hello <input type="checkbox"/></li>
    })
  }

  /*
  add a function called createNewToDo() which will
  update our array of to-dos. We'll call createNewToDo()
  with an event listener on our form.
  */
  function createNewToDo(){

    /*access the text input, so that we can get
    the text for the title of each to-do.*/
    const newToDoText = document.getElementById('newToDoText');
    //if newToDoText does not exist, get out.
    if(newToDoText.value){ return;}
    //add the new to-do to the toDos array using the push() method.
    toDos.push({
      //assign the value of the text input, newToDoText to the title key.
      title: newToDoText.value,
      // create another key called complete and initialize it to false.
      complete: false
    });

    //when we submit the to do, it empties.
    newToDoText.value = '';

    //call renderTheUI() every time the state changes
    renderTheUI();

  }
  //add event listener using submit event of the form element.
  addToDoForm.addEventListener('submit', event => {

    /*call preventDefault() on the submit event to
    prevent the page from reloading.*/
    event.preventDefault();

    //call createNewToDo() function we just created.
    createNewToDo();

  });

  //call renderTheUI() every time the state changes
  renderTheUI();

}

//set newLi to an empty string.
// newLi.textContent = '';


window.onload = function() {
  onReady();
}
