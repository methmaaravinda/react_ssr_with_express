import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter as Router } from 'react-router-dom';
import Settings from './pages/settings/Settings';

const rootDiv = document.createElement('div');

// Set the id attribute to "root"
rootDiv.id = 'root';

// Append the div to the body or any other parent element
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(<App/>)
root.render(
  <Router>
    <App/> 
  </Router>
);




