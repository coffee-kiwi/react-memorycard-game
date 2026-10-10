import { useState } from 'react';

export default function ImageCard({id, imgurl}) {

    return (
            <button><img src={imgurl} alt="Image of pokemon" /></button>
    );
}