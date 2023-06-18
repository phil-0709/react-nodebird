import { List, Button, Card } from 'antd';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { StopOutlined } from '@ant-design/icons';

const listStyle = css`
  margin-bottom: 20px;
`;

const listItemStyle = css`
  margin-top: 20px;
`;

const buttonStyle = css`
  text-align: center;
  margin: 10px 0;
`;

const FollowingList = ({ header, data }) => {
  return (
    <List
      css={listStyle}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size='small'
      header={<div>{header}</div>}
      loadMore={
        <div css={buttonStyle}>
          <Button>더 보기</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item css={listItemStyle}>
          <Card actions={[<StopOutlined key='stop' />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowingList;
