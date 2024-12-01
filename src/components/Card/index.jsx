
const Card = props => {
    const { product } = props;
    return (
        <div className="flex justify-between gap-4">
            <div key={product.id} className="w-full bg-white rounded-lg mb-4 border hover:drop-shadow-lg hover:cursor-pointer transition duration-100">
                <img src={product.image} alt={product.name} className="aspect-square object-cover mb-4 rounded-md" />
                <div className="flex justify-between px-4">
                    <h2 className="text-md font-semibold mb-2">{product.name}</h2>
                    <p className="text-sm text-gray-700 mb-2">${product.price}</p>
                </div>
                <div className="flex justify-between px-4">
                    <p className="text-sm text-gray-400">{product.description}</p>
                    <p className="text-sm text-gray-400">{product.colors.length} colors</p>
                </div>
            </div>
        </div>
    );
};

export default Card