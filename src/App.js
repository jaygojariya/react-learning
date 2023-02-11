import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes';
import SideBar from './Component/Common/Sidebar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <AllRoutes />
    </div>
  );
}

export default App;
