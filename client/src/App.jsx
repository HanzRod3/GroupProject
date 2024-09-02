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
