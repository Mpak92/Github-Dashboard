import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPageContainer from './components/MainPage/MainPageContainer';
import RepositoryCard from './components/RepositoryCard/RepositoryCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:repName' element={<RepositoryCard />} />
        <Route path='/' element={<MainPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
