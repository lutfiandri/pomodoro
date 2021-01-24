import Button from './components/Button';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="App bg-gray-50">
      <div className="container max-w-xl min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-medium text-gray-800 -mt-20">
          Pomodoro Timer
        </h1>
        <div className="flex space-x-2 w-full mt-4">
          <Button color="indigo" full>
            work
          </Button>
          <Button color="gray">short break</Button>
          <Button color="gray">long break</Button>
        </div>
        <div className="mt-2 w-full">
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default App;
