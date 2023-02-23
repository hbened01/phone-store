const path = require("path");

export default (config, env, helpers) => {
  const publicPath =
    process.env.NODE_ENV === "development"
      ? process.env.PREACT_APP_PUBLIC_PATH_DEV
      : process.env.PREACT_APP_PUBLIC_PATH_PROD;

  config.resolve.alias = {
    "@": path.resolve(__dirname, "src/"),
    ...config.resolve.alias,
  };
  config.node.process = true;
  config.output.publicPath = publicPath || "/";

  return config;
};
