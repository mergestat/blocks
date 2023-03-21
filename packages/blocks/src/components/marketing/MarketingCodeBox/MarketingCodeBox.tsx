import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type MarketingCodeBoxProps = {
  code?: string,
  language?: string
}

export const MarketingCodeBox: React.FC<
MarketingCodeBoxProps &
React.DetailedHTMLProps<
React.DetailsHTMLAttributes<HTMLElement>,
HTMLElement
>
> = ({ code, language = 'sql' }) => {
  return (
    <div className="t-marketing-code-box">
      <SyntaxHighlighter
        language={language}
        style={a11yLight}
        showLineNumbers={true}
        customStyle={{
          backgroundColor: 'white',
          userSelect: 'auto'
        }}>
        {code as string}
      </SyntaxHighlighter>
    </div>
  );
};

