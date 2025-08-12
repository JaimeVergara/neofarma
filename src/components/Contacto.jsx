import React from "react";

export default function Contacto() {
return (
    <div id="contact" className="d-flex justify-content-center align-items-center">
        <div className="container espacio-secciones">
            <div className="row">
                <div className="col-12 text-center mb-4 mt-4">
                    <h2>Contacto</h2>
                    <p className="text-muted">¿Tienes preguntas? ¡Escríbenos!</p>
                </div>
                <div className="col-md-6 col-lg-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="text" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="textx"
                                placeholder="nombre"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="nombre@ejemplo.com"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea
                                className="form-control"
                                id="mensaje"
                                rows="4"
                                placeholder="Escribe tu mensaje aquí..."
                                required
                            >
                            </textarea>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">
                                <i className="fa-regular fa-paper-plane"></i> Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="row align-items-center justify-content-center text-center mb-4">
                        <div className="col-auto">
                            <i className="fa-regular fa-envelope fa-2x"></i>
                        </div>
                        <div className="col-auto">
                            <strong>E-mail de Contacto</strong><br />
                            <a href="mailto:neofarma.valdivia@gmail.com" className="contact-link" target="_blank">neofarma.valdivia@gmail.com</a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center text-center mb-4">
                        <div className="col-auto">
                            <i className="fa-brands fa-whatsapp fa-2x"></i>
                        </div>
                        <div className="col-auto">
                            <strong>Numero de Contacto</strong><br />
                            <a href="https://api.whatsapp.com/send?phone=56974510495&text=Hola%20NeoFarma!" className="contact-link" target="_blank">+56974510495</a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center text-center mb-4">
                        <div className="col-auto">
                            <i className="fa-solid fa-location-dot fa-2x"></i>
                        </div>
                        <div className="col-auto">
                            <strong>Dirección</strong><br />
                            <a className="contact-link"  
                                data-bs-toggle="modal"
                                data-bs-target="#mapaModal"
                                type="button"
                            >
                                Intendente Luis Damann Asenjo 1797, Valdivia, Los Ríos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 text-center mt-4">
                    <a href="https://www.instagram.com/neofarma_valdivia/" target="_blank"><i className="fa-brands fa-instagram fa-3x text-black p-2"></i></a>
                    <a href="https://www.facebook.com/p/Farmacia-Neofarma-Valdivia-61576023124507/" target="_blank"><i className="fa-brands fa-square-facebook fa-3x text-black p-2"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=56974510495&text=Hola%20NeoFarma!" target="_blank"><i className="fa-brands fa-whatsapp fa-3x text-black p-2"></i></a>
                </div>
            </div>
        </div>
    </div>
);
}
