module.exports = {
  "stories": [
    "../stories/**/*.stories.@(ts)",
    "../libs/ui/src/lib/components/**/*.stories.@(ts)",
    "../libs/ui/src/lib/styleguide/**/*.stories.@(ts)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
