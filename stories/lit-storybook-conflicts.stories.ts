import { html, TemplateResult } from 'lit';
import '../src/lit-storybook-conflicts.js';

export default {
  title: 'LitStorybookConflicts',
  component: 'lit-storybook-conflicts',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-storybook-conflicts style="--lit-storybook-conflicts-background-color: ${backgroundColor}" .title=${title}></lit-storybook-conflicts>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
