import React from 'react';

export default function About() {
  return (
    <div id="about">
        <div className="container espacio-secciones">
            <div className="row">
                <div className="col-12 text-center mb-3">
                    <h2>Sobre Nosotros</h2>
                </div>
                <div className="col-12 col-md-6">
                    <img src="images/neofarma.jpg" className="img-fluid" alt="Neofarma" style={{ maxWidth: '400px' }}/>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                         ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, 
                         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                         aliqua. <a href="#">Ver más...</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}