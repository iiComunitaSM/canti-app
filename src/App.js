import './App.css';
import canti from './Canti/Lista/Canti'
import { Item } from './Canti/Format/Format';

function App() {
  return (
    <div className="App">
      <div className='titolo'>II Comunità di San Marco</div>
      <div className='sottotitolo'>canti da selezionare in fase di preparazione</div>
      <div className='desc'>Seguire le indicazioni sui canti per le diverse fasi della celebrazione (ingresso, pace, pane, vino e finale; ingresso e finale per la Parola).E' consigliabile, ma non è necessario rispettare i periodi liturgici come Natale, Quaresima e Pentecoste.</div>
      { canti.map(canto => 
        {
          return <Item
            title={canto.titolo}
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
