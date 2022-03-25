import React from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem'
import styles from '../ImageGallery/ImageGallery.module.css';


export default function ImageGallery({ currentImg, imagesArr }) {
    return (
        <ul className={styles.gallery} >
            <ImageGalleryItem currentImg={currentImg} imagesArr={imagesArr} />
        </ul>
    )
}
// export class ImageGallery extends Component {
//     render() {
//         return (
//             <ul className={styles.gallery} >
//                 <ImageGalleryItem currentImg={this.props.currentImg} imagesArr={this.props.imagesArr} />
//             </ul>
//         )
//     }
// }
