let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200; // Adjusted offset for better accuracy
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};
  // Function to copy text to clipboard
   function copyToClipboard(text) {
    const el = document.createElement('textarea'); // Create a textarea element
    el.value = text; // Set the value of the textarea to the specified text
    el.setAttribute('readonly', ''); // Make it read-only to prevent focus and move outside of view
    el.style.position = 'absolute';
    el.style.left = '-9999px'; // Move outside the screen to make it invisible

    document.body.appendChild(el); // Append the textarea element to the document
    el.select(); // Select the text inside the textarea
    document.execCommand('copy'); // Copy the selected text to the clipboard
    document.body.removeChild(el); // Remove the textarea element
  }

  // Event listener for the element click
  document.getElementById('copyText').addEventListener('click', function() {
    const textToCopy = '+92 1231231231'; // Replace this text with your desired text
    copyToClipboard(textToCopy); // Call the function to copy text to clipboard
    
    // Show the styled alert notification
    const alertDiv = document.createElement('div');
    alertDiv.textContent = 'Text has been copied to clipboard: ' + textToCopy;
    alertDiv.classList.add('custom-alert');
    document.body.appendChild(alertDiv);

    // Remove the alert after 3 seconds
    setTimeout(function() {
      alertDiv.remove();
    }, 3000);
  });
