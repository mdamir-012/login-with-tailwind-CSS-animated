import "./App.css";
import Login from "./Components/Login";

function App() {
  return (
    <div className=" flex w-full h-screen">
      <div className=" w-full flex items-center justify-center lg:w-1/2">
        <Login />
      </div>
      <div className=" relative hidden w-1/2 lg:flex h-full bg-gray-200 items-center justify-center">
        <div className=" w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 w-full h-1/2 backdrop-blur-lg bg-white/10"></div>
      </div>
    </div>
  );
}

export default App;
