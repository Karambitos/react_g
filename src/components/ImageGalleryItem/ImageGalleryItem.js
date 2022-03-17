import { Component } from 'react'
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    onClick = (event) => {
        this.props.currentImg(event.target.src)
    }

    render() {
        return (
            <>
                {
                    this.props.imagesArr.map(({ largeImageURL, id, tags }) => {
                        return <li key={id} className={styles.galleryItem} onClick={this.onClick}>
                            <img src={largeImageURL} alt={tags} />
                        </li>
                    })
                }
            </>
        )
    }
}