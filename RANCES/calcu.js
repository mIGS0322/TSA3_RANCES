function appendToScreen(value) {
    document.getElementById('screen').value += value;
  }
  
  function backspace() {
    let screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenValue.slice(0, -1);
  }
  
  function clearScreen() {
    document.getElementById('screen').value = '';
  }
  
  function calculate() {
    try {
      document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (error) {
      document.getElementById('screen').value = 'Error';
    }
  }
  function del() {
    let screenValue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenValue.slice(0, -1);
  }