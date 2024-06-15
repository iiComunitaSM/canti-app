import { useEffect, useState } from 'react';
import './App.css';
import canti from './Canti/Lista/Canti'
import { Item } from './Canti/Format/Format';

function App() {
  const [cantiSorted, setCantiSorted] = useState()

  useEffect(() => {
    setCantiSorted(canti.sort((a,b) => (a.titolo > b.titolo) ? 1 : -1))
    console.log('canti so', cantiSorted)
  }, [])

  return (
    <div className="App">
      <div className='titolo'>II Comunità di San Marco</div>
      <div className='sottotitolo'>- Canti da selezionare in fase di preparazione -</div>
      <div className='desc'>Indicazioni per la selezione dei canti:<br/><br/>- <strong>Eucarestia</strong>. scegliere canti per: ingresso, pace, pane, vino e finale. Bisogna scegliere i canti contrassegnati con la rispettiva etichetta
        <br/><br/>- <strong>Parola</strong>. segliere i canti per: ingresso, I lettura, II lettura, III lettura e finale. I canti di ingresso e finale devono essere scelti tra quelli contrassegnati con la rispettiva etichetta, per i canti delle letture, invece, è possibile scegliere tra tutti quelli disponibili
        <br/><br/>E' consigliabile, ma non necessario rispettare i periodi liturgici suggeriti dal canto<br/><br/>
      </div>
      { cantiSorted && cantiSorted.map(canto => 
        {
          return <Item
            key={canto.titolo}
            title={canto.titolo}
            sottotitolo={canto.sottotitolo}
            link={canto.link}
            ingresso={canto.ingresso}
            pace={canto.pace}
            pane={canto.pane}
            vino={canto.vino}
            finale={canto.finale}
            aMaria={canto.aMaria}
            natale={canto.natale}
            quaresima={canto.quaresima}
            pentecoste={canto.pentecoste}
          ></Item>
        }
      )}
    </div>
  );
}

export default App;
