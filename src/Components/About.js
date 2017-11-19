import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
        var image = "images/"+this.props.data.image;
        var bio = this.props.data.bio.map(function(textline){
            return <p key={textline.line.length}>{textline.line}</p>
        });
        var email = this.props.data.email;
        var resumeDownload = this.props.data.resumedownload;
      }
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic"  src={image} alt="" />
                </div>

                <div className="nine columns main-col">

                    <h2>About Me</h2>

                    {bio}
                    

                    <div className="row">

                        <div className="columns contact-details">

                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{email}</span><br />
                            </p>
                        </div>

                        <div className="columns download">
                            <p>
                                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume (Coming soon!)</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default About;
