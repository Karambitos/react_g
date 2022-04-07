import React from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem'
import styles from '../ImageGallery/ImageGallery.module.css';


function ImageGallery({ currentImg, imagesArr }) {
    return (
        <ul className={styles.gallery} >
            <ImageGalleryItem currentImg={currentImg} imagesArr={imagesArr} />
        </ul>
    )
}

export { ImageGallery }