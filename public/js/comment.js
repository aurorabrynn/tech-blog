const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#commentContent').value.trim();
    if (content) {
        const response = await fetch(`/api/comments/`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create comment');
        }
    }
};

/* const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#commentContent').value.trim();

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.location.replace(`/blog/${blog_id}/comments`);
            document.location.replace(`/`);
        } else {
            alert(response.statusText);
        }
    }
}; */

document
    .querySelector('#commentForm')
    .addEventListener('submit', commentFormHandler);