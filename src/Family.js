import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import family from './images/family/index';

const photos = [
  { src: family[0], width: 3, height: 2 },
  { src: family[1], width: 2, height: 3 },
  { src: family[2], width: 2, height: 3 },
  { src: family[3], width: 3, height: 2 },
  { src: family[4], width: 2, height: 3 },
  { src: family[5], width: 2, height: 3 },
  { src: family[6], width: 3, height: 2 },
  { src: family[7], width: 2, height: 3 },
  { src: family[8], width: 3, height: 2 },
  { src: family[9], width: 2, height: 3 },
  { src: family[10], width: 3, height: 2 },
  { src: family[11], width: 3, height: 2 },
  { src: family[12], width: 2, height: 3 },
  { src: family[13], width: 3, height: 2 },
  { src: family[14], width: 3, height: 2 },
  { src: family[15], width: 3, height: 2 },
  { src: family[16], width: 3, height: 2 },
  { src: family[17], width: 3, height: 2 },
  { src: family[18], width: 2, height: 3 },
  { src: family[19], width: 3, height: 2 },
  { src: family[20], width: 3, height: 2 },
  { src: family[21], width: 3, height: 2 },
];

class Family extends Component {
  state = { currentImage: 0 };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };
  randomize = (photoArray) => {
    let currentIndex = photoArray.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = photoArray[currentIndex];
      photoArray[currentIndex] = photoArray[randomIndex];
      photoArray[randomIndex] = temporaryValue;
    }

    return photoArray;
  };
  render() {
    const { galleryColumns } = this.props;
    return (
      <Fragment>
        <Gallery
          photos={this.randomize(photos)}
          columns={galleryColumns}
          onClick={this.openLightbox}
        />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Fragment>
    );
  }
}

export default Family;

Family.propTypes = {
  galleryColumns: PropTypes.number.isRequired,
};
