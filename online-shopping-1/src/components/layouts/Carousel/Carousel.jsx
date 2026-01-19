import './Carousel.css';
import bannerImg1 from './images/Banner-img1.jpg';
import bannerImg2 from './images/Banner-img2.jpg';

export default function Carousel() {

    return (
        <div>
            {/* carousel */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src={bannerImg1} className="banner-img1 d-block w-100" alt="Banner 1" />
                    </div>
                    <div className="carousel-item" data-bs-interval={10000}>
                        <img src={bannerImg2} className="banner-img2 d-block w-100" alt="Banner 2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* carousel */}
        </div>
    )
}
