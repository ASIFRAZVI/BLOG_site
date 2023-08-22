Serverless Blog API with MongoDB
This project demonstrates the implementation of a serverless blog API using MongoDB, Node.js, and a basic frontend interface. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts through API endpoints.
with MVC pattern.

Project Structure
- backend/
  - functions/
    - controllers/
      - blogController.js
    - models/
      - BlogPost.js
    - routes/
      - blogroutes.js
    - index.js
- views/
  - index.html
-public
  - styles.css
  - script.js
- app.js
- README.md
- package.json



//setup
npm install
Configure MongoDB:
Replace <username>, <password>, <cluster-url>, and <database-name> with your MongoDB credentials in backend/index.js.

Frontend Setup
Open the frontend/index.html file in a web browser or host it using a local server.
Create, read, update, and delete blog posts using the provided interface.
API Endpoints
POST /api/createPost: Create a new blog post.
GET /api/getPosts: Retrieve all blog posts.
PUT /api/updatePost/:id: Update a blog post by ID.
DELETE /api/deletePost/:id: Delete a blog post by ID.
Frontend Interaction
Create: Fill out the form and click "Create Post."
Read: Existing posts are displayed on the frontend.
Update: Click "Update" on a post and enter the updated content.
Delete: Click "Delete" on a post to remove it.
Documentation
For more detailed information and usage instructions, refer to the docs/README.md file.

License
-------