import stars from "./assets/bg-stars.svg";
import hills from "./assets/pattern-hills.svg";
import Countdown from "./components/Countdown";

function App() {
  const date = new Date(2025, 6, 23);
  return (
    <div
      className="w-full h-full md:h-screen bg-cover bg-no-repeat bg-veryDarkBlue flex flex-col"
      style={{ backgroundImage: `url(${stars})` }}
    >
      <div className="md:h-[75vh] flex flex-row">
        <Countdown date={date} />
      </div>
      <div
        className="w-full md:h-[25vh] bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${hills})` }}
      ></div>
    </div>
  );
}

export default App;
