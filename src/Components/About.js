import React from 'react'

export default function About() {
  return (
    <div className='container shadow my-4'>
    <div className="accordion col-10 m-auto p-4" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      NOTICE
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      <p className='text-danger text-center fs-5 '><strong>As of Now , This App is Using the free Developers Plan of NewsApi .</strong><br/>
      Unfortunately Newsapi revised its plan and it no longer allows us to make requests from the browser ,i.e on a deployment Server .<br/>  </p>
      <p className='text-secondary text-center  '>
      <strong>Which means You cannot use the app in its full  fleged form  </strong>,
      the articles you see on the  Homepage are some hard coded parsed JSON data .<br/> 
      So to summarize , to utilise the full features of the app  , you either have to pay a shit load of money to them or just use the app on the developer Server ,i.e on Local host .
      </p>
     
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       About the App
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <p className='text-secondary fs-5'><strong> <br/>
      This app lets the user to search and browse through the Curated list of news articles  .</strong>
      <br/>The users can browse the different categories of news with just one click <br/> and  they can search for the desired news articles using the search box.

      
      </p>
      </div>
    </div>
  </div>
  <div className="accordion-item text-center">
    <h2 className="accordion-header " id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed fs-5 text-center " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       Note to Self : Features to be implemented in the future .
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
       <p className='text-secondary fs-5'><strong> I will be deplyoing this app for public use in the future.</strong>
       <br/> Customization  and Filters will be the main Highlight .<br/>
       <strong>Users will be able to choose  :</strong> the country ,the domain, the sources ,language ,specific time range,
       the sorting order etc etc.
       I will even throw in a weather section somewhere .
       <br/> <br/>Meanwhile,I am open to suggestions . <br/>
       Here is a link of the app on my  <a className='link link-danger' href='https://github.com/nishantkr02/your-news'>Github Profile </a><br/>
       Kindly Post your valuble suggestion and tips.</p>
      </div>
    </div>
  </div>
 

</div>
<div className='container col-md-10 col-sm-8  border  p-4'> 
<h3 className=' shadow-sm text-secondary p-4 fs-5 text-center'>Here is a demo Video of the App Working on the Local Server</h3>
<div class=" p-4 m-auto ">
<iframe  width="480" height="240" src="https://www.youtube.com/embed/ndTgiemd19U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
</div>
</div>
</div>
  )
}
