import React from 'react';
import './Section.scss'
import me from '../../assets/mm2.jpg';

 const Section = () => {
  return (
    <div className="section">
        <div className="section_Container">
            <div className="section_img">
                <img src={me} alt="mySelf" />
            </div>

            <div className="section_contant">
            <h1>my achievement in our fild</h1>
                    <p>6 month experience in Web Development</p>
                    <p>UI & UX Designer</p>
                    <p>Project Manager skills</p>
                    <p>3 years experience in Programming</p>
                    <p>C,C++,Flitter,Dart,java,ptyhon</p>
                    <p>Sql,Database</p>
                    <p>Html & Css-Scss</p>
                    <p>Javascript Developer</p>
                    <p>React js Developer</p>
            </div>
        </div>
    </div>
  )
}

export default Section;
