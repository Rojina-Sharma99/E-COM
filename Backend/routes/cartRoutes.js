const express = require("express");
const Product = require("../models/Product");
const Cart = require("../models/Cart");

const router = express.Router();

const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId });
  }
};

//create cart @route POST /api/cart
//@description: add a product to the cart for the guest or logged in user
//@access public

router.post("/", async (req, res) => {
  console.log("Post /api/cartcalled");

  const { productId, quantity, size, color, guestId, userId } = req.body;
  try{
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
  
    let cart = await getCart(userId, guestId);
  
    if (cart) {
      console.log("should come here", userId, guestId);
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );
      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        //add a new product
        cart.products.push({
          productId,
          name: product.name,
          image: product.images.url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }
      //recalculate total pice
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
  
      await cart.save();
      return res.status(200).json(cart);
    } else {
        //creatye a new cart for guest user
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch(error){
    console.error(error);
    res.status(500).json({message: "Server Error"})

  }

  
});

module.exports = router;
