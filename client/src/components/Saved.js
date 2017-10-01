import React, {Component} from "react";
import {Card} from "./Card/";
import API from "../utils/API"

class Saved extends Component {
    state = {
        savedArticles: []
    };
    
    componentDidMount() {
        this.getArticles();
    };

    getArticles = () => {
        API.getSavedArticles()
            .then(data => {
                this.setState({savedArticles: data.data})
            })
            .catch(err => console.log(err));
    };

    unsaveArticle = id => {
        API.deleteArticle(id)
            .then(this.getArticles())
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Card title="Saved">
                {
                    this.state.savedArticles.map( article => (
                        <div key={article._id} style={{position:"relative"}}>
                            <button id={article._id} onClick={ () => this.unsaveArticle(article._id)} className="btn btn-default btn-sm" style={{position: "absolute", top:"0px", right: "0px", cursor:"pointer"}}>Delete</button>
                            <a href={article.web_url} target="_blank"><h4>{article.title}</h4></a>
                            {article.snippet}
                            <hr />
                        </div>
                    ))
                }
            </Card>
        )
    }
}

export default Saved;