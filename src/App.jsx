import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import SignupCard from './components/SignupCard.jsx'

const App = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <h1 className="page-title">Signup</h1>
        <SignupCard />
      </main>
    </div>
  )
}

export default App
