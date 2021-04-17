import React, { Fragment } from 'react';
import logo1 from "../images/plogo1.jpg"
import logo2 from "../images/plogo2.jpeg"
import logo3 from "../images/plogo3.jpeg"


const NGOS = [
    {"logo" : logo1, "name" : "Vastra Project","desc" : "It revolves around the entrepreneurs who are washer man collecting or buying (based on the will of the) discarded clothes from various colleges and societies and segregating them into reusable and non-reusable sections. The reusable clothes are taken for refurbishing processes (Ironing, washing, stitching, etc.) and then sold at an affordable price to the economically weaker sections of the society. The non-reusable section is taken to a local community of women in a nearby village which converts these clothes into doormats and carpets which are again sold in the general market. this also empowers the women community."},

    {"logo" : logo2, "name" : "Old age home Project","desc" : "With their children relocated to different geographies, among the many health concerns which can trouble seniors, loneliness is one of the most common and least discussed. They are faced with numerous physical, psychological and social issues that challenge their sense of self and capacity to live happily. After retirement, they should live a life where they can pursue their hobbies, do things which they always wanted to but could not, make friends, laugh and share emotions with them."},

    {"logo" : logo3, "name" : "Free and Quality education Project","desc" : "Free and compulsory education to all children up to the age of fourteen is a constitutional commitment in India. The Parliament of India had passed the Right to Education Act in 2009 through which education has become a fundamental right of all children of the age group 6-14 years."}
]

class NGOprojects extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
            <Fragment>
             <h1 className="text-center">The various projects undertaken by the NGO</h1>
            <div className="container">
           
                <div class="row">
                {NGOS.map((value,index)=>{
                    return (
                        <div class="card col-md-3" style={{width: "20rem", marginLeft:"50px"}}>
                            <img src={value["logo"]} class="card-img" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{value["name"]}</h5>
                                <p style={{color:"black"}} class="card-text">{value["desc"]}</p>
                            </div>
                            <button class="btn btn-outline-success m-2"><a href='/form'>Donate</a></button>
                                
                        </div>
                    );
                    })}
                </div>
                </div>
            </Fragment>
        );
    }
}
export default NGOprojects;