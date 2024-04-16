// Function to move the dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Function to move the dodger right
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    const gameFieldWidth = window.innerWidth;
    const dodgerWidth = dodger.offsetWidth;
  
    if (left < gameFieldWidth - dodgerWidth) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  