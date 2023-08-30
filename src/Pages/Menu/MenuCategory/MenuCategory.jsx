import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coveredPhoto}) => {
    return (
        <div>
            <div className="">
                {
                    title && <Cover bgImage={coveredPhoto} tittle={title}></Cover>
                }
            </div>
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div> 
            <div className="text-center mb-8">
                <Link to={`/order/${title?title:"offered"}`} className="btn btn-outline border-0 border-b-4 text-[#BB8506] hover:bg-[#1F2937] hover:border-[#1F2937] hover:text-[#BB8506] mt-8">Order Your Favorite Food</Link>
            </div>
        </div>
    );
};

export default MenuCategory;
