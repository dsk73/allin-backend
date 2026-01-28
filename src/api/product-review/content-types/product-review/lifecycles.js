"use strict";

module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    const productId = params?.data?.product;
    if (!productId) return;

    try {
      // Assign relation properly (manyToOne)
      await strapi.entityService.update(
        "api::product-review.product-review",
        result.id,
        {
          data: {
            product: productId,
          },
        },
      );
    } catch (error) {
      strapi.log.error("❌ Failed to link product to review:", error);
    }
  },
};
