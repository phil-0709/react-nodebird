import { Form, Input } from 'antd';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useMemo } from 'react';

const formStyle = css`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  const style = useMemo(
    () => ({
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px',
    }),
    []
  );
  return (
    <Form css={formStyle}>
      <Input.Search addonBefore='닉네임' enterButton='수정' />
    </Form>
  );
};

export default NicknameEditForm;
