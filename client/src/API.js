import axios from 'axios';

const serverURL = 'http://localhost:4000'

export default {
    getPurchaseName: function () {
        return axios.get(`${serverURL}/api/purchaseName`);
    },

    getPurchase: function() {
        return axios.get(`${serverURL}/api/purchase`);
    },

    getPurchaseByID: function(id) {
        return axios.get(`${serverURL}/api/purchase/${id}`);
    },

    createPurchase: function (payload) {
        const config = {
            method: 'post',
            url: `${serverURL}/api/purchase`,
            data: {
                name: payload.name,
                description: payload.description,
                location: payload.location,
                date: payload.date,
                cost: payload.cost,
                method: payload.method,
            }
        };
        return axios(config);
    }
}
