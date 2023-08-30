import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slideImage1 from '../../../../src/assets/home/slide1.jpg'
import slideImage2 from '../../../../src/assets/home/slide2.jpg'
import slideImage3 from '../../../../src/assets/home/slide3.jpg'
import slideImage4 from '../../../../src/assets/home/slide4.jpg'
import slideImage5 from '../../../../src/assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section className='my-10'>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <>
             <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={false}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                    <SwiperSlide>
                        <img src={slideImage1} alt="" />
                        <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage2} alt="" />
                        <h3 className='text-4xl uppercase text-center text-white -mt-16'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage3} alt="" />
                        <h3 className='text-4xl uppercase text-center text-white -mt-16'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage4} alt="" />
                        <h3 className='text-4xl uppercase text-center text-white -mt-16'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage5} alt="" />
                        <h3 className='text-4xl uppercase text-center text-white -mt-16'>V                                 egetable</h3>
                    </SwiperSlide>
            </Swiper>   
            </>
        </section>
    );
};

export default Category;