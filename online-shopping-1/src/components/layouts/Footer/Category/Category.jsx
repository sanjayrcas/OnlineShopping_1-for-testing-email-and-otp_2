import React from 'react';
import './Category.css';
import './MediaQCategory.css';
import {Link} from 'react-router-dom';
// import categoryImg1 from '../../../assets/categories Img/categories-men/4-5-years-i580028-cavio-original-imagxhhzpkdkknxb.jpeg';
// import categoryImg2 from '../../../assets/categories Img/categories-men/polos-1.jpg';
// import categoryImg3 from '../../../assets/categories Img/categories-men/t-shirts-1.jpg';
// import categoryImg4 from '../../../assets/categories Img/categories-men/jeans-1.jpg';
// import categoryImg5 from '../../../assets/categories Img/categories-men/Innerwear-1.jpeg';
// import categoryImg6 from '../../../assets/categories Img/categories-women/WomenClothing-1.jpg';
// import categoryImg7 from '../../../assets/categories Img/categories-women/WesternWear-1.jpg';
// import categoryImg8 from '../../../assets/categories Img/categories-women/Dupattas._Ethnic Wear-1.png';
// import categoryImg9 from '../../../assets/categories Img/categories-women/Lingerie & Nightwear-1.png';
// import categoryImg10 from '../../../assets/categories Img/categories-women/top-brand-1.png';
// import categoryImg11 from '../../../assets/categories Img/categories-men/baby-boy-1.jpg';
// import categoryImg12 from '../../../assets/categories Img/categories-women/baby-girl-1.jpg';
import categoryImg1 from './Categories Img/categories-men/4-5-years-i580028-cavio-original-imagxhhzpkdkknxb.jpeg';
import categoryImg2 from './Categories Img/categories-men/polos-1.jpg';
import categoryImg3 from './Categories Img/categories-men/t-shirts-1.jpg';
import categoryImg4 from './Categories Img/categories-men/jeans-1.jpg';
import categoryImg5 from './Categories Img/categories-men/Innerwear-1.jpeg';
import categoryImg6 from './Categories Img/categories-women/WomenClothing-1.jpg';
import categoryImg7 from './Categories Img/categories-women/WesternWear-1.jpg';
import categoryImg8 from './Categories Img/categories-women/Dupattas._Ethnic Wear-1.png';
import categoryImg9 from './Categories Img/categories-women/Lingerie & Nightwear-1.png';
import categoryImg10 from './Categories Img/categories-women/top-brand-1.png';
import categoryImg11 from './Categories Img/categories-men/baby-boy-1.jpg';
import categoryImg12 from './Categories Img/categories-women/baby-girl-1.jpg';

export default function Category() {
    const categoryDatas = [
        {
            categoryImg : categoryImg1,
            categoryName : `Men's Clothing`
        },
        {
            categoryImg : categoryImg2,
            categoryName : `T-shirts & Polos`
        },
        {
            categoryImg : categoryImg3,
            categoryName : 'Shirts'
        },
        {
            categoryImg : categoryImg4,
            categoryName : 'Jeans'
        },
        {
            categoryImg : categoryImg5,
            categoryName : 'Innerwear'
        },
        {
            categoryImg : categoryImg6,
            categoryName : `Women's Clothing`
        },
        {
            categoryImg : categoryImg7,
            categoryName : 'Western Wear'
        },
        {
            categoryImg : categoryImg8,
            categoryName : 'Ethnic Wear'
        },
        {
            categoryImg : categoryImg9,
            categoryName : `Lingerie & Nightwear`
        },
        {
            categoryImg : categoryImg10,
            categoryName : 'Tops Brands'
        },
        {
            categoryImg : categoryImg11,
            categoryName : `Boy's Clothing Sets`
        },
        {
            categoryImg : categoryImg12,
            categoryName : 'Girls Clothing Sets'
        },
    ]
    return (
        <div className='category-main mt-3'>
            <div className="category-container">
                <h5 className="category-heading fw-bold py-3 ps-3">Shop by Category</h5>
                <div className="row category-row mx-2 mt-3">
                    {
                        categoryDatas.map((item, index)=>{
                            return(
                                <div key={index} className="col-6 col-sm-3 col-lg-2 col-xl-1 category-col-main bg-inf border-0 mb-2 px-0">
                                    <div className="category-col-container border mx-1 bg-white" style={{backgroundColor: '#b3b5b'}}>
                                        <div className="category-img-container d-flex justify-content-center rounded-circle overflow-hidden bg-white">
                                            <Link>
                                                <img src={item.categoryImg} alt="category img" className="category-img mt-2 px-xxl-2 px-xl-3" />
                                            </Link>
                                        </div>
                                        <div className="category-name-container text-center">
                                            <Link className='text-decoration-none text-black'><p className="category-name m-0 my-1 bg-dange d-flex align-items-center justify-content-center fw-semibold">{item.categoryName}</p></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
