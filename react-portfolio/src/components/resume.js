import React from 'react';
import MongoLogo from '../assets/images/mongodb-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import './App.css';

const Resume = () => {
    return (
   
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Download Resume: <a href="https://github.com/MichelleHirano/react-portfolio/blob/d9ded310120f7b4222e4904c8a26ecc2eb9750ba/react-portfolio/src/assets/images/resume.jpg">Michelle</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Algorithm</p>
                                    </div>

                         </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                    <div className='grid-item-skills'>
                                        <img src={JqueryLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={BootstrapLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={HandlebarsLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SqlLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MongoLogo} className='img-skills' />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
        
    );
};

export default Resume;