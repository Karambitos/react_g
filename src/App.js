import React, { Component } from 'react'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { Modal } from './components/Modal'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import axios from 'axios';

const API_KEY = '26096041-fcc50392af320bb0741d0ce61';

export default class App extends Component {
  state = {
    filter: '',
    imageSrc: '',
    showModal: false,
    imagesArr: [],
    curentPage: 1,
    isLoading: false,
  }
  componentDidMount = () => {
    this.fetchImages();
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.curentPage !== this.state.curentPage) {
      this.fetchImages(this.state.filter);
    } else if (prevState.filter !== this.state.filter) {
      this.fetchImages(this.state.filter);
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  onSubmitHandle = (data) => {
    console.log(data);
    this.setState({
      filter: data,
      curentPage: 1,
      imagesArr: [],
    })
  };

  fetchImages = data => {
    const value = data ? Object.values(data) : 'Ukraine';
    this.setState({
      isLoading: true,
    })
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${value}&per_page=8&page=${this.state.curentPage}`)
      .then((response) => {
        this.setState(prevSate => ({
          imagesArr: [...prevSate.imagesArr, ...response.data.hits],
        }))
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        })
      });
  }

  currentImg = (data) => {
    this.setState({
      imageSrc: data,
      showModal: true,
    })
  };

  loadMore = () => {
    this.setState(prevSate => ({
      curentPage: prevSate.curentPage + 1,
    }))
  }

  render() {
    const { showModal, imageSrc, filter, imagesArr, isLoading } = this.state;

    return (
      <>
        {showModal && <Modal onClose={this.toggleModal}>
          <img src={imageSrc} alt="" />
        </Modal>}
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmitHandle} />
        {/* <Searchbar /> */}
        <ImageGallery currentImg={this.currentImg} filerUpdate={filter} imagesArr={imagesArr} />
        <Button onClick={this.loadMore}>Load more</Button>
      </>
    )
  }
}


