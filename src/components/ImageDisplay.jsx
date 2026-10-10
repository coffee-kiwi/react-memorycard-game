import { useState } from 'react';
import ImageCard from './ImageCard.jsx';
const images = import.meta.glob('../assets/images/*.png', {
    eager: true,
    query: '?url',
    import: 'default'
});

function shuffleOrder(cards) {
    const newArray = [...cards];
    const count = 0;

    for (let i = newArray.length - 1; i > 0; i-- ) {
            const j= Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

function DisplayCards({cards, handleCardClick }) {
    return cards.map((card) => {
        return (
            <ImageCard
                key={card.id}
                id={card.id}
                imgurl={card.imgurl}
                onClick={() => handleCardClick(card.id)}
            />
        )
    });
}

export default function ImageDisplay({ score, setScore, bestScore, setBestScore }) {
    const initialCards = [
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
    const [cards, setCards] = useState(initialCards);
    const [clickedCards, setClickedCards] = useState([]);
    
    function handleShuffle() {
        setCards(previousCards => shuffleOrder(previousCards));
    }

    function handleCardClick(clickedCardId) {
        if (clickedCards.includes(clickedCardId)) {
            // Reset game
            console.log(clickedCards);
            console.log(`Card ${clickedCardId} was clicked, so game is over`)
            setClickedCards([]);
            if (score > bestScore) {
                setBestScore(score);
            }
            setScore(0);
        } else {
            // Continue game
            console.log(`The card with ${clickedCardId} was clicked!`)
            setScore(previousScore => previousScore + 1);
            setClickedCards(previousCards => [...previousCards, clickedCardId]);
        }
        handleShuffle();
    }

    return (
        <div>
        <p>test image display</p>
        <DisplayCards
            cards={cards}
            // onShuffle={handleShuffle}
            // setScore={setScore}
            // setBestScore={setBestScore}
            handleCardClick={handleCardClick}
        />
        </div>
    );
}