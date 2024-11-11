// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics.tsx';
import NotFound from './components/NotFound.tsx';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/browse">Browse Characters</Link>
                <Link to="/comics">Comics</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<BrowseCharacters />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
