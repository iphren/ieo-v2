import AppRoutes from "./Routes";
import IeoAppBar from "./components/IeoAppBar/IeoAppBar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <IeoAppBar />
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;
