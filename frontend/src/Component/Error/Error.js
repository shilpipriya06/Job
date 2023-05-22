import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };
    return (
        <div>
            <h1>Error</h1>
            <p>Oops! You are not allowed to go back.</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}
