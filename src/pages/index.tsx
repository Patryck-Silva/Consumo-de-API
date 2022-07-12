import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'



export default function home() {
  const[name,setName] = useState('')
  const[presenca,setPresenca] = useState('')
  const [position,setPosition] = useState('')
  const [pontos,setPontos] = useState('')

  //submit event
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.clear()
    // console.log("nome: ",name,"presenca: ",presenca,"posicao: ",position,"pontos:",pontos)
    const data = {
      Nome:name,
      Presença:presenca,
      Posição:position,
      Pontos:pontos
    }
    axios.post('https://sheetdb.io/api/v1/p1di6bh3cnfoj',data)
    .then((response) => {
      console.log(response)
      setName('')
      setPontos('')
      setPosition('')
      setPresenca('')
    }) 
  }
  return (
      <Container>
        <h1>teste de formulário</h1>
          <form autoComplete='off' className='form' onSubmit={handleSubmit}>
            <div>
              <label className='user-label' >Nome</label>
              <input onChange={(e) => setName(e.target.value)} value={name} className='input' required type="text" placeholder='Coloque o nome' />
              <label className='user-label' >Presença</label>
              <input onChange={(e) => setPresenca(e.target.value)} value={presenca}  className='input' required type="text" placeholder='Coloque s para sim e n para não' />
              <label className='user-label' >Posição</label>
              <input onChange={(e) => setPosition(e.target.value)} value={position}  className='input' required type="text" placeholder='Coloque a Posição' />
              <label className='user-label' >Pontos</label>
              <input onChange={(e) => setPontos(e.target.value)} value={pontos}  className='input' required type="text" placeholder='Coloque os pontos da etapa' />
            </div>
            <div>
              <button type='submit'>enviar</button>
            </div>
          </form>
      </Container>
  )
}