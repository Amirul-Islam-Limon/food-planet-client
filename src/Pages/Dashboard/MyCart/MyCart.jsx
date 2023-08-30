import useCart from "../../../hooks/useCart";
import { BsFillTrashFill } from "react-icons/bs";
import Swal from 'sweetalert2'


const MyCart = () => {
    const [cart, isLoading, refetch] = useCart();
    const totalPrice = cart.reduce(((pre, current) => pre + current.price), 0);
  console.log(cart);
  
  const deleteItemFromTotalOrder = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(result => {
            if (result.deletedCount > 0) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been deleted',
                showConfirmButton: false,
                timer: 1500
              })
            }
          });
        console.log(id);
      }
    })
  }
    return (
        
        <div className="w-5/6">
            <div className="uppercase font-semibold flex justify-evenly mb-8">
                <h3 className="text-2xl">Total Orders: { cart.length}</h3>
                <h3 className="text-2xl">Total Price: { "$ " + Math.ceil(totalPrice)}</h3>
                <button className="btn bg-[#D1A054] text-white btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>#</label>
                    </th>
                    <th className="text-center">Item Image</th>
                    <th>Item Name</th>
                    <th className="text-center">Price</th>
                    <th>Action</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index )=> <tr
                            key={item._id}>
                            <th>
                              <label>
                                {index+ 1}
                              </label>
                            </th>
                            <td>
                              <div className="text-center">
                                <div className="avatar">
                                  <div className="mask mask-squire w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                                {item.name}                  
                            </td>
                            <td className="text-center">${ item.price}</td>
                            <th>
                              <button onClick={()=>deleteItemFromTotalOrder(item._id)} className="btn btn-ghost btn-sm bg-red-700 text-white"><BsFillTrashFill/></button>
                            </th>
                          </tr>)                    
                    }
                </tbody>    
              </table>
            </div>
        </div>
        
    );
};

export default MyCart;
