/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../component/atoms/Input';

export default {
  title: 'Component/Atoms/Input',
  component: Input,
} as Meta;

function Template(args: InputProps) {
  return <Input {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  label: 'Nama Lengkap',
};
