import cx from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type BaseTextAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

type CodeBoxProps = {
  language?: string
}

export const CodeBox: React.FC<CodeBoxProps & BaseTextAreaProps> = ({
  language,
  className,
  ...props
}) => {
  const _classname = className ? { [className]: !!className } : {}

  const defaultHeight = 208
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const syntaxHighlighterRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(defaultHeight)

  useEffect(() => {
    if (props.value) {
      const child = syntaxHighlighterRef?.current?.lastChild as HTMLPreElement
      setHeight(child && child.clientHeight > defaultHeight ? child.clientHeight : defaultHeight)
    } else {
      setHeight(defaultHeight)
    }
  }, [syntaxHighlighterRef, props.value])

  return (
    <div className='t-code-box-container'>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={() => textareaRef.current?.focus()}
        onClick={() => textareaRef.current?.focus()}
        onScroll={() => textareaRef.current?.focus()}
        className={cx('t-code-box-subcontainer', { ..._classname })}
      >
        <textarea
          style={{ height: height }}
          className={'t-code-box-textarea'}
          ref={textareaRef}
          {...props}
        />
        <div ref={syntaxHighlighterRef} style={{ height: height }}>
          <SyntaxHighlighter
            language={language}
            style={a11yLight}
            showLineNumbers={false}
            wrapLines={true}
            customStyle={{
              background: 'transparent',
            }}
          >
            {`${props.value}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
