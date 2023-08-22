document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('create-form');
    const postsContainer = document.getElementById('posts');
    
  
    createForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const author = document.getElementById('author').value;
  
      try {
        const response = await fetch('/createPost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content, author }),
        });
  
        if (response.ok) {
          const post = await response.json();
          displayPost(post);
          createForm.reset();
        } else {
          console.error('Failed to create post');
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    });
  
    postsContainer.addEventListener('click', async (event) => {
      if (event.target.classList.contains('update-button')) {
        const postId = event.target.getAttribute('data-id');
        const postToUpdate = prompt('Enter updated content for the post:');
        if (postToUpdate) {
          try {
            const response = await fetch(`/updatePost/${postId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ content: postToUpdate }),
            });
  
            if (response.ok) {
              const updatedPost = await response.json();
              updatePostUI(postId, updatedPost);
            } else {
              console.error('Failed to update post');
            }
          } catch (error) {
            console.error('An error occurred', error);
          }
        }
      }
  
      if (event.target.classList.contains('delete-button')) {
        const postId = event.target.getAttribute('data-id');
        const confirmDelete = confirm('Are you sure you want to delete this post?');
        if (confirmDelete) {
          try {
            const response = await fetch(`/deletePost/${postId}`, {
              method: 'DELETE',
            });
  
            if (response.ok) {
              deletePostUI(postId);
            } else {
              console.error('Failed to delete post');
            }
          } catch (error) {
            console.error('An error occurred', error);
          }
        }
      }
    });
  
    async function fetchPosts() {
      try {
        const response = await fetch('/getPosts');
        const posts = await response.json();
        posts.forEach(displayPost);
      } catch (error) {
        console.error('An error occurred', error);
      }
    }
  
    function displayPost(post) {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>
          <em>Author: ${post.author}</em>
          <button class="update-button" data-id="${post._id}">Update</button>
          <button class="delete-button" data-id="${post._id}">Delete</button>
        </p>
      `;
      postsContainer.appendChild(postElement);
    }
  
    function updatePostUI(postId, updatedPost) {
      const postElement = document.querySelector(`[data-id="${postId}"]`);
      postElement.innerHTML = `
        <h2>${updatedPost.title}</h2>
        <p>${updatedPost.content}</p>
        <p>
          <em>Author: ${updatedPost.author}</em>
          <button class="update-button" data-id="${updatedPost._id}">Update</button>
          <button class="delete-button" data-id="${updatedPost._id}">Delete</button>
        </p>
      `;
    }
  
    function deletePostUI(postId) {
      const postElement = document.querySelector(`[data-id="${postId}"]`);
      postElement.remove();
    }
  
    fetchPosts();
  });
  