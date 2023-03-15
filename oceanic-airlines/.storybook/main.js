module.exports = {
  stories: [],
  addons: ['@storybook/addon-a11y','@storybook/addon-links','@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5"
  }
};
