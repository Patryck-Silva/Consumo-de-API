import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'

type Player = {
  Nome:string
  Presença:string
  Posição:string
  Pontos:string
}

export default function listar() {
  const [players,setPlayers] = useState<Player[]>([])

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/p1di6bh3cnfoj').then(response => {
      setPlayers(response.data)
    })
  })
  return (
      <Container>
        <h1>Listando players</h1>
          
        <ul>
          {players.map(jogador => {
            return(
              <li key={jogador.Nome}>
                <strong>{jogador.Nome}</strong>
                <p>{jogador.Presença}</p>
                <p>{jogador.Posição}</p>
                <p>{jogador.Pontos}</p>
              </li>
            )
          })}
        </ul>

      </Container>
  )
}