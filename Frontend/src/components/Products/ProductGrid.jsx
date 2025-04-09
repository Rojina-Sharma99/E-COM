import { Link } from "react-router-dom";


const ProductGrid = ({products}) => {
    console.log(products);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg-grid-cols-4">
    {products.map((product, index)=> (
        <Link to= {`/product/${product._id}`}>
            <div className="py-4 bg-white rounded-lg">
                <div className="w-full mb-4 h-96">
                    <img className="object-cover w-full h-full rounded-lg"
                        src={product.images[0].url}
                        alt={product.images[0].altText || product.name}
                         />
                </div>
                <h3 className="mb-2 text-sm">{product.name}</h3>
                <p className="text-sm font-medium tracking-tighter text-gray-500">
                    {product.price}
                </p>

            </div>
        </Link>

    ))

    }
    </div>
  )
}

export default ProductGrid