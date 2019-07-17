import React from 'react';
import useMathQuillMathField from '../../../helpers/use-mathquill/useMathQuill/MathField';

function MathsInput({ onClick, onFocus, ...rest }, ref) {
  useMathQuillMathField(ref)

  return (
    <span
      ref={ref}
      onClick={onClick}
      onFocus={onFocus}
      {...rest}
    />
  )
}

// eslint-disable-next-line no-func-assign
MathsInput = React.forwardRef(MathsInput)
MathsInput.displayName = 'MathsInput'

export default MathsInput;