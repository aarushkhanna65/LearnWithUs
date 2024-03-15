// import React from 'react';
// // import WebsiteContext from '../../context/learnwithus/websiteContext';

// export default function Contact() {
//     // const websiteContext = React.useContext(WebsiteContext);
//     // useEffect(() => {
//     //     websiteContext.update();
//     //     // eslint-disable-next-line
//     // }, []);

//     return (
//         <div className="container my-5">
//           <h1>Contact Us</h1>
//           <p>If you have any questions or concerns, feel free to reach out to us!</p>
    
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Name:</label>
//               <input type="text" id="name" name="name" className="form-control" />
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input type="email" id="email" name="email" className="form-control" />
//             </div>
    
//             <div className="form-group">
//               <label htmlFor="message">Message:</label>
//               <textarea id="message" name="message" rows="4" className="form-control"></textarea>
//             </div>
    
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
    
//           <div className="contact-info">
//             <h2>Our Contact Information</h2>
//             <p>Email: contact@example.com</p>
//             <p>Phone: (123) 456-7890</p>
//             <p>Address: 123 Main Street, Cityville, State, 12345</p>
//           </div>
//         </div>
//       );
// }

import React from 'react';

const Contact = () => {
  const styles = `
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
    }

    header, main, footer {
      text-align: center;
      padding: 20px;
    }

    header {
      background-color: #343a40;
      color: white;
    }

    main {
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 30px;
    }

    footer {
      background-color: #343a40;
      color: white;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    h1, h2, p {
      color: #343a40;
    }

    .form-group {
      margin-bottom: 20px;
    }
    .form-group label{
      font-size : 14px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }

    .form-control {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 15px;
      border: 1px solid #ced4da;
      border-radius: 5px;
      font-size: 16px;
    }

    textarea {
      resize: vertical;
    }

    .btn {
      background-color: #007bff;
      color: white;
      padding: 12px 24px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: 18px;
    }

    .btn:hover {
      background-color: #0056b3;
    }

    .contact-info {
      margin-top: 30px;
      font-size: 18px;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="container my-5">
        <h1>Contact Us</h1>
        <h4>If you have any questions or concerns, feel free to reach out to us!</h4>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" className="form-control"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p>Email: aarushKhanna@gmail.com</p>
          <p>Phone: +91 85999-78190</p>
          <p>Address: sec 10 , LALRU MANDI</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

