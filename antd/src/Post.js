import React from "react";
import './App.css'

export default function Post (props) {
    return (<section className="section">
            <div className="container">
                <div className="post-description">
                    <button className="post-btn-edit">Edit</button>
                </div>
                <div className="post-title-author">
                    <div className="post-title">
                        <h3>Title </h3>
                        <p>{props.title}</p>
                    </div>
                    <div className="post-author">
                        <p>Author </p>
                        <p>{props.author}</p>
                    </div>
                </div>
            </div>
    </section>

    )
}