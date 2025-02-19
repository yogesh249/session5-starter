import React from 'react';
import '../assets/css/clientsec.css';

const ClientSection = () => {
    return (
        <section id="clients" className="clients section light-background">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="../src/assets/img/clients/client-1.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="../src/assets/img/clients/client-2.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="../src/assets/img/clients/client-3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="../src/assets/img/clients/client-4.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="../src/assets/img/clients/client-5.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-xl-2 col-md-3 col-6 client-logo">
                        <img src="../src/assets/img/clients/client-6.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
