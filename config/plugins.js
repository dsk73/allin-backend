module.exports = () => ({
  // ✅ Cloudinary upload (unchanged logic)
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
    },
  },

  // ⚠️ TEMPORARY: enable CT Builder to sync permissions
  "content-type-builder": {
    enabled: true,
  },
});
