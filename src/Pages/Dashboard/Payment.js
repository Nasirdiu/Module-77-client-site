import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id}=useParams()
    return (
        <div>
            <h2 className="text-3xl text-purple-600">Please Pay for:{id}</h2>
        </div>
    );
};

export default Payment;