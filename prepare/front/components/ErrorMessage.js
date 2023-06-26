/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const errorStyle = css`
  color: red;
`;

const ErrorMessage = ({ children }) => {
  return <div css={errorStyle}>{children}</div>;
};

export default ErrorMessage;
