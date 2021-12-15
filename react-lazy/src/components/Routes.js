import React, {Suspense} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

const About   = React.lazy(() => import('../pages/About'))
const Contact = React.lazy(() => import('../pages/Contact'))
const Home    = React.lazy(() => import('../pages/Home'))
import Layout from '../layouts/App'

const RoutesComp = () => (
  <Suspense fallback={<h1>Carregando</h1>}>
  <BrowserRouter basename="react-lazy">
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Suspense>
)

export default RoutesComp