const withImages = require("next-images");
module.exports = withImages({
	webpack(config, options) {
		return config;
	},
});
module.exports = {
	images: {
		disableStaticImages: false,
	},
};
