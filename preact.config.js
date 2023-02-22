const path = require("path");

export default (config, env, helpers) => {
  config.resolve.alias = {
    "@": path.resolve(__dirname, "src/"),
    ...config.resolve.alias,
  };
  config.node.process = true;
  config.output.publicPath = "/phone-store/";
  // // use the public path in your app as 'process.env.PUBLIC_PATH'
  // config.plugins.push(
  //   new helpers.webpack.DefinePlugin({
  //     "process.env.PUBLIC_PATH": JSON.stringify(
  //       config.output.publicPath || "/"
  //     ),
  //   })
  // );
  return config;
};
