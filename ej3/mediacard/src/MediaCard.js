import React from 'react';
import './stylesheets/App.scss';
import heart from './images/heart-solid.svg';




const MediaCard = props => {
  
  
    
    return (
    <div className="app">
    <div className="app-container">
      <header className="app-header">
        <img src={props.userPicture} alt="person" className="app-img-header"></img>
        <h1 className="app-name">{props.userName}</h1>
        <h2 className="app-date">{props.date}</h2>
      </header>
      <main className="app-main">
        <p className="app-text">{props.description}</p>
      </main>
      <footer className="app-footer">
        <p className="app-paragrah-footer">Leer mas...</p>
        <div className="app-divlikes">
          <p className= "app-plikes">{props.numberOfLikes}</p>
          <img src={heart} alt="heart red" className="app-img-footer"></img>
        </div>
      </footer>
    </div>
    </div>);
}




export default MediaCard;
