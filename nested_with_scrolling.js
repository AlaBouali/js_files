const windowWidth = 1; // Set the width of the window
const windowHeight = 1; // Set the height of the window
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const windowLeft = screenWidth - windowWidth;
const windowTop = screenHeight - windowHeight;
const time_to_wait_before_closing_new_window = 5;

function receiveSumFromChild(sum) {
    alert(`The sum calculated in the child window is: ${sum}`);
	
}

function trigger_pop_up(){
  var newWindow = window.open('about:blank', '_blank',`width=${windowWidth},height=${windowHeight},left=${windowLeft},top=${windowTop},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no`);
  newWindow.document.write(`<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>`);
  var script_tag = document.createElement("script");
  script_tag.src='http://127.0.0.1:5000/static/nested_with_scrolling.js';
  newWindow.document.body.appendChild(script_tag);
}

window.addEventListener('scroll', function(event) {
  trigger_pop_up();
});

