import React from 'react';
import './style.css';

const PurchaseCard = (props) => {

    /* Color object to display different colors for each type */
    const colors = {
        Cash: "green",
        Credit: "red",
        Debit: "yellow",
        Check: "white",
        Crypto: "gold"
    };

    /* Changes font color based on the purchase type */
    const getStyle = (type) => {
        if (type == null) { return {}; }
        return { color: colors[type] };
    }

    return (
        <div className="purchase-card-container">
            <div className="purchase-card-container-inner">
                <div className="purchasecard-data-container">
                    <p className="purchasecard-name"> {props.name}</p>
                    <p className="purchase-description">{props.description}</p>
                    <p className="purchasecard-location"> {props.location}</p>
                    <p className="purchase-date">{props.date}</p>
                    <p className="purchasecard-cost"> {props.cost}</p>
                    <p className="purchase-methods">
                        <span className="purchase-method" style={getStyle(props.method)}>{props.method}</span> {'\u00A0'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PurchaseCard;