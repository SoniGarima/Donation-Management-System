import React, { Component,Fragment } from "react";
var sectionStyle = {
  width: "100%",
  height: "50vh",
  backgroundSize:"contain",
  backgroundImage: "url(" + "https://images.squarespace-cdn.com/content/v1/5bfb078b3c3a53fe5ad37106/1550498338112-MARSD65KHVARZO1VP5V1/ke17ZwdGBToddI8pDm48kPpoD7rq4bpS5FKkOc2I0aJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIrxFq7Gyry22xHN_I-5kpazY44fCGMXxnagclA-IhTnE/Hope+Logo+Initial.png" + ")",
  backgroundRepeat  : 'no-repeat',
  backgroundPosition: 'center',
overflow: 'hidden',
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    
  }

  render() {
    return (
      <Fragment>
      <div className="app">   
      <section style={ sectionStyle }>
      </section>
        <h1> Better life </h1>
        <h5 style={{color:"white"}}>Hope is what binds humanity together to look upon the sunrise of a better tomorrow.
        Service to humanity is greatest pleasure of all. You can give hope of better life to people by donating us. 
        Amount never matters, but knowing that they will be helped and not left alone in misery, will give them strength to fight for better .
        <br></br>
        NGO’s are no less than life-saving guardians working silently for the needy, the vulnerable and ones who are suffering. 
        NGO’s also work for emergency relief, rural development and women’s empowerment etc enabling all voices to be heard, strengthening their lives and giving them a reason to live for.</h5>
      </div>
      </Fragment>
    );
    
  }
}

export default About;
