import './App.css';
import { UserRegistration } from "./UserRegistration";
import Parse from 'parse/dist/parse.min';

const app_id = process.env.REACT_APP_PARSE_APP_ID;
const host_url = process.env.REACT_APP_PARSE_HOST_URL;
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(app_id, javascript_key);
Parse.serverURL = host_url;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserRegistration />
      </header>
    </div>
  );
}

export default App;
