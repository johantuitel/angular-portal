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
<h6 class="storybook-color-header">Fresh Blue</h6>
<div class="storybook-color-example bg-color-fresh-blue" color="$color-fresh-blue"></div>
<div class="storybook-color-example bg-color-fresh-blue-active" color="$color-fresh-blue-active"></div>
<div class="storybook-color-example bg-color-fresh-blue-hover" color="$color-fresh-blue-hover"></div>
<div class="storybook-color-example bg-color-fresh-blue-focus" color="$color-fresh-blue-focus"></div>
<h6 class="storybook-color-header">Warm Coral</h6>
<div class="storybook-color-example bg-color-warm-coral" color="$color-warm-coral"></div>
<div class="storybook-color-example bg-color-warm-coral-active" color="$color-warm-coral-active"></div>
<div class="storybook-color-example bg-color-warm-coral-hover" color="$color-warm-coral-hover"></div>
<div class="storybook-color-example bg-color-warm-coral-focus" color="$color-warm-coral-focus"></div>
<h6 class="storybook-color-header">Light Blue</h6>
<div class="storybook-color-example bg-color-light-blue" color="$color-light-blue"></div>
<div class="storybook-color-example bg-color-light-blue-active" color="$color-light-blue-active"></div>
<div class="storybook-color-example bg-color-light-blue-hover" color="$color-light-blue-hover"></div>
<div class="storybook-color-example bg-color-light-blue-focus" color="$color-light-blue-focus"></div>
<h6 class="storybook-color-header">Deep Yellow</h6>
<div class="storybook-color-example bg-color-deep-yellow" color="$color-deep-yellow"></div>
<div class="storybook-color-example bg-color-deep-yellow-active" color="$color-deep-yellow-active"></div>
<div class="storybook-color-example bg-color-deep-yellow-hover" color="$color-deep-yellow-hover"></div>
<div class="storybook-color-example bg-color-deep-yellow-focus" color="$color-deep-yellow-focus"></div>
<h6 class="storybook-color-header">Deep Purple</h6>
<div class="storybook-color-example bg-color-deep-purple" color="$color-deep-purple"></div>
<div class="storybook-color-example bg-color-deep-purple-active" color="$color-deep-purple-active"></div>
<div class="storybook-color-example bg-color-deep-purple-hover" color="$color-deep-purple-hover"></div>
<div class="storybook-color-example bg-color-deep-purple-focus" color="$color-deep-purple-focus"></div>
<h6 class="storybook-color-header">Deep Red</h6>
<div class="storybook-color-example bg-color-deep-red" color="$color-deep-red"></div>
<div class="storybook-color-example bg-color-deep-red-active" color="$color-deep-red-active"></div>
<div class="storybook-color-example bg-color-deep-red-hover" color="$color-deep-red-hover"></div>
<div class="storybook-color-example bg-color-deep-red-focus" color="$color-deep-red-focus"></div>
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
