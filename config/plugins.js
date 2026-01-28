module.exports = () => ({
  // ✅ Cloudinary upload provider
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  // ⚠️ TEMPORARY: enable CT Builder to sync permissions
  "content-type-builder": {
    enabled: true,
  },
});
