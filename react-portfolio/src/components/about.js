import React from 'react';
import '../App.css';

const About = () => {
    return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                       Full Stack Developer student with background in Javascript, ReactJS, NodeJs, CSS, HTML, and other technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>                       
            </div>
        </div>
    );
};

export default About;