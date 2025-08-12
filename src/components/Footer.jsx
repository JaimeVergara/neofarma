import React from 'react'

export function Footer() {
  return (
    <footer className="footer">
        <div className="row">
            <div className="col-12 text-center">
                <p className="text-muted">
                    &copy; {new Date().getFullYear()} NeoFarma. Todos los derechos reservados. - Hecho por <a className="footer-link" href="https://jaimevergara.github.io/mi-web/" target="_blank">Jaime Vergara</a>
                </p>
            </div>
        </div>
    </footer>
  )
}