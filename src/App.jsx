import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import ContentDetailPage from './pages/ContentDetailPage'
import VoiceSearchPage from './pages/VoiceSearchPage'
import RecommendationPage from './pages/RecommendationPage'
import { Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/content" element={<ContentDetailPage />} />
        <Route path="/recommendation" element={<RecommendationPage />} />
      </Route>
      <Route path="/search" element={<VoiceSearchPage />} />
    </Routes>
  )
}

export default App
