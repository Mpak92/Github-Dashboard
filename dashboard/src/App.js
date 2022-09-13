import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPageContainer from './components/MainPage/MainPageContainer';
import RepositoryCardContainer from './components/RepositoryCard/RepositoryCardContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:repOwner/:repName' element={<RepositoryCardContainer />} />
        <Route path='/' element={<MainPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
