import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import kids from './images/kids/index';

const photos = [
  { src: kids[0], width: 2, height: 3 },
  { src: kids[1], width: 2, height: 3 },
  { src: kids[2], width: 3, height: 2 },
  { src: kids[3], width: 2, height: 3 },
  { src: kids[4], width: 2, height: 3 },
  { src: kids[5], width: 3, height: 2 },
  { src: kids[6], width: 2, height: 3 },
  { src: kids[7], width: 2, height: 3 },
  { src: kids[8], width: 2, height: 3 },
  { src: kids[9], width: 2, height: 3 },
  { src: kids[10], width: 2, height: 3 },
  { src: kids[11], width: 3, height: 2 },
  { src: kids[12], width: 2, height: 3 },
  { src: kids[13], width: 2, height: 3 },
  { src: kids[14], width: 3, height: 2 },
  { src: kids[15], width: 3, height: 2 },
  { src: kids[16], width: 2, height: 3 },
  { src: kids[17], width: 2, height: 3 },
  { src: kids[18], width: 2, height: 3 },
  { src: kids[19], width: 3, height: 2 },
  { src: kids[20], width: 3, height: 2 },
  { src: kids[21], width: 2, height: 3 },
  { src: kids[22], width: 2, height: 3 },
  { src: kids[23], width: 3, height: 2 },
  { src: kids[24], width: 2, height: 3 },
  { src: kids[25], width: 2, height: 3 },
  { src: kids[26], width: 3, height: 2 },
  { src: kids[27], width: 2, height: 3 },
  { src: kids[28], width: 3, height: 2 },
  { src: kids[29], width: 2, height: 3 },
  { src: kids[30], width: 2, height: 3 },
  { src: kids[31], width: 2, height: 3 },
  { src: kids[32], width: 2, height: 3 },
  { src: kids[33], width: 2, height: 3 },
  { src: kids[34], width: 2, height: 3 },
  { src: kids[35], width: 2, height: 3 },
  { src: kids[36], width: 2, height: 3 },
  { src: kids[37], width: 2, height: 3 },
  { src: kids[38], width: 2, height: 3 },
  { src: kids[39], width: 2, height: 3 },
  { src: kids[40], width: 3, height: 2 },
  { src: kids[41], width: 3, height: 2 },
  { src: kids[42], width: 3, height: 2 },
  { src: kids[43], width: 2, height: 3 },
  { src: kids[44], width: 3, height: 2 },
  { src: kids[45], width: 2, height: 3 },
  { src: kids[46], width: 2, height: 3 },
  { src: kids[47], width: 2, height: 3 },
  { src: kids[48], width: 2, height: 3 },
  { src: kids[49], width: 2, height: 3 },
  { src: kids[50], width: 2, height: 3 },
  { src: kids[51], width: 2, height: 3 },
  { src: kids[52], width: 2, height: 3 },
  { src: kids[53], width: 2, height: 3 },
  { src: kids[54], width: 2, height: 3 },
  { src: kids[55], width: 2, height: 3 },
  { src: kids[56], width: 2, height: 3 },
  { src: kids[57], width: 2, height: 3 },
  { src: kids[58], width: 2, height: 3 },
  { src: kids[59], width: 2, height: 3 },
];

class Children extends Component {
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
        <Gallery photos={this.randomize(photos)} columns={galleryColumns} onClick={this.openLightbox} />
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

export default Children;

Children.propTypes = {
  galleryColumns: PropTypes.number.isRequired,
};
