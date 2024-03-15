import React, { useState, useEffect } from 'react';

function PetDetails(props) {
    const [petDetails, setPetDetails] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch pet details from PHP backend when component mounts
        fetch(`http://localhost/New%20folder/backend/details.php?petid=${props.petd}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch pet details');
                }
                return response.json();
            })
            .then(data => {
                if (data.petId === null) {
                    throw new Error('Pet ID not found');
                }
                setPetDetails(data);
            })
            .catch(error => {
                setError(error.message);
            });
    }, [props.petId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!petDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{petDetails.petName}</h1>
            <p>Type: {petDetails.type}</p>
            <p>Breed: {petDetails.breed}</p>
            <p>Sex: {petDetails.sex}</p>
            <p>Age: {petDetails.age}</p>
            <p>Color: {petDetails.color}</p>
            <p>Size: {petDetails.size}</p>
            <p>Description: {petDetails.description}</p>
        </div>
    );
}

export default PetDetails;
