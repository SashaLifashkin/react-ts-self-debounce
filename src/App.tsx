import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import { WordsList } from './components/WordsList';

const initialColors = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'white', 'brown', 'black'];

// const debounce = (func: any, delay: number) => {
const debounce = (func: React.Dispatch<React.SetStateAction<string>>, delay: number) => {
    // let timerId: NodeJS.Timeout;
    let timerId: number;

    return (...args: string[]) => {
        clearTimeout(timerId);
        timerId = setTimeout(func, delay, ...args);
    };
};

function App({ colors = initialColors }) {
// function App({ initialColors }: { initialColors: string[] }) {
    // const [count, setCount] = useState(0);
    const [query, setQuery] = useState('');
    const [appliedQuery, setAppliedQuery] = useState('');

    // const getVisibleColor = () => {
    //     return initialColors.filter(color => color.startsWith(query));
    // };

    const applyQuery = useCallback(
        debounce(setAppliedQuery, 1000),
        []
    );

    const visibleColors = useMemo(() => {
        console.log('Filtering: ', appliedQuery)

        return colors.filter(color => color.startsWith(appliedQuery));
    }, [colors, appliedQuery]);

    return (
        <div className="App">
            <header className="header">
                Debounce
            </header>

            <input
                type="text"
                value={query}
                onChange={event => {
                    setQuery(event.target.value);
                    applyQuery(event.target.value)
                }}
            />

            {/* <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            /> */}

            {/* <button
                type="button"
                onClick={() => setCount(count + 1)}
            >
                {count}++
            </button> */}

            <WordsList words={visibleColors} />
        </div>
    );
}

export default App;
