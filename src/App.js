
import './App.css';
import WeatherForm from "./component/WeatherForm";
import Weather from "./component/Weather";

function App() {
  return (
    <div className={'App'}>
      <WeatherForm></WeatherForm>
        <Weather></Weather>
    </div>
  );
}

export default App;
