import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  const { id, title, image, date, user } = props.post;

  return(
    <Link to={`/post/${id}`}>
      <div className="box">
        <div className="p-postCardHead">
          <figure className="image is-5by4">
            <img src={image} alt="" className="p-postCard__image u-shadow" />
          </figure>
          <h3 className="p-postCard__title title is-4">{title}</h3>
        </div>
        <div className="media p-postCardBody">
          <figure className="media-left">
            <p className="image is-48x48">
              <img src={user.image} alt="" className="is-rounded u-shadow" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="p-postCardBody__title">
                {user.name}
                <br />
                <span className="p-postCardBody__lead">{user.experience}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard;
