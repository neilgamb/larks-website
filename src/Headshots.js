import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import heads from './images/heads/index';

const photos = [
    { src: heads[0], width: 2, height: 3 },
    { src: heads[1], width: 2, height: 3 },
    { src: heads[2], width: 3, height: 2 },
    { src: heads[3], width: 2, height: 3 },
    { src: heads[4], width: 2, height: 3 },
    { src: heads[5], width: 2, height: 3 },
    { src: heads[6], width: 2, height: 3 },
    { src: heads[7], width: 2, height: 3 },
    { src: heads[8], width: 2, height: 3 },
    { src: heads[9], width: 2, height: 3 },
    { src: heads[10], width: 2, height: 3 },
    { src: heads[11], width: 2, height: 3 },
    { src: heads[12], width: 2, height: 3 },
    { src: heads[13], width: 2, height: 3 },
    { src: heads[14], width: 2, height: 3 },
    { src: heads[15], width: 2, height: 3 },
    { src: heads[16], width: 2, height: 3 },
    { src: heads[17], width: 2, height: 3 },
    { src: heads[18], width: 2, height: 3 },
    { src: heads[19], width: 2, height: 3 },
    { src: heads[20], width: 2, height: 3 },
    { src: heads[21], width: 2, height: 3 },
    { src: heads[23], width: 2, height: 3 },
];

class Headshots extends Component {
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

export default Headshots;

Headshots.propTypes = {
    galleryColumns: PropTypes.number.isRequired,
};
