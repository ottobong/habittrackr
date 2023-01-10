const habitForm = document.querySelector('#habit-form');
const habitList = document.querySelector('#habit-list');

habitForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get habit name from form
  const habitName = habitForm.habitName.value.trim();

  // Create habit element
  const habitElement = document.createElement('li');
  habit

    // Add habit name as a span element
  const habitNameElement = document.createElement('span');
  habitNameElement.textContent = habitName;
  habitElement.appendChild(habitNameElement);

  // Create complete button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete');
  habitElement.appendChild(completeButton);

  // Create incomplete button
  const incompleteButton = document.createElement('button');
  incompleteButton.textContent = 'Incomplete';
  incompleteButton.classList.add('incomplete');
  habitElement.appendChild(incompleteButton);

  // Append habit element to habit list
  habitList.appendChild(habitElement);

  // Clear form
  habitForm.reset();
});

habitList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    const span = li.firstElementChild;
    if (e.target.classList.contains('complete')) {
      span.classList.add('complete');
      span.classList.remove('incomplete');
    } else if (e.target.classList.contains('incomplete')) {
      span.classList.add('incomplete');
      span.classList.remove('complete');
    }
  }
});
