const editFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const title = document.querySelector('#editTitle').value.trim();
        const content = document.querySelector('#editContent').value.trim();

        if (title && content) {
            console.log(title);
            const response = await fetch(`/api/blog/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to edit blog');
            }
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog');
        }
    }
};

document
    .querySelector('#editBlogForm')
    .addEventListener('click', editFormHandler);

document
    .querySelector('#deleteBtn')
    .addEventListener('click', delButtonHandler);