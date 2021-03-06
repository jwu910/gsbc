import React, { useContext } from 'react';
import { Image, Transformation } from 'cloudinary-react';

import { UsersContext } from '../../../providers/UsersProvider';

import './UserPicked.scss';

const UserPicked = ({ userId }) => {
  const users = useContext(UsersContext);

  const userWhoPickedBook = users.find(user => userId === user.id);

  const { userImg, nameFirst } = userWhoPickedBook;

  const imgFilename = userImg || 'defaultuser_tqu61h';

  return (
    <div className="UserPicked">
      <Image
        alt={nameFirst}
        className="img-fluid user-img"
        cloudName="gsbc"
        publicId={`${imgFilename}.png`}
        width="100"
      >
        <Transformation crop="fill" gravity="face" height="100" quality="auto:eco" radius="max" width="100" />
      </Image>
      <span className="user-info">Picked By: </span>
      <span className="user-name">{nameFirst}</span>
    </div>
  );
};

export default UserPicked;
