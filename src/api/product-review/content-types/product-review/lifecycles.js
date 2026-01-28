"use strict";

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    /**
     * Strapi v5 requires relations to be connected explicitly
     * Passing product ID directly is ignored otherwise
     */
    if (data.product) {
      data.product = {
        connect: [{ id: data.product }],
      };
    }
  },
};
