import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from "../../../assets/menu/banner3.jpg"
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertsCoverPhoto from '../../../assets/menu/dessert-bg.jpeg';
import pizzaCoveredPhoto from '../../../assets/menu/pizza-bg.jpg';
import saladsCoveredPhoto from '../../../assets/menu/salad-bg.jpg'
import soupsCoveredPhoto from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();

    const desserts = menu?.filter(item => item.category === "dessert");
    const pizza = menu?.filter(item => item.category === "pizza");
    const salads = menu?.filter(item => item.category === "salad");
    const soups = menu?.filter(item => item.category === "soup");
    const offered = menu?.filter(item => item.category === "offered");
    
    return (
        <div>
            <Helmet>
                <title>Food Planet | Menu</title>
            </Helmet>
            <Cover bgImage={menuBg} tittle="Our Menu"></Cover>
            <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"}>

            </SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title={"desserts"} coveredPhoto={dessertsCoverPhoto}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} coveredPhoto={pizzaCoveredPhoto}></MenuCategory>
            <MenuCategory items={salads} title={"salads"} coveredPhoto={saladsCoveredPhoto}></MenuCategory>
            <MenuCategory items={soups} title={"soups"} coveredPhoto={soupsCoveredPhoto}></MenuCategory>
            
        </div>
    );
};

export default Menu;