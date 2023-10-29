import reactImg from '../assets/react-core-concepts.png';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandonInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function Header() {
    const description = reactDescriptions[genRandonInt(reactDescriptions.length)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }