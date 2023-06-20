import React from 'react'
import "./NewsItem.css"
function NewsItem(props) {
  return (
    <div  >
                <div className="card w-100 " id="NewsItem" >
                <img src={props.imgUrl} className="card-img-top" alt="News Item"/>
                <div className="card-body">
                  <div className="shadow-sm" id="heading">
                <p className=" my-2">{props.title}</p>
                </div>
                <div className='d-flex justify-content-center my-2'>
                <a href={props.newsUrl} className="btn btn-success m-auto  p-1">Read Full Story</a>
                </div>
                </div>
            
                </div>

    </div>
  )
}

export default NewsItem