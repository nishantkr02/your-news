import React from 'react'

function Weather(props) {
  return (
    <div className='shadow-lg border border-dark'  >
        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/NewsPage" className="card-link">Card link</a>
    <a href="/NewsPage" className="card-link">Another link</a>
  </div>
</div>
    </div>
  )
}

export default Weather