import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import reviewIcon from '../../../assets/home/quote-left-solid.svg'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
        })
    },[])
    return (
        <section className="py-8">
            <SectionTitle
                subHeading={"What our Clients say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                        key={review._id}
                        >
                            <div className="text-center m-x-24 m-y-20">
                                <div className="flex justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        // onChange={setRating}
                                        />
                                </div>
                                <div className="flex justify-center py-5">
                                    <img className="w-24" src={reviewIcon} alt="" />
                                </div>
                                <p>{review.details}</p>
                                <h3 className="text-2xl pt-2 text-[#CD9003]">{ review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                    
                </Swiper>
            </>
        </section>
    );
};

export default Testimonials;