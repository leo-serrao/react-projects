import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Links from './Links'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
