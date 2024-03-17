import './Products.css';
import pro1 from "../../assets/images/pro1.jpg";
import pro2 from "../../assets/images/pro2.jpg";
import pro3 from "../../assets/images/pro3.jpg";

const Products = () => {
    const products = [
        { id: 1, title: 'Product 1', description: 'Description 1', image: pro1 },
        { id: 2, title: 'Product 2', description: 'Description 2', image: pro2 },
        { id: 3, title: 'Product 3', description: 'Description 3', image: pro3 },

    ];

    return (
        <div className='prod-container'>
            <h1 className='text-center'>Unlock Your Potential with Our Premium Selection</h1>
            <div className="container mt-5">

                <div className="card-container ">
                    {products.map(product => (
                        <div className="card shadow-lg" style={{ width: '20rem' }} key={product.id}>
                            <img className="card-img-top" src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <div className="btn-center">
                                    <a href="#" className="btn btn-success text-center py-2 px-3 my-2">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
