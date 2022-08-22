/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../component/molecules/GameItem';

export default {
  title: 'Component/Molecules/GameItem',
  component: GameItem,
} as Meta;

function Template(args: GameItemProps) {
  return <GameItem {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
