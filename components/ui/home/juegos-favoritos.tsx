import React from 'react'
import juegosFavoritos from '@/lib/actions/juegos-favoritos';


const JuegosFavoritos = async () => {
  const juegos:any = await juegosFavoritos();
  return (
    <div>
      <h2>Juegos Favoritos</h2>
      <ul>
        {juegos.map((juego:any) => (
          <li key={juego.id}>{juego.nombreJuego}</li>
        ))}
      </ul>
    </div>
  )
}

export default JuegosFavoritos