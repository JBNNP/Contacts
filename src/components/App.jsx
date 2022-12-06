import React from 'react';
import Contact from '../contacts';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgURL} alt="Avatar_img" />
      </div>
      <div className="bottom">
        <div className="info">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* default */}
      <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />

      <Card
        name={Contact[1].name}
        imgURL={Contact[1].imgURL}
        phone={Contact[1].phone}
        email={Contact[1].email}
      />
      <Card
        name={Contact[2].name}
        imgURL={Contact[2].imgURL}
        phone={Contact[2].phone}
        email={Contact[2].email}
      />
    
    </div>
  );
}

export default App;
