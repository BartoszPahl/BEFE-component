import React from 'react';

class Body extends React.Component {
  render() {
    return (

  <main>
    <div className="intro">
      <h1>Hey all! Welcome to my website!</h1>
      <h2>A little info about me </h2>
      <p>I am a software engineer, currently focused on my front-end path of programming, aspiring to become fullstack. I am 23 years young, Loughborough University graduate, music and books fanatic. </p>

      <ul className="list">
        <h3>3 things I like about front-end:</h3>
        <li>It is instantly rewarding as you can see the changes immediately</li>
        <li>It has heavy focus on accessibility, allowing all users to be able to browse with ease</li>
        <li>I am a big fan of animations and motions, and front-end allows me to indulge in it more</li>
      </ul>
    </div>
        
    <div className="feedback">
      <form className="comments">
        <div>
          <label for="name">Name:</label>
          <br />
          <input type="text" name="fulltname" id="name" placeholder="Your name..." />
          <br />
          <label for="msg">Comment:</label>
          <br />
          <textarea id="msg" name="message" rows="5" cols="30"></textarea>
          <br />
          <br />
          <button id="btn" className="btn" onclick="showInput(); return false" >Leave a comment</button>
        </div>
      </form>

      <div className="commentSection">
        <h3>Comment Section</h3>
        <div className="displayedComments">
          <p id="para">
          </p>
        </div>
      </div>
    </div>

  </main>

      );
    }
  }

export default Body;


