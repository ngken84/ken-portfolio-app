import React from 'react';
import Header from '../components/Header';

const ResumePage = () => {

    return (
        <>
            <Header/>
            <div className="resume-container">
                <div className="resume-header--container">
                    <div className="resume-header--name-box">
                        <div className="resume-header--name">
                            Ken Ng
                        </div>
                        <div className="resume-header--name-subtitle">
                            Software Developer
                        </div>
                        
                    </div>
                    <div className="resume-header--contact-box">
                        <div>1811 N Street Apt #1</div>
                        <div>Sacramento, CA 95811</div>
                        <div><b>(650)269-3919</b></div>
                        <div><b>ng.ken84@gmail.com</b></div>
                    </div>
                </div>
                <div className="resume-body--container">
                    <div className="resume-body--left">
                        <div className="resume-body--title">
                            Experience
                        </div>
                        <div className="resume-item">
                            <div className="resume-item--header">
                                <div className="resume-item--header--title">
                                    California Legislative Data Center
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume-body--right">
                    
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default ResumePage;