import React from 'react'
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';


function ImageGalleryItem({ imagesArr, currentImg }) {
    const onClick = (event) => {
        currentImg(event.target.src)
    }
    return (
        <>
            {
                imagesArr.map(({ largeImageURL, id, tags }) => {
                    return <li key={id} className={styles.galleryItem} onClick={onClick}>
                        <img src={largeImageURL} alt={tags} />
                    </li>
                })
            }
        </>
    )
}

export { ImageGalleryItem }