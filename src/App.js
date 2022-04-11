import React, { useState, useEffect } from 'react'
import { Searchbar } from './components/Searchbar/Searchbar'
import { ImageGallery } from './components/ImageGallery/ImageGallery'
import { Modal } from './components/Modal'
import { Button } from './components/Button'
import Loader from './components/Loader'
import axios from 'axios';

const API_KEY = '26096041-fcc50392af320bb0741d0ce61';

export default function App() {
  const [filter, setFilter] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [imagesArr, setImagesArr] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages(filter, curentPage);
  }, [filter, curentPage])

  const onSubmitHandle = (data) => {
    setFilter(data);
    setCurentPage(1);
    setImagesArr([]);
  };
  const currentImg = (data) => {
    setImageSrc(data);
    setShowModal(true);
  };
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  const loadMore = () => {
    setCurentPage(prevCurentPage => prevCurentPage + 1)
  }

  const fetchImages = (data, curentPage) => {
    const value = data ? data : 'Ukraine';
    setIsLoading(true);
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${value}&per_page=8&page=${curentPage}`)
      .then((response) => {
        setImagesArr(imagesArr => [...imagesArr, ...response.data.hits]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <>
      {showModal && <Modal onClose={toggleModal}>
        <img src={imageSrc} alt="" />
      </Modal>}
      {isLoading && <Loader />}
      <Searchbar onSubmit={onSubmitHandle} />
      <ImageGallery currentImg={currentImg} filerUpdate={filter} imagesArr={imagesArr} />
      <Button onClick={loadMore}>Load more</Button>
    </>
  )
}


// import React, { Component } from 'react'
// import { Searchbar } from './components/Searchbar/Searchbar'
// import { ImageGallery } from './components/ImageGallery/ImageGallery'
// import { Modal } from './components/Modal'
// import Loader from './components/Loader'
// import { Button } from './components/Button'
// import axios from 'axios';

// const API_KEY = '26096041-fcc50392af320bb0741d0ce61';

// export default class App extends Component {
//   state = {
//     filter: '',
//     imageSrc: '',
//     showModal: false,
//     imagesArr: [],
//     curentPage: 1,
//     isLoading: false,
//   }
//   componentDidMount = () => {
//     this.fetchImages();
//   };

//   componentDidUpdate = (_, prevState) => {
//     if (prevState.curentPage !== this.state.curentPage) {
//       this.fetchImages(this.state.filter);
//     } else if (prevState.filter !== this.state.filter) {
//       this.fetchImages(this.state.filter);
//     }
//   }

//   toggleModal = () => {
//     this.setState({ showModal: !this.state.showModal })
//   }

//   onSubmitHandle = (data) => {
//     console.log(data);
//     this.setState({
//       filter: data,
//       curentPage: 1,
//       imagesArr: [],
//     })
//   };

//   fetchImages = data => {
//     // const value = data ? Object.values(data) : 'Ukraine';
//     const value = data ? data : 'Ukraine';
//     this.setState({
//       isLoading: true,
//     })
//     axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${value}&per_page=8&page=${this.state.curentPage}`)
//       .then((response) => {
//         this.setState(prevSate => ({
//           imagesArr: [...prevSate.imagesArr, ...response.data.hits],
//         }))
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         this.setState({
//           isLoading: false,
//         })
//       });
//   }

//   currentImg = (data) => {
//     this.setState({
//       imageSrc: data,
//       showModal: true,
//     })
//   };

//   loadMore = () => {
//     this.setState(prevSate => ({
//       curentPage: prevSate.curentPage + 1,
//     }))
//   }

//   render() {
//     const { showModal, imageSrc, filter, imagesArr, isLoading } = this.state;

//     return (
//       <>
        // {showModal && <Modal onClose={this.toggleModal}>
        //   <img src={imageSrc} alt="" />
        // </Modal>}
        // {isLoading && <Loader />}
        // <Searchbar onSubmit={this.onSubmitHandle} />
        // <ImageGallery currentImg={this.currentImg} filerUpdate={filter} imagesArr={imagesArr} />
        // <Button onClick={this.loadMore}>Load more</Button>
//       </>
//     )
//   }
// }


