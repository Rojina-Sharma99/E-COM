import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";


const placeholderProducts = [
  {
    _id: "1",
    name: "Product1",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },

  {
    _id: "2",
    name: "Product2",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: "3",
    name: "Product3",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: "4",
    name: "Product4",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: "5",
    name: "Product5",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },

  {
    _id: "6",
    name: "Product6",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: "7",
    name: "Product7",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: "8",
    name: "Product8",
    price: "$100",
    images: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/**Best seller section */}
      <h2 className="mb-4 text-3xl font-bold text-center">BestSeller</h2>
      <ProductDetails/>


      {/**Top Wears for Women */}
      <div className="container mx-auto">
        <h2 className="mb-4 text-3xl text-center">Top Wears For Women</h2>
        <ProductGrid products={placeholderProducts}/>
      </div>

      {/**Featured collection components */}
      <FeaturedCollection/>

      {/**Add features section here */}
      <FeaturesSection/>
    </div>

  );
};

export default Home;
