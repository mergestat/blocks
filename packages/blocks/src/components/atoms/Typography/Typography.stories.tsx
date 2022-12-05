import { ComponentMeta, ComponentStory } from '@storybook/react';
import type { TextSizeT, TitleLevelT } from './Typography';
import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography.Text,
  argTypes: {},
} as ComponentMeta<typeof Typography.Text>

const Template: ComponentStory<typeof Typography.Text> = (args) => (
  <Typography.Text {...args} />
)

export const TypographyText = Template.bind({})
TypographyText.args = {
  size: 'xl',
  children: ' The quick brown fox jumped over the lazy dog.',
}

export const TypographyTextExample = () => {
  const size = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']

  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <dl>
        {size.map((s: string, idx: number) => (
          <div className="flex items-start" key={idx + Math.round(4)}>
            <dt className="w-16 flex-shrink-0 text-sm text-opacity-50 font-mono leading-3">
              {s}
            </dt>
            <Typography.Text
              size={s as TextSizeT}
              className="truncate font-medium"
            >
              The quick brown fox jumped over the lazy dog.
            </Typography.Text>
          </div>
        ))}
      </dl>
    </div>
  )
}

export const TypographyTitleExample = () => {
  const level = ['h1', 'h2', 'h3', 'h4', 'h5'];

  return (
    <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
      <dl>
        {level.map((l: string, idx: number) => (
          <div className="flex items-start" key={idx + Math.round(4)}>
            <dt className="w-16 flex-shrink-0 text-sm text-opacity-50 font-mono leading-3">
              {l}
            </dt>
            <Typography.Title
              level={l as TitleLevelT}
              className="text-gray-800"
            >
              The quick brown fox jumped over the lazy dog.
            </Typography.Title>
          </div>
        ))}
      </dl>
    </div>
  )
}
