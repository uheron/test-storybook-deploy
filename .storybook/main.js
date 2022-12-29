module.exports = {
  addons: [/*existing addons,*/ '@storybook/addon-react-native-web'],
};

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)", "storybook/*.stories.@(js|jsx|ts|tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/web-components",
  core: {
    builder: "webpack5"
  }
};