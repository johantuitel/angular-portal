/* eslint-disable max-len */
export function storybookCodeExample(code: string): string {
  return `
        <div class="storybook-code-example-block">
            <label for="storybook-example-code">
                Example code
            </label>
            <textarea id="storybook-example-code" class="storybook-code-example">${code.split('<').join('&#60;').split('>').join('&#62;')}</textarea>
            <app-button
                onclick="document.getElementById('storybook-example-code').select(); document.execCommand('copy'); document.getElementById('storybook-example-code').blur();"
                label="copy"
                icon="copy"
                action="warm-coral"
                iconOnly="true"
                css="justify-self-end"
            ></app-button>
        </div>
    `;
}
