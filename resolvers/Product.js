Product = {
  category: ({ categoryId }, args, { db }) =>
    db.categories.find((category) => category.id === categoryId),
  reviews: ({ id }, args, { db }) => db.reviews.filter((review) => review.productId === id),
};

module.exports = { Product };
