import React from "react";
import { List, Avatar, Space } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const IconText = ({ type, text }) => (
  <span>
    <Space
      type={type}
      style={{
      marginRight: 2
      }}
    />
    {text}
  </span>
);

const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <StarOutlined />, <IconText text="0" />,
            <LikeOutlined />, <IconText type="like-o" text="0" />,
            <MessageOutlined />, <IconText type="message" text="0" />
          ]}
          // extra={
          //   <img
          //     width={272}
          //     alt="logo"
          //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          //   />
          // }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/articles/${item.id}`}> {item.title} </a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;