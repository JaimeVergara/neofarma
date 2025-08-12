import React from "react";

export default function Galeria() {
    return (
        <div id="gallery" className="text-center">
            <div className="container espacio-secciones">
                <div className="section-title">
                    <h2>Galeria</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                        dapibus leonec.
                    </p>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-md-6">
                        <img src="images/neo2.JPG" className="img-fluid" alt="Neofarma" style={{ maxWidth: '400px' }}/>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img src="images/neo1.JPG" className="img-fluid" alt="Neofarma" style={{ maxWidth: '400px' }}/>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <img src="images/neo4.JPG" className="img-fluid" alt="Neofarma" style={{ maxWidth: '400px' }}/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6">
                        <img src="images/neo5.png" className="img-fluid" alt="Neofarma" style={{ maxWidth: '400px' }}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}