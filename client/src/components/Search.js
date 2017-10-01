import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import {Card} from "./Card";
import Form from "./Form";
import API from "../utils/API"

class Search extends Component  {
    state = {
        searchTerm : "",
        numResults : "",
        startYear : "",
        endYear : "",
        fireRedirect : false,
        result : ""
    }

    handleInput = event => {
        const {name, value} = event.target
        this.setState(
            {[name]: value}
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        let authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        let queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=";
        
        if (this.state.searchTerm && this.state.numResults){
            let queryURL = queryURLBase + this.state.searchTerm;
            if (this.state.startYear) {
                queryURL = queryURL + "&begin_date=" + this.state.startYear + "0101";
            }
        
            if (this.state.endYear) {
                queryURL = queryURL + "&end_date=" + this.state.endYear + "0101";
            }
            API.getNYTArticles(queryURL)
                .then(res => {
                    localStorage.setItem("results", JSON.stringify(res.data));
                    localStorage.setItem("numResults", this.state.numResults);
                    this.setState({fireRedirect : true});  
                }).catch(err => console.log(err))

        }
    }

    render() {
        const { fireRedirect } = this.state;
        return (
            <Card title="Search">
                <Form 
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                    searchTermVal={this.state.searchTerm}
                    numResultsVal={this.state.numResults}
                    startYearVal={this.state.startYear}
                    endYearVal={this.state.endYear}
                />
                {fireRedirect ? <Redirect to="/results" /> : "" }

            </Card>
        )
    }
}
    
export default Search;