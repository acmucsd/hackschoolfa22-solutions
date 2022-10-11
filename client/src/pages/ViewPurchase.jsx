import React, { useState, useEffect } from 'react';
import PurchaseCard from '../components/PurchaseCard/PurchaseCard';
import Navbar from '../components/Navbar';
import API from '../API';
import './style.css';


const ViewPurchase = () => {

    const [filter, setFilter] = useState("All");
    const [body, setBody] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Loads the current list of purchases */
    useEffect(() => {
       API.getPurchase()
       .then((response) => {
           setBody(response.data.purchase);
           setLoading(false);
       })
    }, []);

    let renderedPurchases = false; // Keeps track of whether we managed to render a purchase

    /* Renders the list of purchase that matches the current filter */
    const currentPurchases = body.map((purchase, i) => {
        const appears = filter === "All" || purchase.type === filter ;
        if (appears) { renderedPurchases = true; }
        return (appears && <PurchaseCard key={i} name={purchase.name}
            description={purchase.description} location={purchase.location} 
            date={purchase.date} cost={purchase.cost} method={purchase.method}  />);
    })

    /* Changes the filter */
    const handleTypeChange = (event) => {
        setFilter(event.target.value);
    }

    /* Renders a notice if there is no purchase matching the filter type */
    const emptyList = () => {
        return (
            <div className="purchase-empty-result">
                <div className="purchase-empty-result-inner">
                <p>No purchases with the corresponding type found :(</p>
                <p>Try changing the filter, or create a purchase <a href="/create">here</a></p>
                </div>
            </div>
        );
    }

    /* Renders currentPurchases, or emptyList, depending on whether we returned purchases */
    const listBody = () => {
        if(loading){
            return(
                <div className="purchase-empty-result">
                    <div className="purchase-empty-result-inner">
                        <p>Loading...</p>
                    </div>
                </div>
            );
        }
        return renderedPurchases ? currentPurchases : emptyList();
    }

    return (
        <div>
            <Navbar/>
            <h2 className="view-purchases-header">All Purchases</h2>
            <div className="purchase-filter">
                <label htmlFor="type">Filter by type:{'\u00A0'}</label>
                <select id="type" name="type" onChange={handleTypeChange}>
                    <option value="All">All</option>
                    <option value="Cash">Cash</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                    <option value="Check">Check</option>
                    <option value="Crypto">Crypto</option>
                </select>
            </div>

            {listBody()}
        </div>
    );
}

export default ViewPurchase;