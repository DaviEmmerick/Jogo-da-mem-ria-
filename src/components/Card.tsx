import { useState } from 'react';
import { Container, Box, Order, Title, Moves, Reset, CardIcon, Cards, Central } from './Card-Style';

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export function Card() {
  const maxAttempts = 10;
  const [cards, setCards] = useState<Card[]>(generateCards());
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(maxAttempts);

  function generateCards() {
    const values = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
    
    const shuffledValues = shuffleArray(values);
    const generatedCards: Card[] = shuffledValues.map((value, index) => ({
      value,
      isFlipped: false,
      isMatched: false,
      id: index
    }));
    return generatedCards;
  }

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(clickedCard: Card) {
    if (clickedCard.isFlipped || selectedCard === clickedCard || clickedCard.isMatched || attempts <= 0) return;
  
    const newCards = cards.map(card =>
      card === clickedCard ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
  
    if (selectedCard) {
      if (selectedCard.value === clickedCard.value) {
        setMatchedPairs(matchedPairs + 1);
        const matchedCards = newCards.map(card =>
          card.value === selectedCard.value ? { ...card, isMatched: true } : card
        );
        setCards(matchedCards);
      } else {
        setTimeout(() => {
          const resetCards = newCards.map(card =>
            card.isFlipped ? { ...card, isFlipped: false } : card
          );
          setCards(resetCards);
        }, 1000);
        setAttempts(attempts - 1); 
      }
      setSelectedCard(null);
    } else {
      setSelectedCard(clickedCard);
    }
  }
  
  function handleRestart() {
    setMatchedPairs(0);
    setAttempts(maxAttempts);
    setCards(generateCards());
    setSelectedCard(null);
  }

  return (
    <Container>
      <Box>
        <Title><strong>Jogo da Memória!</strong></Title>
        <Order>
          <Moves>Acertos: {matchedPairs}</Moves>
          <Moves>Tentativas: {attempts}</Moves>
          <Reset onClick={handleRestart}>Recomeçar</Reset>
        </Order>
      </Box>
      <Central>
        <Cards>
          {cards.map((card, index) => (
            <CardIcon key={index} onClick={() => handleClick(card)}>
              {card.isFlipped || card.isMatched ? card.value : "?"}
            </CardIcon>
          ))}
        </Cards>
      </Central>
    </Container>
  );
}


