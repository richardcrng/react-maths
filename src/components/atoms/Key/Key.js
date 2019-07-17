import React from 'react';
import classes from './Key.module.css';
import InnerHTML from '../InnerHTML';
import parseWithKatex from '../../../helpers/parseWithKatex';
import { useActiveMathField } from '../../organism/MathsInputEnabler';

/**
 * 
 * @param {Object} props
 * @param {string} props.html
 * @param {string} props.latex
 * @param {string} props.cmd - passed to MathQuill's .cmd onClick
 * @param {string} props.keystroke - passed to MathQuill's .keystrong onClick
 * @param {string} props.write - passed to MathQuill's .write onClick
 * 
 */
function Key({ html: htmlFromProps, cmd, keystroke, latex, write, ...rest }) {
  const activeMathField = useActiveMathField()

  const handleClick = () => {
    if (!activeMathField) return

    if (cmd) activeMathField.cmd(cmd)
    if (keystroke) activeMathField.keystroke(keystroke)
    if (write) activeMathField.write(write)
  }

  const html = latex
    ? parseWithKatex(latex)
    : htmlFromProps

  return (
    <button
      className={classes.KeyOuter}
      onClick={handleClick}
    >
      <span className={classes.KeyInner}>
        <InnerHTML html={html} />
      </span>
    </button>
  )
}

export default Key;