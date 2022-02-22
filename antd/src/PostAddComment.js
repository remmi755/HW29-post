import React from "react";
import './App.css'

export default function PostAddComment() {
    return(
        <section className="section">
            <div className="container">
                <nav className="postAdd-nav">Home/Name of current post</nav>
                <div >
                    <h3 className="postAdd-title">Post Title</h3>
                    <div className="postAdd-description">Post description</div>
                    <div className="postAdd-comments">List of comments</div>
                    <form action="">
                        <input type="text" placeholder="field for input comment" className="postAdd-input"/>
                    </form>
                    <button className="postAdd-btn">Add comment</button>
                </div>
            </div>

        </section>
    )
}