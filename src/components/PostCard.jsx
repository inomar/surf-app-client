import React from 'react';

const PostCard = (props) => {
  const { id, title, image, date, user } = props.post;

  return(
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
            <p>
              {user.name}
              <br />
              <span>{user.experience}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard;
