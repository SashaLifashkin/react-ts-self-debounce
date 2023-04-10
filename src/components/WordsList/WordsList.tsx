import React from 'react';

export const WordsList: React.NamedExoticComponent<{words: string[]}> = React.memo(
    ({ words }) => {
        return (
            <ul className='WordsList'>
                {words.map(word => (
                    <li key={word}>
                        {word}
                    </li>
                ))}
            </ul>
        );
    }
);
