import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPageContainer from './components/mainPage/MainPageContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
