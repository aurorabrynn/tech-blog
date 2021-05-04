const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#newTitle').value.trim();
  const content = document.querySelector('#newContent').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

document
  .querySelector('#newBlogForm')
  .addEventListener('submit', newFormHandler);

