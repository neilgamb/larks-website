import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import home from './images/home/index';

const photos = [
  { src: home[0], width: 3, height: 2 },
  { src: home[1], width: 2, height: 3 },
  { src: home[2], width: 2, height: 3 },
  { src: home[3], width: 2, height: 3 },
  { src: home[4], width: 2, height: 3 },
  { src: home[5], width: 3, height: 2 },
  { src: home[6], width: 3, height: 2 },
  { src: home[7], width: 2, height: 3 },
  { src: home[8], width: 2, height: 3 },
  { src: home[9], width: 2, height: 3 },
  { src: home[10], width: 2, height: 3 },
  { src: home[11], width: 2, height: 3 },
  { src: home[12], width: 3, height: 2 },
  { src: home[13], width: 2, height: 3 },
  { src: home[14], width: 2, height: 3 },
  { src: home[15], width: 3, height: 2 },
  { src: home[16], width: 2, height: 3 },
  { src: home[17], width: 2, height: 3 },
  { src: home[18], width: 2, height: 3 },
];

class Home extends Component {
  state = { currentImage: 0, galleryPhotos: photos };

  componentWillMount = () => {
    this.setState({ galleryPhotos: this.randomize(photos) });
  };

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
    const array = photoArray;
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    const { galleryColumns } = this.props;
    const { galleryPhotos } = this.state;

    return (
      <Fragment>
        <Gallery photos={galleryPhotos} columns={galleryColumns} onClick={this.openLightbox} />
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

export default Home;

Home.propTypes = {
  galleryColumns: PropTypes.number.isRequired,
};
