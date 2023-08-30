import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slideImage1 from '../../../../src/assets/home/05.png'
import slideImage2 from '../../../../src/assets/home/02.jpg'
import slideImage3 from '../../../../src/assets/home/03.PNG'
import slideImage4 from '../../../../src/assets/home/04.jpg'
import slideImage5 from '../../../../src/assets/home/01.jpg'
import slideImage6 from '../../../../src/assets/home/06.png'


const Banner = () => {
    return (
        <Carousel className="text-center">
                <div>
                    <img src={slideImage1} />
                </div>
                <div>
                    <img src={slideImage2} />
                </div>
                <div>
                    <img src={slideImage3} />
                </div>
                <div>
                    <img src={slideImage4} />
                </div>
                <div>
                    <img src={slideImage5} />
                </div>
                <div>
                    <img src={slideImage6} />
                </div>
            </Carousel>
    );
};

export default Banner;