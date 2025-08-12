import React from "react";

export default function Equipo() {
    return (
        <div id="team">
            <div className="container espacio-secciones text-center">
                <h2>Nuestro Equipo</h2>
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <img src="images/neo6.png" className="img-fluid" alt="Neofarma" style={{ maxWidth: '400px' }}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend, metus non viverra sollicitudin, leo mauris ultricies purus, in sagittis nulla ex non eros. Nulla vel rutrum enim. Praesent tristique metus nulla, eu tincidunt justo mollis eget. Nullam vehicula nisi vitae pretium interdum. Ut quis cursus mauris, et maximus mauris. Nunc a enim at nisl volutpat sodales. Nulla ac justo arcu. Sed ultrices ex ac purus fringilla, sit amet suscipit sapien lacinia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}