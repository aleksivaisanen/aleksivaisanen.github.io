import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
        var education = this.props.data.education.map(function(edu){
            return  <div key={edu.school} className="row item">
                        <div className="twelve columns">
                            <h3>{edu.school}</h3>
                            <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>
                            <p>
                            {edu.description}
                            </p>
                        </div>
                    </div>
        });

        var work = this.props.data.work.map(function(job){
            return  <div key={job.company} className="row item">
                        <div className="twelve columns">
                            <h3>{job.company}</h3>
                            <p className="info">{job.title}<span>&bull;</span> <em className="date">{job.years}</em></p>
                            <p>
                            {job.description}
                            </p>
                        </div>
                    </div>
        });

        var skills = this.props.data.skills.map(function(skill){
            var className = "bar-expand " + skill.name.toLowerCase();
            return  <li key={skill.name}><span style={{width:skill.level}} className={className}></span><em>{skill.name}</em></li>
        });

      }
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {education}
                </div> 
            </div> 

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                   {work}
                </div>
            </div>
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>I've been programming Java since 2013 and it's is our mostly used programming language in school today. 
                    I'm quite familiar with the current web technologies like HTML5, CSS3, Javascript, jQuery, ReactJS and Bootstrap. 
                    I have also used Python and PHP a long time ago, but I can't say I'm too familiar with them.
                    Also I've made one <a href="https://github.com/aleksivaisanen/ristinolla">little project</a> with Android, so I know the basics of that as well.
                    I'm also very familiar with Microsoft Office products like Word, Excel and Powerpoint.
                    </p>
                    <div className="bars">

                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Resume;
