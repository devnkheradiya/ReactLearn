import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
  <>
  <Navbar title="Textutils"/>
  <div className="container">
  <TextForm heading="Enter text to analyse"/>
  </div>
  </>
  );
}

export default App;
