import { useState } from 'react';
import { Container, Box, Order, Title, Moves, Reset, CardIcon, Cards, Central } from './Card-Style';

interface Carta {
  id: number;
  valor: string;
  estaVirada: boolean;
  estaCorrespondida: boolean;
}

export function JogoDaMemoria() {
  const maxTentativas = 10;
  const [cartas, setCartas] = useState<Carta[]>(gerarCartas());
  const [cartaSelecionada, setCartaSelecionada] = useState<Carta | null>(null);
  const [paresCorrespondidos, setParesCorrespondidos] = useState<number>(0);
  const [tentativas, setTentativas] = useState<number>(maxTentativas);

  function gerarCartas() {
    const valores = ["A", "B", "C", "D", "E", "F", "A", "B", "C", "D", "E", "F"];
    
    const valoresEmbaralhados = embaralharArray(valores);
    const cartasGeradas: Carta[] = valoresEmbaralhados.map((valor, indice) => ({
      valor,
      estaVirada: false,
      estaCorrespondida: false,
      id: indice
    }));
    return cartasGeradas;
  }

  function embaralharArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(cartaClicada: Carta) {
    if (cartaClicada.estaVirada || cartaSelecionada === cartaClicada || cartaClicada.estaCorrespondida || tentativas <= 0) return;
  
    const novasCartas = cartas.map(carta =>
      carta === cartaClicada ? { ...carta, estaVirada: true } : carta
    );
    setCartas(novasCartas);
  
    if (cartaSelecionada) {
      if (cartaSelecionada.valor === cartaClicada.valor) {
        setParesCorrespondidos(paresCorrespondidos + 1);
        const cartasCorrespondidas = novasCartas.map(carta =>
          carta.valor === cartaSelecionada.valor ? { ...carta, estaCorrespondida: true } : carta
        );
        setCartas(cartasCorrespondidas);
      } else {
        setTimeout(() => {
          const resetarCartas = novasCartas.map(carta =>
            carta.estaVirada ? { ...carta, estaVirada: false } : carta
          );
          setCartas(resetarCartas);
        }, 1000);
        setTentativas(tentativas - 1); 
      }
      setCartaSelecionada(null);
    } else {
      setCartaSelecionada(cartaClicada);
    }
  }
  
  function reiniciarJogo() {
    setParesCorrespondidos(0);
    setTentativas(maxTentativas);
    setCartas(gerarCartas());
    setCartaSelecionada(null);
  }

  return (
    <Container>
      <Box>
        <Title><strong>Jogo da Memória!</strong></Title>
        <Order>
          <Moves>Acertos: {paresCorrespondidos}</Moves>
          <Moves>Tentativas: {tentativas}</Moves>
          <Reset onClick={reiniciarJogo}>Recomeçar</Reset>
        </Order>
      </Box>
      <Central>
        <Cards>
          {cartas.map((carta, indice) => (
            <CardIcon key={indice} onClick={() => handleClick(carta)}>
              {carta.estaVirada || carta.estaCorrespondida ? carta.valor : "?"}
            </CardIcon>
          ))}
        </Cards>
      </Central>
    </Container>
  );
}


