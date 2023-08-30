import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const { name, price, image, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const [ cart, isLoading ,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = (clickedItem) => {
        console.log(clickedItem);
        if (user && user.email) {
            const orderItem = {menuItemId:_id, userEmail:user.email,name, price, image}
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch(); // refetch to update the number of the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added successfully on the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        
                    }
                });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please login to order the food',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go to Login Page',
                footer: `<p className="text-red-500">You can't add food without login</p>` 
            })
                .then(result => {
                    if (result.isConfirmed) {
                        navigate("/login", {state:{ from: location }});
                }
            })

            
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-[#111827] text-white absolute right-5 top-4 px-3 py-0">${ price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{ name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                {/* <div className="card-actions justify-center">
                <button className="btn btn-primary">Add To Cart</button>
                </div> */}
                <div className="text-center mb-8">
                <Link to={""} onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-[#BB8506] hover:bg-[#1F2937] hover:border-[#BB8506] hover:text-[#BB8506] mt-8">Add To Cart</Link>
            </div>
            </div>
        </div>
    );
};

export default FoodCard;