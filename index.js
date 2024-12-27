document.getElementById('viewProfile').addEventListener('click', function () {
    const dropdown = document.getElementById('dropdown');
    // Toggle display property
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block'; // Show dropdown
    } else {
        dropdown.style.display = 'none'; // Hide dropdown
    }
});
