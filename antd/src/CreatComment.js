import React from "react";
import './App.css'

export default function CreatComment () {
    return(
        <section className="section">
            <div className="container-post">
                <header className="creatComment-header">
                    <nav className="postAdd-nav">Home/Name of current post</nav>
                    <button className="creatComment-btn">Create/Update</button>
                </header>

                <div >

                    <form action="">
                        <h3 className="creatComment-title">Title</h3>
                        <input type="text" className="creatComment-input" placeholder="Post title"/>
                        <h3 className="creatComment-title">Description</h3>
                        <input type="text" className="creatComment-input"placeholder="Post description"/>
                        <h3 className="creatComment-title">Preview</h3>
                        <input type="text" placeholder="Link to the preview image" className="creatComment-input"/>
                        <h3 className="creatComment-title">Author</h3>
                        <input type="text" placeholder="Author name" className="creatComment-input"/>
                    </form>
                    <button className="creatComment-btn btn">Create/Update</button>
                </div>
            </div>

        </section>
    )
}