/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../component/molecules/StepItem';

export default {
  title: 'Component/Molecules/StepItem',
  component: StepItem,
} as Meta;

function Template(args: StepItemProps) {
  return <StepItem {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
