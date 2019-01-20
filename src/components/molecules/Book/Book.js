import React from 'react';
import PropTypes from 'prop-types';
import { AmazonIcon, BookCover, BookInfo, UserPicked, Rating } from 'components';

import './Book.css';

const Book = ({ bookData, userPicked }) => {
  return (
    <div className="Book">
      <AmazonIcon amazonUrl={bookData.amazonUrl} />

      <BookCover coverImg={bookData.coverImg} title={bookData.title} />

      <div className="book-info">
        <BookInfo
          author={bookData.author}
          title={bookData.title}
          subtitle={bookData.subtitle}
          datePicked={bookData.datePicked}
        />
        <Rating book={bookData} bookId={bookData.id} />
      </div>

      <UserPicked userImg={userPicked.userImg} userNameFirst={userPicked.nameFirst} />
    </div>
  );
};

Book.propTypes = {
  bookData: PropTypes.object,
  userPicked: PropTypes.object,
};

export default Book;
