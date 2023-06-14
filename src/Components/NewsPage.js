import React, { useState } from 'react'
import NewsItem from './NewsItem' 
import Weather from './Weather'
import NewsCategory from './NewsCategory'
function NewsPage() {
  
  const article = [
    {"source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "Toyota shares surge 5% after announcing plans for next-gen battery EVs",
    "description": "In comparison, the Tesla Model 3 has a range of about 430 kilometers, while the long-range model has a range of about 570 kilometers. Toyota has a goal of achieving sales of 1.5 million all-electric vehicles per year by 2026, and selling 3.5 million all-elect…",
    "url": "https://biztoc.com/x/de1425ff6eef115a",
    "urlToImage": "https://c.biztoc.com/p/de1425ff6eef115a/s.webp",
    "publishedAt": "2023-06-13T05:22:04Z",
    "content": "In comparison, the Tesla Model 3 has a range of about 430 kilometers, while the long-range model has a range of about 570 kilometers. Toyota has a goal of achieving sales of 1.5 million all-electric … [+247 chars]"
    },
    {
    "source": {
    "id": "independent",
    "name": "Independent"
    },
    "author": "Vishwam Sankaran",
    "title": "Twitter’s new chief echoes Elon Musk’s goal in first memo to employees as she takes charge",
    "description": "Musk will now be overseeing Twitter’s product and engineering teams as chief technology officer",
    "url": "https://www.independent.co.uk/tech/twitter-new-chief-memo-musk-b2356329.html",
    "urlToImage": "https://static.independent.co.uk/2023/05/12/19/Yaccarino%20Musk.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2023-06-13T05:11:56Z",
    "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nTwitters new chief Linda Yaccarino has sent her firs… [+2983 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Lim Hui Jie",
    "title": "Toyota shares surge 5% after announcing plans for next-gen battery EVs",
    "description": "This unit, named BEV Factory, aims to roll out its \"next generation battery EVs in 2026\"",
    "url": "https://www.cnbc.com/2023/06/13/toyota-shares-surge-after-announcing-plans-for-next-gen-battery-evs.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107129340-1664920711002-IMG_1525.jpg?v=1686633000&w=1920&h=1080",
    "publishedAt": "2023-06-13T05:10:00Z",
    "content": "A display of Toyota electrified vehicles at the 2022 New York Auto Show, April 13, 2022.\r\nShares of Japanese automaker Toyota spiked 5% Tuesday after the company announced it will introduce a full li… [+3072 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Autocar"
    },
    "author": "Autocar",
    "title": "Health check: What's changed at VW Group's software division?",
    "description": "The Volkswagen ID 3 launched with several software glitches, necessitating an early upgrade\n\n\nCEO Oliver Blume has initiated a major reshuffle of Cariad's leadership and responsibilities\n\nIn May, Volkswagen Group CEO Oliver Blume made good on part of the 10-p…",
    "url": "https://www.autocar.co.uk/car-news/business-autoforecast-solutions/health-check-whats-changed-vw-groups-software-division",
    "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/volkswagen-id-3-facelift-infotainment.jpg",
    "publishedAt": "2023-06-13T05:01:45Z",
    "content": "In May, Volkswagen Group CEO Oliver Blume made good on part of the 10-point plan established when he took office last September.\r\nInternal software development company Cariad SE came in for yet anoth… [+368 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Fortune Business Insights",
    "title": "Autonomous Cars Market to Grow Worth USD 19.96 Billion by 2029 | Fortune Business Insights",
    "description": "Autonomous Cars Market to Register CAGR of 42.97% during 2022-2029; Tesla Announces its Intention to Ready its Self-Driving Technology to Drive Growth Autonomous Cars Market to Register CAGR of 42.97% during 2022-2029; Tesla Announces its Intention to Ready i…",
    "url": "https://www.globenewswire.com/news-release/2023/06/13/2686777/0/en/Autonomous-Cars-Market-to-Grow-Worth-USD-19-96-Billion-by-2029-Fortune-Business-Insights.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/05408ba1-26b1-4fdd-8f48-1af4df373348",
    "publishedAt": "2023-06-13T04:43:00Z",
    "content": "Pune, India., June 13, 2023 (GLOBE NEWSWIRE) -- The global autonomous cars market size\r\n was valued at USD 1.50 billion in 2021. The market is projected to grow from USD 1.63 billion in 2022 to USD 1… [+11117 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera Staff",
    "title": "Twitter CEO pledges ‘world’s most accurate real-time information’",
    "description": "Linda Yaccarino lays out her vision for 'Twitter 2.0' a week after taking the helm of the troubled Musk-owned platform.",
    "url": "https://www.aljazeera.com/economy/2023/6/13/twitter-ceo-pledges-worlds-most-accurate-real-time-information",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/06/afp.com-20220323-PH-GTY-1387365339-highres-1686629646.jpg?resize=1920%2C1440",
    "publishedAt": "2023-06-13T04:33:42Z",
    "content": "New Twitter boss Linda Yaccarino has laid out her vision for the troubled social media platform ­ Twitter 2.0 as the worlds town square and a reliable source of information.\r\nTwitter is on a mission … [+2424 chars]"
    }] 


function errorHandler(error){
      console.log("Error Occured",error)
  }

const [newsArticles,setNewsArticles]=useState(article);
const[nUrl,setnUrl]=useState("https://newsapi.org/v2/everything?domains=indianexpress.com&apiKey=9caa0ae2396b418eb60f5fc8c4bf3aba") ;

function setUrl(categories){
  var baseUrl =`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&from=2023-05-31&sortBy=publishedAt&apiKey=9caa0ae2396b418eb60f5fc8c4bf3aba`  ;
  setnUrl(baseUrl);
  handleClick();
}
      async function  handleClick(){
        var apiUrl=nUrl;
        await fetch(apiUrl)
        .then((response)=>response.json() )
        .then((parsedData)=>{
          setNewsArticles(parsedData.articles)
        }).catch(errorHandler) ;
        }
  return (
        <div className='p-2'>
          <div className='row p-4'>
         
            <NewsCategory setUrl={categories=>setUrl(categories)}/>
          </div>
        
          <div className='row'>
            {newsArticles.map((element)=>{
                 return  <div className='col-lg-3 col-sm-6  col-md-4 col-6 shadow' key={element.url} >
            <NewsItem newsUrl={element.url} imgUrl={element.urlToImage} title={element.title} content={element.content} />
                        
            </div>})}
            </div>
                    
            </div>
              
            
          
  ) 
}

export default NewsPage