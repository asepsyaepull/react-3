import Card from '../Card';

const Products = ({ productList }) => {
    return (
        <div className="flex gap-8">
            {productList.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products