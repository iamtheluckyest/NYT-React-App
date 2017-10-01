import React from "react";
import {Container, Row, Col} from "../components/Grid/"
import Search from "../components/Search"
import Saved from "../components/Saved"

const Main = props => 
    <Container >
        <div>
            <Row>
                <Col size="12" >
                    <Search />
                </Col>
            </Row>
            <Row>
                <Col size="12">
                    <Saved />
                </Col>
            </Row>
        </div>
    </Container>;


export default Main;