import React from 'react';

export default function Header() {
    return (
        <header className="py-3 bg-white shadow text-center mb-4">
            <img 
                src="/images/neofarma.jpg" 
                alt="Logo NeoFarma" 
                className="img-fluid mx-auto d-block"
                style={{ maxWidth: '300px' }}
            />
        </header>
    );
}
