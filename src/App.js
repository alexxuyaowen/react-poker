import Card from './components/Card';
import allCards, { images } from './allCards';

const App = () => {
  const unselectAll = () => {};

  return (
    <>
      <h1>Step 1: Select the cards you hold.</h1>
      <div className='cards'>
        {allCards.map(e => (
          <Card key={e.id} src={e.image} />
        ))}
      </div>
      <button onClick={unselectAll}>Confirm</button>
      <button onClick={unselectAll}>Clear</button>
    </>
  );
};

export default App;
