import { Component } from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem'
import styles from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {

    render() {
        return (
            <ul className={styles.gallery} >
                <ImageGalleryItem currentImg={this.props.currentImg} imagesArr={this.props.imagesArr} />
            </ul>
        )
    }
}
