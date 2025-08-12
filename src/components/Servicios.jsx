import React from "react";

export default function Servicios() {
    return (
        <div id="services">
            <div className="container espacio-secciones">
                <div className="text-center mb-4">
                    <h2>Nuestros Servicios</h2>
                </div>
                <div className="row justify-content-center mb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend, 
                        metus non viverra sollicitudin, leo mauris ultricies purus, in sagittis
                        nulla ex non eros. 
                    </p>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <span><i className="fa-solid fa-house fa-2x"></i></span>
                                <h5 className="card-title">Servicio 1</h5>
                                <p className="card-text">Descripción breve del servicio 1. <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <span><i className="fa-solid fa-house fa-2x"></i></span>
                                <h5 className="card-title">Servicio 2</h5>
                                <p className="card-text">Descripción breve del servicio 2. <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <span><i className="fa-solid fa-house fa-2x"></i></span>
                                <h5 className="card-title">Servicio 3</h5>
                                <p className="card-text">Descripción breve del servicio 3. <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                    consequat. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}