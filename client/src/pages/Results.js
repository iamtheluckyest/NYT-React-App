import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid"
import {Card} from "../components/Card"
import API from "../utils/API"



class Results extends Component {   
    state = {
        results: [],
        btnText: []       
    } 

    componentDidMount() {
        // Get results from API per form submission
        let results = JSON.parse(localStorage.getItem("results"))
        results = results.response.docs;
        
        // Limit results per form submission
        const numResults = localStorage.getItem("numResults")
        if(numResults < results.length) {
            results = results.slice(0, numResults)
        }
        
        this.setState({results: results}, () => {
            this.state.results.forEach((article, index) => {
                this.isSaved(article, index)
            });
        });
        
    }

    
    saveArt = (article, index) => {
        const articleObj = {
            nytId: article._id,
            title: article.headline.main,
            publishDate: article.pub_date,
            web_url: article.web_url,
            snippet: article.snippet
        }
        
        API.saveArticle(articleObj)
            .then( () => {
                this.isSaved(articleObj, index)
            })
            .catch(err => console.log(err))
        
    }

    isSaved = (article, index) => {
       
        API.getSavedArticle(article._id || article.nytId)
            .then(data => {
                if(data.data) {
                    let arr = this.state.btnText
                    if (arr[index] !== "Saved!"){
                        arr[index] = "Saved!"
                        this.setState({
                            btnText : arr
                        })
                    };
                } else {
                    let arr = this.state.btnText
                    if (arr[index] !== "Save"){
                        arr[index] = "Save"
                        this.setState({
                            btnText : arr
                        })
                    };
                }
            }).catch(err => console.log(err));
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col size="12">
                        <Card title="Search Results">
                            {this.state.results.map((article, index) => (
                                <div key={article._id} style={{position:"relative"}}>
                                    <button id={article._id} onClick={ () => this.saveArt(article, index)} className="btn btn-default btn-sm" style={{position: "absolute", top:"0px", right: "0px", cursor:"pointer"}}>{this.state.btnText[index]}</button>
                                    <a href={article.web_url} target="_blank"><h4>{article.headline.main}</h4></a>
                                    {article.snippet}
                                    <hr />
                                </div>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
       
}

export default Results;