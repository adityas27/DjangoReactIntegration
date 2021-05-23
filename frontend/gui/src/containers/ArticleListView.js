import React from 'react'
import axios from "axios";
import Article from '../components/Article'


export default class ArticleList extends React.Component{
    state = {
        articles: []
      };

     componentDidMount(){
        axios.get("http://127.0.0.1:8000/api/").then(res => {
          this.setState({
            articles: res.data
          });
          console.log(res.data)
        })
     } 
    render(){
        return(
            <Article data={this.state.articles}/>
        );
    };
};
