import React, { useState } from 'react';
import People from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(3);
    const { name, job, text, image } = People[index];

    const checkIndex = (number) => {
        if(number > People.length - 1){
            return 0;
        }
        if(number < 0){
            return People.length - 1;
        }
        return number;
    };

    const prevPerson = () =>{
        setIndex((index) =>{
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }
    const nextPerson = () =>{
        setIndex((index) =>{
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }

    const randomPerson = () => {
        let random = Math.floor(Math.random() * People.length);
        if(random === index){
            random = index + 1;
        }
        setIndex(checkIndex(random));
    }

    return(
        <article className='review'>
            <div className="img-container">
                <img src={image} alt={name} className='person-img'/>
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
             </div>
            <h4 className="autor">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className='button-container'>
                <span className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </span>
                <span className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </span>
            </div>
            <span className='random-btn' onClick={randomPerson}>
                Surprise Me
            </span>

        </article>
    )
}

export default Review