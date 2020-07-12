import React from 'react';
import { UserConsumer } from '../App';

const NewSingle = ({item}) => (
  <UserConsumer>
    {({ firstName, lastName }) => (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={item.urlToImage} alt={item.title}/>
          <span className="card-title">{firstName} {lastName}</span>
        </div>
        <div className="card-content">
          <p>{item.title}</p>
        </div>
        <div className="card-action">
          <a href={item.url} rel="noopener noreferrer" target="_blank">Full article</a>
        </div>
      </div>
    </div>
    )}
  </UserConsumer>
);

export default NewSingle;
