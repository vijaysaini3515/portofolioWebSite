import React from 'react';
import './Works.scss'
import img1 from '../../assets/r1.jpg';
import img2 from '../../assets/r2.jpg';
import img3 from '../../assets/r3.jpg';
import img4 from '../../assets/r4.jpg';
import img5 from '../../assets/r7.jpg';
import img6 from '../../assets/r6.jpg'

const Works = () => {
  return (
    <div className='works'>
            <div className="work__section">


                <div className="cards">
                    <img src={img1} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                    <img src={img2} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={img3} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={img4} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={img5} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={img6} alt="" />
                    <button>See Work</button>
                </div>

            </div>
        </div>
  )
}

export default Works