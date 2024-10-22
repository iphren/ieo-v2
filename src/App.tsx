import './App.css';
import AppRoutes from "./Routes";
import IeoAppBar from "./components/IeoAppBar/IeoAppBar";

function App() {
    return (
        <div className="App">
            <IeoAppBar />
            <AppRoutes />
        </div>
    );
}

export default App;
