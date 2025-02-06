import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');
  
  const colors = [
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Blue', value: 'blue' },
    { name: 'Purple', value: 'purple' },
    { name: 'Orange', value: 'orange' },
    { name: 'Teal', value: 'teal' },
    { name: 'Pink', value: 'pink' },
    { name: 'Yellow', value: 'gold' }
  ];

  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white bg-opacity-20 backdrop-blur-md px-5 py-3 rounded-3xl shadow-xl">
          {colors.map(({ name, value }) => (
            <button
              key={value}
              onClick={() => setColor(value)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg transition-transform transform hover:scale-110"
              style={{ backgroundColor: value }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
