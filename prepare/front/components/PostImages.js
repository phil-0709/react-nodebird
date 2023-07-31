import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  if (images.length === 1) {
    return (
      <>
        <img src={images[0].src} alt={images[0].src} onClick={onZoom} />
      </>
    );
  }
  return <div>준비중 입니다...</div>;
};

PostImages.PropTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
