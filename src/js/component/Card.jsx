import React from "react";

const Card = () => {
    return (
        <div className="col-12 col-md-3">
            <div className="card">
                <img src="https://picsum.photos/200" className="card-img-top w-100" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aperiam!</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card;