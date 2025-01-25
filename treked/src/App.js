import Navbar from './components/navbar.js';
import HomePage from './components/homepage.js';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage/>
        {/* Add additional content here */}
      </main>
    </div>
  );
}

export default App;
