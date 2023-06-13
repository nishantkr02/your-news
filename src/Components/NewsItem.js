import React from 'react'
import "./NewsItem.css"
function NewsItem(props) {
  return (
    <div  >
                <div className="card w-100 " id="NewsItem" >
                <img src={props.imgUrl} className="card-img-top" alt="News Item"/>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href={props.newsUrl} className="btn btn-success">Go somewhere</a>
                </div>
            
                </div>

    </div>
  )
}

export default NewsItem