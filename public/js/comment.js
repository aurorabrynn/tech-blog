const commentFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const content = document.querySelector('#commentContent').value.trim();

    if (content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#commentForm')
    .addEventListener('submit', commentFormHandler);