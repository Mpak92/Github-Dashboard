import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RepositoryCard from './components/RepositoryCard/RepositoryCard';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:repOwner/:repName' element={<RepositoryCard />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
