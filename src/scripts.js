
import './css/base.scss';
import { fetchAllData } from './apiCalls';

import './images/background.jpg'
import Booking from './booking';
import Customer from './customer';
import Room from './room'
import domUpdates from './dom-updates'

///// QUERY SELECTORS /////


///// EVENT LISTENERS /////


///// WINDOW LOAD /////
const loadData = () => {
    fetchAllData()
        .then(data => {
            console.log(data[0])
            console.log(data[1])
            console.log(data[2])
        })
}

window.addEventListener("load", loadData)



