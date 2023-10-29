const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandonInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  const description = reactDescriptions[genRandonInt(reactDescriptions.length)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function Main() {
  return (
    <main>
      <h2>Time to get started!</h2>
    </main>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Main/>
    </div>
  );
}

export default App;
