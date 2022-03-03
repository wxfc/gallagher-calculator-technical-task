import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App m-20 pb-10 rounded-xl text-white bg-rose-600">
      <h1 className='text-3xl m-6 p-4'>Gallagher Tax Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
