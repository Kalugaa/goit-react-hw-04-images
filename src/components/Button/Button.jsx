import React from 'react';

const Button = props => {
  const { onLoadMore } = props;
  return (
    <div className="Button-wrapper">
      <button className="Button" onClick={onLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default Button;
