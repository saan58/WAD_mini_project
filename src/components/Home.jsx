// Home.js

import React from 'react';
import './home.css'; // Import your CSS file

function Home() {
  return (
    <div className="homepage-content">
      <h2 className="homepage-heading">Welcome to Our Website!</h2>
      <p className="homepage-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper sodales enim, eget lobortis orci gravida vel. Praesent vulputate velit vitae justo interdum, id molestie arcu placerat.</p>
      <p className="homepage-paragraph">Aenean fermentum, nisi et feugiat congue, risus nisi ultricies ligula, vel dignissim ex nunc sit amet elit. Integer laoreet ipsum eget leo pharetra, vel efficitur elit interdum.</p>
      {/* Additional content goes here */}
    </div>
  );
}

export default Home;
