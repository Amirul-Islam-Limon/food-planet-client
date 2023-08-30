import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-section bg-fixed text-white">
            <div className="hero-overlay bg-opacity-60  px-16 py-16">
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"Featured Item"}
                >
                </SectionTitle>
                <div className="md:flex items-center py-8 px-16">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <h4 className="text-2xl">March 20, 2023</h4>
                        <h4 className="text-2xl uppercase">WHERE CAN I GET SOME?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white hover:bg-[#BB8506] hover:border-[#BB8506] mt-8">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;