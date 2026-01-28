"use strict";

module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    const productId = params.data?.product;

    if (!productId) return;

    /**
     * Strapi v5:
     * Public REST create does NOT persist relations.
     * We must explicitly update the entry after creation.
     */
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
  },
};
