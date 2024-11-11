// src/components/CharacterDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h2>Character Details for ID: {id}</h2>
            <p>Details will be shown here.</p>
        </div>
    );
};

export default CharacterDetails;
