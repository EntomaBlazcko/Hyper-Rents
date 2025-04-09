// script.js
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
  
    // Get the current hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Ensure the hours, minutes, and seconds are valid (not NaN)
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      return; // Return early if time is not valid
    }
  
    // Format hours, minutes, and seconds with leading zeros (e.g. 09:05:09)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // Format the time in HH:MM:SS
    let currentTime = `${hours}:${minutes}:${seconds}`;
  
    // Set the current time to the time element
    timeElement.textContent = currentTime;
  }
  
  // Ensure that the time is updated every second, and also adjust for page reloads or first load
  document.addEventListener('DOMContentLoaded', function() {
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to set the time immediately when the page loads
  });
  