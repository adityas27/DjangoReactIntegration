import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';

const FormItem = Form.Item;

class CustomForm extends React.Component {
    handleFormSubmit = (event, requestType, articleID) => {
        const title = event.target[0].value;
        const content = event.target[1].value;
        console.log(requestType)
        switch ( requestType ) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch(error => console.err(error));
        }
    }

    render() {
        return (
        <div>
            <form onSubmit={(e) => this.handleFormSubmit(
                e,
                this.props.requestType,
                this.props.articleID )}>
            <FormItem label="Title" >
                <Input name="title" placeholder="Put a title here" />
            </FormItem>
            <FormItem label="Content" >
                <Input name="content" placeholder="Enter some content ..." />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
            </FormItem>
            </form>
        </div>
        );
    }
}

export default CustomForm;