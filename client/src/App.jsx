<<<<<<< HEAD
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { PostForm } from "./components/PostForm";
import BottomNav from "./components/BottomNav";
import AllPosts from "./components/AllPosts";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <>
      <Header />
      <div className="py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<AllPosts />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
      <BottomNav />
    </>
  );
}

export default App;
=======
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import PostForm from './views/PostForm'
import AllPosts from './views/AllPosts'
import PostInfo from './views/PostInfo'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path={'/'} element={<PostForm/>}/>
      <Route path={'/dashboard'} element={<AllPosts/>}/>
      <Route path={'/post/info'} element={<PostInfo/>}/>
    </Routes>
    </>
  )
}

export default App
>>>>>>> 229d48a5a3afd846503ff54ff8b32894f7e20a59
