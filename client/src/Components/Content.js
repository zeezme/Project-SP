import './Content.css'
var React = require('react');
var ReactDOM = require('react-dom');


function Content() {

  return (
    <div className='Content'>
        <ul className="Cards">
          <li id="item1">Cafeteria</li>
          <li id ="item2">Sobremesas</li>
          <li id ="item3">Cafés</li>
        </ul>
    </div>
  )
}

export default Content;
