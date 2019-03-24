import React from 'react';
import './Cards.css';
//import img1 from '../images/terrain-1.jpg';
//import img2 from '../images/terrain-2.jpg';

const listDoctors=[
    {
        title:'170',
        paragraphe: 'Venue',
        className:"green",
    },
    {
        title:'20',
        paragraphe: 'Activities',
        className:"green",
    },
    {
        title:'35',
        paragraphe: 'BOOKABLE PITCHES',
        className:"green",
    },
]

const Cards = () =>
    <div className="threecard">
        {listDoctors.map((cards)=>
            <div className="Card">
                <div className={cards.className}>
                    <h1>{cards.title}</h1>
                    <h2>{cards.paragraphe}</h2>
                </div>
            </div>
        )}
    </div>



export default Cards;