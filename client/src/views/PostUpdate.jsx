import { useState, useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { getPostByIdService, updatePostService } from "../services/PostServices";

const PostUpdate = () => {

    const [FormData, setFormData] = useState({})
    const [errors, setErrors] = useState({})
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getPostByIdService(id)
            .then(res => setFormData(res))
            .catch(error => console.log(error))
    },[])

    const updatePostData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const updatePost = e => {
        e.preventDefault()
        updatePostService(FormData)
            .then(() => (navigate('/view')))
            .catch(error => setErrors(error.response.data.errors))

    }

    return (<>
        <main className=" bg-dark ">
        <div
            className="card  text-center bg-dark mx-auto"
            style={{ width: 660 }}
        >
        <div className="card-body">
            <h5 className="card-title text-light">Post Update </h5>
            <form onSubmit={updatePost}>
                <div className="form-floating mb-3">
                <input
                  type="text"
                  name="message"
                  className="form-control"
                  placeholder="Message:"
                  value={FormData.message}
                  onChange={updatePostData}
                />
                <label>Message:</label>
                {errors?.message && <p>{errors.message.message}</p>}
              </div>
              <div className="form-floating mb-3">
                <select
                  name="mood"
                  onChange={updatePostData}
                  className="form-select"
                  value={FormData.mood}
                >
                  <option value="" hidden disabled>
                    Select a Mood
                  </option>
                  <option value="happy">happy</option>
                  <option value="sad">sad</option>
                  <option value="worried">worried</option>
                  <option value="anxious">anxious</option>
                  <option value="content">content</option>
                  <option value="overjoyed">overjoyed</option>
                  <option value="overwhelmed">overwhelmed</option>
                </select>
                <label>Tell us what you are feeling?</label>
                {errors?.mood && <p>{errors.mood.message}</p>}
              </div>
              <button type="submit" className="mt-4 btn btn-success">
                Update Post
              </button>
            </form>
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
      </main>
    </>)
}

export default PostUpdate