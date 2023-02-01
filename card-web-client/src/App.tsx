import { Toaster } from 'react-hot-toast';
import './App.css';
import CardLibrary from './components/CardLibrary';

function App() {
  return (
    <div className='container-fluid'>
      <Toaster />
      <CardLibrary />
    </div>
  );
}

export default App;
