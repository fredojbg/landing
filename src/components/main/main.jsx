import React, { Component } from 'react';


class main extends Component {
  render() {
    return(
        <>
           <section className="first">
            <div className="content__one">
              <h1>Muchos han vivido sin amor. Ninguno sin agua</h1>
              <a className="content__link" href="#">Go to projects</a>
              <div class="arrow__down bounce">
                <a className="icon" href="#second">
                  <i class="fas fa-angle-double-down"></i>
                </a>
              </div>
            </div>
           </section>

           <section id="second" className="second">
           <div className="content__two">
              <h1>Lorem Ipsum</h1>
              <a className="content__link" href="#">Go to projects</a>
            </div>
           </section>
            
        </>
    );
  }
}

export default main;