"use strict";

module.exports = {
  async afterCreate(event) {
    try {
      const { result, params } = event;
      const productId = params?.data?.product;

      if (!productId) return;

      await strapi.entityService.update(
        "api::product-review.product-review",
        result.id,
        {
          data: {
            product: {
              connect: [{ id: productId }],
            },
          },
        },
      );
    } catch (err) {
      strapi.log.error("❌ Review lifecycle failed:", err);
    }
  },
};
