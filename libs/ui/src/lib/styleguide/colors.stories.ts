import {Story} from '@storybook/angular';

export default {
  title: 'Oceanic/Styleguide/Colors',
};

const htmlTemplate = `
<h6 class="storybook-color-header">Default colors</h6>
<div class="storybook-color-example bg-color-white" color="$color-white"></div>
<div class="storybook-color-example bg-color-black" color="$color-black"></div>
<h6 class="storybook-color-header">Deep Blue</h6>
<div class="storybook-color-example bg-color-deep-blue" color="$color-deep-blue"></div>
<div class="storybook-color-example bg-color-deep-blue-active" color="$color-deep-blue-active"></div>
<div class="storybook-color-example bg-color-deep-blue-hover" color="$color-deep-blue-hover"></div>
<div class="storybook-color-example bg-color-deep-blue-focus" color="$color-deep-blue-focus"></div>
<h6 class="storybook-color-header">Error</h6>
<div class="storybook-color-example bg-color-error" color="$color-error"></div>
<div class="storybook-color-example bg-color-error-background" color="$color-error-background"></div>
<h6 class="storybook-color-header">Success</h6>
<div class="storybook-color-example bg-color-success" color="$color-success"></div>
<div class="storybook-color-example bg-color-success-background" color="$color-success-background"></div>
<h6 class="storybook-color-header">Warning</h6>
<div class="storybook-color-example bg-color-warning" color="$color-warning"></div>
<div class="storybook-color-example bg-color-warning-background" color="$color-warning-background"></div>
<h6 class="storybook-color-header">Info</h6>
<div class="storybook-color-example bg-color-info" color="$color-info"></div>
<div class="storybook-color-example bg-color-info-background" color="$color-info-background"></div>
`;

const story: Story = args => ({
  template: htmlTemplate,
  props: args
})
export const Base = story.bind({});
