"use strict"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './BookList'

function App() {

  return(
    <div className="App">
      <BookList />
    </div>
  );
}

export default App
