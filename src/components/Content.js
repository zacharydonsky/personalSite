
import React, { Component } from "react";
import styled from "styled-components";
// import { NavLink, Route } from "react-router-dom";

export default class Content extends Component {
    render() {
        return (
            <ContentBox>
                {/* <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/Stuff" component={Stuff} />
                    <Route path="/Contact" component={Contact} />
                </div> */}
            </ContentBox>

        );
    }
}

const ContentBox = styled.div`
    width:90vw;
    height:100px;
    ul{
        background-color: #111;
        padding: 0;
        li{
            display: inline;
            list-style-type: none;
            margin: 0;
            a{
                color: #FFF;
                font-weight: bold;
                text-decoration: none;
                padding: 20px;
                display: inline-block;
            }
            .active{
                background-color: #0099FF;
            }
        }
        
    }

`