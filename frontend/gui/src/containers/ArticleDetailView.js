import React,  { Component } from "react";
import axios from "axios";
import { Card } from "antd";

export default class ArticleDetail extends Component{
  state = {
    article: {}
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
      console.log(this.state.article)
    });
  }
      render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p> {this.state.article.content} </p>
        </Card>
      </div>
    );
  }
}
