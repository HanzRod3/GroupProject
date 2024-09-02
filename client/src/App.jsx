import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { PostForm } from "./views/PostForm";
import BottomNav from "./components/BottomNav";
import AllPosts from "./views/AllPosts";
import PostDetails from "./views/PostDetails";

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
