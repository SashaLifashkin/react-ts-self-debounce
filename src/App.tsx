import { useState } from 'react';
import './App.css';
import { WordsList } from './components/WordsList';

const initialColors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'white', 'brown', 'black'];

function App() {
    const [count, setCount] = useState(0);
    const [query, setQuery] = useState('');
    // const [appliedQuery, setAppliedQuery] = useState('');

    const gerVisibleColor = () => {
        return initialColors.filter(color => color.startsWith(query));
    };

    const visibleColors = gerVisibleColor();

    return (
        <div className="App">
            <header className="header">
                Debounce
            </header>

            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />

            <button
                type="button"
                onClick={() => setCount(count + 1)}
            >
                {count}++
            </button>

            <WordsList words={visibleColors}/>
        </div>
    );
}

export default App;
