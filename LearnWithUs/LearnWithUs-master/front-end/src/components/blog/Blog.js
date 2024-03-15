// import React, { /*useContext*/ } from 'react';
// import Axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Blog() {
//     const [blogsPosts, setBlogPosts] = useState([]);

//     useEffect(() => {
//         handleBlogs();
//     }, []);

//     const handleBlogs = async () => {
//         try {
//             await Axios.get("http://localhost:5000/api/blogs/fetchallblogs")
//                 .then((response) => {
//                     setBlogPosts(response.data);
//                 })
//         } catch (error) {
//             console.log("Internal Server Error: ", error);
//         }
//     };

//     return (
//         <>
//             <div className="container my-5">
//                 <h1 style={{ fontSize: '2.7rem', textAlign: 'center' }} className='my-5'>Blogs are upcomming feature...</h1>

//                 <div className='container' style={{ textAlign: 'justify', width: '97rem', fontSize: '1.8rem' }}>
//                     {
//                         blogsPosts.map((blog) => (
//                             <div key={blog.blog_slug} className='card my-5'>
//                                 <h1 className="card-title" style={{ textAlign: 'center', fontSize: '3.5rem' }}>
//                                     {blog.blog_title}
//                                 </h1>
//                                 <p className="card-text my-3" style={{ textAlign: 'justify', fontSize: '1.3rem' }}>
//                                     {blog.blog_content}
//                                 </p>
//                                 <Link to={`/blog/blogpost/${blog.blog_slug}`}> Read More </Link>
//                             </div>
//                         ))
//                     }
//                 </div>

//             </div>
//         </>
//     );
// }


// ContactUs.js

// App.js

import React from 'react';

const App = () => {
  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
          }

          header {
            background-color: #343a40;
            color: white;
            text-align: center;
            padding: 20px;
          }

          main {
            max-width: 800px;
            margin: 20px auto;
          }

          .blog-post {
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
          }

          .blog-post h2 {
            color: #343a40;
          }

          .date {
            color: #6c757d;
            font-size: 14px;
          }

          footer {
            background-color: #343a40;
            color: white;
            text-align: center;
            padding: 10px;
            bottom: 0;
            width: 100%;
          }
        `}
      </style>
      <div>
        <header>
          <h1>My Blog</h1>
        </header>
        <main>
          <section className="blog-post">
            <h2>Introduction to React</h2>
            <p className="date">Published on January 20, 2024</p>
            <p>
              React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components,
              making it easier to manage and scale complex web applications.
            </p>
          </section>

          <section className="blog-post">
            <h2>Styling in React with CSS Modules</h2>
            <p className="date">Published on January 22, 2024</p>
            <p>
              CSS Modules provide a way to locally scope your styles in React components. This helps prevent style conflicts
              and makes it more straightforward to manage styles in a modular and maintainable way.
            </p>
          </section>
          <section className="blog-post">
            <h2>Styling in React with CSS Modules</h2>
            <p className="date">Published on January 22, 2024</p>
            <p>
              CSS Modules provide a way to locally scope your styles in React components. This helps prevent style conflicts
              and makes it more straightforward to manage styles in a modular and maintainable way.
            </p>
          </section>

          <section className="blog-post">
            <h2>Getting Started with C++</h2>
            <p className="date">Published on January 25, 2024</p>
            <p>
              C++ is a powerful programming language widely used for system/software development and game development. In this post,
              we'll explore the basics of C++ programming.
            </p>
          </section>

          <section className="blog-post">
            <h2>Java Fundamentals</h2>
            <p className="date">Published on January 28, 2024</p>
            <p>
              Java is a versatile and widely-used programming language. This post covers the fundamentals of Java programming,
              including variables, data types, and control structures.
            </p>
          </section>

          <section className="blog-post">
            <h2>HTML and CSS for Beginners</h2>
            <p className="date">Published on February 1, 2024</p>
            <p>
              Learn the basics of HTML and CSS, the building blocks of web development. This post provides an introduction to
              creating web pages using HTML for structure and CSS for styling.
            </p>
          </section>

          <section className="blog-post">
            <h2>PHP: Server-Side Scripting Language</h2>
            <p className="date">Published on February 5, 2024</p>
            <p>
              PHP is a popular scripting language for server-side web development. Explore the fundamentals of PHP, including
              variables, arrays, and functions.
            </p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 My Blog</p>
        </footer>
      </div>
    </div>
  );
};

export default App;




