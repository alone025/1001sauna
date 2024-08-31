import ThumbsGallery from "../components/imageSlider/imageSlider"
import Videoplayer from "../components/videPlayer/videoplayer";


const Product = () => {

    const images = [
        { id: 1, src: '/swipperPictures/slide-1.jpg', alt: 'Image 1' },
        { id: 2, src: '/swipperPictures/slide-2.jpg', alt: 'Image 2' },
        { id: 3, src: '/swipperPictures/slide-3.jpg', alt: 'Image 3' },
        { id: 4, src: '/swipperPictures/slider-4.jpg', alt: 'Image 4' },
      ];

      
  return (
    <div className="product-main-page">
        <div className="left-cont">
            <div className="mni-cona">

            </div>
        </div>
        <div className="right-cont">
            <div className="top-head">
                <div className="lth">
                    <ThumbsGallery images={images} />
                    <Videoplayer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product