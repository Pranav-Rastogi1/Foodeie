import { useState } from 'react'
import Resturant from './components/Resturant.jsx'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './components/Home.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
// import RestaurantMenu from './components/rest/RestaurantMenu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Resturant />} />
          <Route path="/city/pune/:id" element={<RestaurantMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
