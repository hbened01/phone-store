const path = require('path')

export default (config, env, helpers) => {
	config.resolve.alias = {
		'@': path.resolve(__dirname, 'src/'),
		...config.resolve.alias,
	}
}