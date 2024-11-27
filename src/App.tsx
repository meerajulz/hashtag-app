import './App.css';
import TextInput from './components/text-input/text-input.component';

function App() {
  return (
    <main>
      <header className="App-header">
        <h1>Medical Report Auto-Complete</h1>
      </header>
      <div className="container mx-auto p-4">
        <TextInput />
      </div>
    </main>
  );
}

export default App;
