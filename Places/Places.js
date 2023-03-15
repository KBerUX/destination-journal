import React from 'react';
const Places = (props) =>{
    return (
        <article className='single-place'>
            <img src={props.image} xalt={props.place}/>
            <footer>
                <div className='place-info'>
                <h4>{props.place}</h4>
                <h4 className='place-price'>{props.location}</h4>
                </div>
                <div>
                    <p>{props.description}</p>
                    <p><em>{props.tag ? props.tag : 'US Based'}</em></p>
                </div>
            </footer>
        </article>
    )
};
export default Places;


