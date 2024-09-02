import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getPostByIdService,
  deletePostService,
} from "../services/PostServices";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getPostByIdService(id)
      .then((res) => setPost(res))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    console.log("delete!!!!");
    deletePostService(id)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="Container">
      <div className="card border border-primary">
        <div className="card-body">
          <div>
            <h1>{post.message}</h1>
            <p>Mood: {post.mood}</p>
            {post.reactions && (
              <p>
                {" "}
                Reactions: <br />
                Like: {post.reactions.like} <br />
                Love: {post.reactions.love} <br />
                Hug: {post.reactions.hug}{" "}
              </p>
            )}
            <Link
              to={`/posts/update/${post._id}`}
              className="link-success me-4"
            >
              Update
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(post._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div
        id="carouselExample"
        className="carousel slide mx-auto"
        style={{ width: 225 }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../src/images/confused.jpg"
              className="d-block img-fluid"
              alt="Marketing"
            ></img>
          </div>

          <div className="carousel-item">
            <img
              src="../src/images/cool.jpg"
              className="d-block img-fluid"
              alt="Marketing"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="../src/images/download.jpg"
              className="d-block img-fluid"
              alt="Marketing"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="../src/images/flirty.jpg"
              className="d-block img-fluid"
              alt="Marketing"
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default PostDetails;
