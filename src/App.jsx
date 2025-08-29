// import { useState } from 'react'

import Button from './components/atoms/Button'
import Navigation from './components/molecules/Navigation'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <DefaultLayout>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>

        {/* </DefaultLayout> */}
      </Routes>
  )
}

export default App
