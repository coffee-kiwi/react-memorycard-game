import { useState } from 'react';
import ImageCard from './ImageCard.jsx';
const images = import.meta.glob('../assets/images/*.png', {
    eager: true,
    query: '?url',
    import: 'default'
});
console.log(images);
console.log(Object.keys(images));
console.log(Object.values(images));

function shuffleOrder(cards) {
    return shuffledArray(cards);
}

export default function ImageDisplay() {
    const cards = [
        {id: 1, imgurl: images['../assets/images/poke1.png']},    
        {id: 2, imgurl: images['../assets/images/poke2.png']},
        {id: 3, imgurl: images['../assets/images/poke3.png']},
        {id: 4, imgurl: images['../assets/images/poke4.png']},
        {id: 5, imgurl: images['../assets/images/poke5.png']},
        {id: 6, imgurl: images['../assets/images/poke6.png']},
        {id: 7, imgurl: images['../assets/images/poke7.png']},
        {id: 8, imgurl: images['../assets/images/poke8.png']},
        {id: 9, imgurl: images['../assets/images/poke9.png']},
        {id: 10, imgurl: images['../assets/images/poke10.png']},
        {id: 11, imgurl: images['../assets/images/poke11.png']},
        {id: 12, imgurl: images['../assets/images/poke12.png']},
    ];

    function DisplayCards({ cardArray }) {
       return cardArray.map((card) => {
            return (
                <ImageCard
                    key={card.id}
                    id={card.id}
                    imgurl={card.imgurl}
                />
            )
        });
    }
    
    return (
        <div>
        <p>test image display</p>
        <DisplayCards
            cardArray={cards}
        />
        </div>
    );
}