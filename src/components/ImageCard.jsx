import { useState } from 'react';

export default function ImageCard({id, imgurl, onClick}) {

    return (
            <button onClick={onClick}>
                <img    
                    src={imgurl} 
                    alt="Image of pokemon"  
                    className="pokemonCardImg"
                />
            </button>
    );
}