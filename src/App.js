
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>React Redux : Fetch Data </h1>
      <Todos />
    </div>
  );
}

export default App;


// step 1: install packages
//    npm install redux react-redux axios redux-thunk
// step 2: constants define
// step 3: async action creator
// step 4: reducer
// step 5: store create
// step 6: provide store
// step 7: use store
// step 8: adding css