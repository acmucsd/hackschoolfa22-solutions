import React, { useState } from 'react';
import  { useHistory } from 'react-router-dom';

import './style.css';
import API from '../API';
import Navbar from '../components/Navbar';
import Method from '../components/Method';

const CreatePurchase = () => {
    let history = useHistory();
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState();
    const [cost, setCost] = useState(0);

    /**
     * Method to handle the creation of a Purchase on form submit.
     */
    const handleCreatePurchase = async (e) => {
        e.preventDefault();
        const req = e.target;
        const payload = {
            purchase: {
                name: req.name.value,
                description: req.description.value,
                location: req.location.value,
                date: req.date.value,
                cost: req.cost.value,
                method: req.method.value,
                image: req.image.value
            }
        };
        console.log(JSON.stringify(payload));
        await API.createPurchase(payload);
        history.push("/view");
        alert("Created successfully");
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleCreatePurchase} className="create-page">
                <div className="purchase-form">
                    <h2>Create a Purchase</h2>
                    <div className="name-row">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name..." />
                    </div>
                    <div className="description-row">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..." />
                    </div>
                    <div className="location-row">
                        <label htmlFor="location">Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location..." />
                    </div>
                    <div className="date-row">
                        <label htmlFor="date">Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter date..." />
                    </div>
                    <div className="cost-row">
                        <label htmlFor="cost">Cost</label>
                        <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Enter cost..." />
                    </div>
                    
                    <div className="method-row">
                        <label htmlFor="method">Method</label>
                        <Method id={'method'} />
                    </div>
                    <div className="image">
                        <label htmlFor='image'>Item Image</label>
                        <input type="file" />
                    </div>
                    <div className='row'>
            	        <div className='col-sm'>
					        <button type='submit' className='btn btn-primary mt-3'>
						    Submit
					        </button>
				        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default CreatePurchase;
