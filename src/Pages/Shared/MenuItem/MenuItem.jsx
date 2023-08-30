const MenuItem = ({ item }) => {
    // console.log(item)
    const { name, price, image, recipe } = item;
    return (
        <div className="flex space-x-4 items-center">
            <img style={{borderRadius:"0 200px 200px 200px", height:"104px"}} className="w-[118px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{ name} --------------</h3>
                <p>{ recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
            
        </div>
    );
};

export default MenuItem;