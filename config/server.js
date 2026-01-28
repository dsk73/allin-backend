module.exports = ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  url: env("PUBLIC_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },

  // ✅ REQUIRED for Cloudinary thumbnails & admin previews
  image: {
    breakpoints: {
      thumbnail: 150,
      small: 500,
      medium: 750,
      large: 1000,
    },
  },
});
