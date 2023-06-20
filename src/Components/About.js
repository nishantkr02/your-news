import React from 'react'

export default function About() {
  return (
    <div className='col-md-6 m-auto shadow-lg p-2'>

    <div className='container  my-3 p-3'>
      <img  src='https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png ' alt="Welcome" width="500" height="300" />
    </div>
<div className="accordion p-2 " id="accordionExample">

  <div className="accordion-item text-center ">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
       About the App 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        <p  className='border shadow-lg m-auto p-2  text-secondary '>
           


            
        </p>
       
      </div>
    </div>
  </div>

  <div className="accordion-item text-center ">
    <h2 className="accordion-header " id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        User Guide 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      <p  className='border shadow-lg m-auto p-2  text-secondary '>
     


          
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item text-center ">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      A Message from the Developer
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <p  className='text-secondary p-3 shadow-lg'>
        <strong>Hi there .. ! <br/>
        I am Nishant . I hope You will find this App Useful <br/><br/>
         I am New to this world of the Web Developers ,
        <br/> still got A Long Way to Go ,so many new things to Learn and <br/> A long list of apps to build  .<br/>
        So If you have any suggestions , please do share it on my  
        <a href='https://github.com/nishantkr02'> GitHub </a> Page .

        </strong> 
        </p>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
