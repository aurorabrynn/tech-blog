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
    .querySelector('#newBlogForm')
    .addEventListener('submit', newFormHandler);
  
  /* document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler); */
  