const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware.js");

// ERROR : ==> imported from wrong file
const {
  sellerRegister,
  sellerLogIn,
} = require("../controllers/sellerController.js");

const {
  productCreate,
  getProducts,
  getProductDetail,
  searchProductbyCategory,
  getSellerProducts,
  updateProduct,
  deleteProduct,
  deleteProducts,
  deleteProductReview,
  deleteAllProductReviews,
  addReview,
  getInterestedCustomers,
  getAddedToCartProducts,
} = require("../controllers/productController.js");

const {
  customerRegister,
  customerLogIn,
  getCartDetail,
  cartUpdate,
} = require("../controllers/customerController.js");

const {
  newOrder,
  getOrderedProductsBySeller,
} = require("../controllers/orderController.js");

// Seller
router.post("/SellerRegister", sellerRegister);
router.post("/SellerLogin", sellerLogIn);

// Product
router.post("/ProductCreate", productCreate);
router.get("/getSellerProducts/:id", getSellerProducts);
router.get("/getProducts", getProducts);
router.get("/getProductDetail/:id", getProductDetail);
router.get("/getInterestedCustomers/:id", getInterestedCustomers);
router.get("/getAddedToCartProducts/:id", getAddedToCartProducts);

router.put("/ProductUpdate/:id", updateProduct);
router.put("/addReview/:id", addReview);

router.get("/searchProduct/:key", searchProductbyCategory);
router.get("/searchProductbyCategory/:key", searchProductbyCategory);
router.get("/searchProductbySubCategory/:key", searchProductbyCategory);

router.delete("/DeleteProduct/:id", deleteProduct);
router.delete("/DeleteProducts/:id", deleteProducts);
// ERROR : ==> changed to put from delete as per postman collection
router.put("/deleteProductReview/:id", deleteProductReview);
// ERROR : ==> changed to delete from put
router.delete("/deleteAllProductReviews/:id", deleteAllProductReviews);

// Customer
router.post("/CustomerRegister", customerRegister);
router.post("/CustomerLogin", customerLogIn);
router.get("/getCartDetail/:id", getCartDetail);
router.put("/CustomerUpdate/:id", cartUpdate);

// Order
router.post("/newOrder", newOrder);
router.get("/getOrderedProductsByCustomer/:id", getOrderedProductsBySeller);
router.get("/getOrderedProductsBySeller/:id", getOrderedProductsBySeller);

// ERROR : ==> missing export
module.exports = router;
