// @flow

import * as React from 'react'
import classnames from 'classnames'
import Highlight, {defaultProps} from 'prism-react-renderer'
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl'

import codeBlockStyles from '../CodeBlock/styles.module.css'
import styles from './styles.module.css'

export default function Playground({
  children,
  prismTheme,
  target,
  language,
  button,
  handleCopyCode,
  showCopied,
}: {
  children: string,
  prismTheme: any,
  target: any,
  button: any,
  handleCopyCode: () => void,
  showCopied: boolean,
  language: string,
}) {
  return (
    <>
      <div className={styles.playgroundHeader}>LIVE EDITOR</div>
      <Highlight
        {...defaultProps}
        theme={prismTheme || nightOwlTheme}
        code={children.trim()}
        language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <div className={codeBlockStyles.codeBlockWrapper}>
            <pre
              ref={target}
              className={classnames(className, codeBlockStyles.codeBlock)}
              style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
            <button
              ref={button}
              type="button"
              aria-label="Copy code to clipboard"
              className={codeBlockStyles.copyButton}
              onClick={handleCopyCode}>
              {showCopied ? 'Copied' : 'Copy'}
            </button>
          </div>
        )}
      </Highlight>
      <div className={styles.playgroundHeader}>PREVIEW</div>
      <div className={styles.playgroundPreview}></div>
    </>
  )
}
