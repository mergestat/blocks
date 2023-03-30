import { ComponentMeta } from '@storybook/react'
import { ChangeEvent, useState } from 'react'
import { CodeBox } from './CodeBox'

export default {
  title: 'Atoms/Form/CodeBox',
  component: CodeBox,
  argTypes: {},
} as ComponentMeta<typeof CodeBox>

const jsonData = {
  "id": 8,
  "title": "Microsoft Surface Laptop 4",
  "description": "Style and speed. Stand out on ...",
  "price": 1499,
  "ages": [1, 2, 34, 34, 23, 23],
  "dir": {
    "title": "Street 4",
    "home": 12,
    "data": [1, 2, 3]
  }
}

export const Default = () => {
  const [code, setCode] = useState(JSON.stringify(jsonData, (k, v) => {
    if (v instanceof Array)
      return JSON.stringify(v, null, 1).replace(/\n/g, '')
    return v
    // eslint-disable-next-line no-useless-escape
  }, 2).replace(/\"\[ /g, '[').replace(/\]\"/g, ']'))

  return (
    <div>
      <CodeBox
        language='json'
        value={code}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
      />
    </div>
  )
}
