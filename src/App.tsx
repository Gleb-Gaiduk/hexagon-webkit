import Button, { ButtonContext } from './components/Button/Button';

function App() {
  return (
    <>
      <div>
        <Button
          textLabel={'Secondary Test'}
          dataTest={'Secondary'}
          onClick={() => console.log('Click')}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button
          buttonContext={ButtonContext.PRIMARY}
          textLabel={'Primary Test'}
          dataTest={'primary'}
          onClick={() => console.log('Click')}
        />
      </div>
    </>
  );
}

export default App;
