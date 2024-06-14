import { Verso, Assemblea, Strofa } from './Format/Format';
import { gridateConGioia } from './Lista/Lista'

function App() {
  return (
    <div className="App">
      
      { gridateConGioia.map(canto => 
        {
          if (canto.assemblea) {
            return <Assemblea>
              {canto.testo.map(verso => {
                return <Verso>{verso}</Verso>
              })}
            </Assemblea>
          }
          if (!canto.assemblea) {
            return <Strofa>
              {canto.testo.map(verso => {
                return <Verso>{verso}</Verso>
              })}
            </Strofa>
          }
        }
      )}

    </div>
  );
}

export default App;
