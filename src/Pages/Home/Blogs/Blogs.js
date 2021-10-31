import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center py-4">Latest Blogs</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://i.ibb.co/N27RLGZ/halima-bouchouicha-9-GMW0u-Trh-Ic-unsplash.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">status as a former dominion of the English Crown</h5>
                        <p className="card-text"> The South Atlantic region of the United States. Virginia is nicknamed the ``Old Dominion`` due to its status as a former dominion of the English Crown, and ``Mother of Presidents`` due to the most U.S. presidents having been born there. The geography and climate of the Commonwealth are shaped by the Blue Ridge Mountains and the Chesapeake Bay, which provide habitat for much of its flora and fauna. The capital of the Commonwealth is Richmond; Virginia Beach is the most populous city.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://i.ibb.co/XDPzqpz/burcu-yeeg-M3fc-ZE-unsplash.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Commonwealth are shaped by the Blue Ridge Mountains</h5>
                        <p className="card-text"> Atlantic region of the United States. Virginia is nicknamed the ``Old Dominion`` due to its status as a former dominion of the English Crown, and ``Mother of Presidents`` due to the most U.S. presidents having been born there. The geography and climate of the Commonwealth are shaped by the Blue Ridge Mountains and the Chesapeake Bay, which provide habitat for much of its flora and fauna. The capital of the Commonwealth is Richmond; Virginia Beach is the most populous city.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://i.ibb.co/xszH3qb/stefan-stefancik-6whw-CHgs-Mi-A-unsplash.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">The geography and climate of the Commonwealth</h5>
                        <p className="card-text">Populous city The South Atlantic region of the United States. Virginia is nicknamed the ``Old Dominion`` due to its status as a former dominion of the English Crown, and ``Mother of Presidents`` due to the most U.S. presidents having been born there. The geography and climate of the Commonwealth are shaped by the Blue Ridge Mountains and the Chesapeake Bay, which provide habitat for much of its flora and fauna. The capital of the Commonwealth is Richmond; Virginia Beach is the most.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;