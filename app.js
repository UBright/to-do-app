function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // get the text
  let title = newToDoText.value;

  // create a new li
   let newLi = document.createElement('li'); //<li></li>

   // create a new input
   let checkbox = document.createElement('input');

   //add delete button
   let deleteBtn = document.createElement('button');
          deleteBtn.innerHTML = '<span>Delete</span>';

   // set the input's type to checkbox
   checkbox.type = "checkbox";
   // set the title
   newLi.textContent = title;
   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   newLi. appendChild(deleteBtn);
   // attach the li to the ul
   toDoList.appendChild(newLi);
   //empty the input
   newToDoText.value = '';

   //listening for deleteBtn to be clicked and removing the item
   deleteBtn.addEventListener('click', function(){
     newLi.parentNode.removeChild(newLi);
});

}

window.onload = function() {
  onReady();
};
