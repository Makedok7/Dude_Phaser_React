import Phaser, { CANVAS } from 'phaser'
import React, { useEffect, useState } from 'react'
import Nav from './Nav.js';
import Create from './Create.js';
import Preload from './Preload.js';
import Update from './Update.js';
import GameOver from './GameOver.js';


export default function Juego() {
  const [listo, setListo] = useState(false)

  useEffect(() => {

    const CONFIGURACION = {
      type: Phaser.AUTO,
      scale: {
        width: 800,
        height: 600,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      parent:'game'
    }

    const Escenas = [Preload,Create,Update,GameOver]
    const crearEscena = Scene => new Scene(CONFIGURACION)
    const iniciarEscena = () => Escenas.map(crearEscena)

    var config = {
      ...CONFIGURACION,
      scene: iniciarEscena()
    };

    const game = new Phaser.Game(config);

    game.events.on("LISTO", setListo)

    return () => {
      setListo(false);
      game.destroy(true);
    }

  }, [listo]);

  return (
    <div className='bg-dark' style={{ height: "1000px" }}>
      {Nav()}
      <div id='game' className='text-center'></div>
      <div className='text-center'>
        <button type='button' className='btn btn-primary' onClick={() => setListo(true)}>Reset</button>
      </div>
    </div>)
}