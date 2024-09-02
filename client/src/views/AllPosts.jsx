import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { getAllPostService, deletePostService } from "../services/PostServices";
import { formatRelative } from "date-fns"
import { lovePost, likePost, hugPost } from "../services/ReactionServices";
import {
  IconThumbUp,
  IconHeart,
  IconHeartHandshake,
  IconTrash,
  IconInfoHexagon,
} from "@tabler/icons-react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAllPostService()
      .then((res) => {
        setPosts(res);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [loaded]);

  const handleReaction = (id, action) => {
    switch (action) {
      case "like":
        likePost(id);
        setLoaded((prev) => !prev);
        break;
      case "love":
        lovePost(id);
        setLoaded((prev) => !prev);

        break;
      case "hug":
        hugPost(id);
        setLoaded((prev) => !prev);
        break;

      default:
        break;
    }
  };

  const RemovePost = (id) => {
    deletePostService(id)
      // setPosts(res => res.filter((post) => post._id != id))
      .then(() => {
        setPosts((posts) => posts.filter((post) => post._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="Container text-center">
        <h1 className="text-success ">All Posts</h1>
        <div className="d-flex justify-content-center">
          <div className="card border border-primary">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Message</th>
                    <th scope="col">Mood</th>
                    <th scope="col">Reactions (Like, Love, Hug)</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map(({ _id, message, mood, reactions, createdAt }) => (
                    <tr key={_id}>
                      <td className="align-middle">{message}</td>
                      <td className="align-middle">{mood}</td>
                      <td className="d-flex gap-2 align-items-center align-middle">
                        {reactions && (
                          <>
                            <div className="d-flex gap-2 align-items-center">
                              Like: {reactions.like}
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={() => handleReaction(_id, "like")}
                              >
                                <IconThumbUp />
                              </button>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              Love: {reactions.love}
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={() => handleReaction(_id, "love")}
                              >
                                <IconHeart />
                              </button>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                              Hug: {reactions.hug}
                              <button
                                className="btn btn-sm btn-primary"
                                onClick={() => handleReaction(_id, "hug")}
                              >
                                <IconHeartHandshake />
                              </button>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="align-middle">
                        {formatRelative(createdAt, new Date())}
                      </td>
                      <td className="align-middle">
                        <Link
                          className="btn btn-sm btn-info me-2"
                          to={`/posts/${_id}`}
                        >
                          <IconInfoHexagon />
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => RemovePost(_id)}
                        >
                          <IconTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllPosts;
