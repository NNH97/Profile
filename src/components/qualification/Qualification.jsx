import React from "react";
import "./qualification.css";

function Qualification() {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap"></i> Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Nha Trang University</h3>
                                <span className="qualification__subtitle">
                                    Information Technology
                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>

                            <div>
                                <h3 className="qualification__title">Foxnite</h3>
                                <span className="qualification__subtitle">Front End Developer</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
