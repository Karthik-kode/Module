import React from "react";
import avatar from './avatar.png'



export default function Dashboard(){
    return(
        <>
            <div>
                <h1 className="profile"> Profile</h1>

                
                <div className="card text-black bg-light mb-3 card" >
                    <div className="row g-0">
                        <div className="col-md-4" >
                            <img src={avatar} className="img-fluid rounded-start image" alt="ALTER" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">USER</h5>
                                <p className="card-text">Solution Enabler</p>
                                <p className="card-text"><small className="text-muted">Allocated Projects : 3</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}