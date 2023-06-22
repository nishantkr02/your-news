import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem' 
import NewsCategory from './NewsCategory'
function NewsPage() {
  
const article = [
    {"source":{"id":null,"name":"The Indian Express"},"author":"Sukrita Baruah","title":"9 killed in fresh violence in Manipur","description":"According to the Superintendent of Police, Imphal East, the incident took place at around 10.30 pm on Tuesday.","url":"https://indianexpress.com/article/north-east-india/manipur/9-killed-in-fresh-violence-in-manipur-8661971/","urlToImage":"https://images.indianexpress.com/2023/06/PTI06_08_2023_000028B.jpg","publishedAt":"2023-06-14T05:56:13Z","content":"Nine people were killed Tuesday night amidst incidents of firing and arson in the Aigijang village of Manipurs Kangpokpi district. This is the largest casualty in a single incident in the continuing … [+499 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"ENS Economic Bureau","title":"6,500 high net worth individuals likey to exit India in 2023: Report","description":"With reference to other countries, this number of 6,500 for India for 2023 compares with expected net outflow of 13,500 HNWIs in China, 3,200 HNWIs in the UK and 3,000 in Russia.","url":"https://indianexpress.com/article/business/economy/6500-high-net-worth-individuals-exit-india-2023-8661945/","urlToImage":"https://images.indianexpress.com/2023/06/rupee3.jpg","publishedAt":"2023-06-14T05:42:10Z","content":"India is expected to see the exit of 6,500 high-net-worth individuals (HNWIs) in 2023, the second-highest estimated outflow number globally, as per the latest Henley Private Wealth Migration Report 2… [+4503 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express News Service","title":"Ex-Punjab CM Charanjit Channi questioned by vigilance again","description":"Channi had first been summoned by the bureau in the disproportionate assets case in April. Tuesday marked the second time that Channi had appeared before the investigating agency.","url":"https://indianexpress.com/article/cities/chandigarh/ex-punjab-cm-charanjit-channi-questioned-vigilance-disproportionate-assets-case-8661781/","urlToImage":"https://images.indianexpress.com/2023/06/CM100.jpeg","publishedAt":"2023-06-14T05:41:52Z","content":"Former Punjab Chief Minister (CM) Charanjeet Singh Channi on Tuesday appeared before the Vigilance Bureau (VB) at the agencys headquarter in Sector 68 on Tuesday in connection with the disproportiona… [+277 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Entertainment Desk","title":"On Sushant Singh Rajput’s third death anniversary, his sister Shweta urges fans to ‘imbibe his qualities’, shares screenshot of WhatsApp conversation","description":"Sushant Singh Rajput died on June 14, 2020. His death is being investigated by the CBI, but no chargesheet has been filed yet.","url":"https://indianexpress.com/article/entertainment/bollywood/on-sushant-singh-rajput-third-death-anniversary-his-sister-shweta-post-8661853/","urlToImage":"https://images.indianexpress.com/2023/06/sushant-singh-rajput.jpg","publishedAt":"2023-06-14T05:26:46Z","content":"Late actor Sushant Singh Rajput‘s US-based sister Shweta Singh Kirti has shared a new post on his third death anniversary. Taking to Instagram, Shweta shared several pictures, including one that appe… [+1938 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Saurabh Parashar","title":"How education can reform convicts: IG Zaidi opens up on prison lessons","description":"During his jail term, he used to teach the convicts as a way to utilise his time in a constructive way.","url":"https://indianexpress.com/article/cities/chandigarh/how-education-can-reform-convicts-ig-zaidi-opens-up-on-prison-lessons-8661838/","urlToImage":"https://images.indianexpress.com/2023/06/NL-zaidi-2col.jpg","publishedAt":"2023-06-14T05:10:50Z","content":"Inspector General (IG), Zahur Haider Zaidi, one of the accused in the Kotkhai custodial death case, who is currently out on bail, shared his experiences on how education changed an illiterate convict… [+2623 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Trends Desk","title":"Watch: Woman wins free beer for a year after acing half-court shot","description":"Polar Park Brewing Company had offered free beer for a year to a non-player who would ace a half-court shot.","url":"https://indianexpress.com/article/trending/trending-in-india/woman-free-beer-half-court-shot-8661819/","urlToImage":"https://images.indianexpress.com/2023/06/basketball-shot-viral.jpeg","publishedAt":"2023-06-14T04:37:10Z","content":"Getting a supply of free beer for a full year sounds like a pretty lucrative deal. Blyss Ward, a Canadian basketball enthusiast, managed to bag this after she hit an impressive shot at a basketball m… [+1134 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Arushi Jain","title":"Adipurush likely to earn Rs 50 cr on day 1, over one lakh tickets sold: Can Prabhas deliver the much-needed hit with the retelling of Ramayan?","description":"Trade experts believe the audience will lap up Om Raut's mythological drama Adipurush primarily because it is a retelling of the Hindu epic, Ramayan. It stars Prabhas, Kriti Sanon and Saif Ali Khan in the lead roles.","url":"https://indianexpress.com/article/entertainment/bollywood/adipurush-to-earn-rs-50-crore-day-1-prabhas-box-office-advance-booking-8660718/","urlToImage":"https://images.indianexpress.com/2023/06/adipurush-box-office.jpg","publishedAt":"2023-06-14T04:27:24Z","content":"A big budget does not guarantee a successful film. Take for instance Shah Rukh Khan’s Zero, Salman Khan’s Tubelight, Ranbir Kapoor’s Saawariya, and Alia Bhatt’s Brahmastra. But the one thing that rai… [+5765 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"Cyclone Biparjoy Live Updates: IMD sounds red alert in Saurashtra, Kutch coasts; over 37,000 evacuated","description":"Cyclone Biparjoy News Live Updates. June 14: By Tuesday evening, over 37,700 people were evacuated from the eight coastal districts of Gujarat that are likely to be worst-hit by Cyclone Biparjoy, and the Army was on standby.","url":"https://indianexpress.com/article/india/cyclone-biparjoy-live-updates-gujarat-kutch-evacuations-landfall-imd-weather-8661779/","urlToImage":"https://images.indianexpress.com/2023/06/People-being-evacuated-from-Kutch-districts-Jakhau-village-on-Monday-ahead-of-Cyclone-Biparjoys-landfall.-PTI-1.jpg","publishedAt":"2023-06-14T04:25:46Z","content":"Kachchh, Devbhumi Dwarka, Porbandar, Jamnagar, Rajkot, Junagarh and Morbi districts of Saurashtra and Kutch are expected to receive heavy to very heavy rainfall and extremely heavy rain at isolated p… [+978 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Express Web Desk","title":"Sensex, Nifty trade flat; metal stocks rally","description":"Sectorally, the media index gained 1.03 per cent, followed by Nifty Metal at 0.98 per cent.","url":"https://indianexpress.com/article/business/market/stock-market-today-sensex-nifty-live-adani-group-zee-8661722/","urlToImage":"https://images.indianexpress.com/2023/06/sensexbloomberg.jpg","publishedAt":"2023-06-14T04:04:02Z","content":"Domestic equities opened nearly flat in positive on Wednesday despite a fall in US inflation in May. BSE benchmark Sensex opened 24.59 points, or 0.04 per cent at 63,167.75, while broader NSE Nifty50… [+1267 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":null,"title":"Rahul Gandhi’s American Truck Yatra, Travels From Washington To New York; What Did He Discuss?","description":"Rahul Gandhi’s American Truck Yatra, Travels From Washington To New York; What Did He Discuss?","url":"https://indianexpress.com/videos/news-video/rahul-gandhis-american-truck-yatra-travels-from-washington-to-new-york-what-did-he-discuss-2/","urlToImage":"https://images.indianexpress.com/2023/06/WhatsApp-Image-2023-06-13-at-18.58.36-1.jpeg","publishedAt":"2023-06-14T03:55:18Z","content":"Boys Washed Away By Sea At Juhu Koliwada, Mumbai; Rescue Operations Ongoing, Body Of One Recovered"},{"source":{"id":null,"name":"The Indian Express"},"author":"Reuters","title":"Disney delays Avatar sequels, reshuffles multiple Marvel movies including Deadpool 3 and Fantastic Four reboot","description":"Disney announced a new Star Wars film for 2026, delayed the Avatar sequels and multiple Marvel films.","url":"https://indianexpress.com/article/entertainment/hollywood/disney-sets-date-for-new-star-wars-film-delays-avatar-sequels-8661703/","urlToImage":"https://images.indianexpress.com/2023/06/Star-Wars-and-Avatar.jpg","publishedAt":"2023-06-14T03:54:06Z","content":"Walt Disney Co on Tuesday announced that a new Star Wars film will reach theatres in 2026 but said it would postpone the release of the next three installments in James Cameron‘s blockbuster Avatar s… [+1572 chars]"},{"source":{"id":null,"name":"The Indian Express"},"author":"Asad Rehman","title":"Down in UP, Congress looks beyond upper castes, says ‘sometimes, don’t need everyone’s vote’","description":"Congress leaders say the party has started working on the formula of Dalits plus Muslims and MBCs, says these have been let down by SP, BSP","url":"https://indianexpress.com/article/political-pulse/up-congress-upper-castes-votes-8661721/","urlToImage":"https://images.indianexpress.com/2023/06/ch1387476.jpg","publishedAt":"2023-06-14T03:52:17Z","content":"While the Congress may not have fared well in the 2022 Uttar Pradesh Assembly elections, the party is hopeful of making inroads in the state in the 2024 Lok Sabha polls, with a focus on Dalits, Musli… [+5438 chars]"},
  ];


function errorHandler(error){
      console.log("Error Occured"+ error);
  }

const [newsArticles,setNewsArticles]=useState(article);
const[nUrl,setnUrl]=useState("") ;
const[page,SetPage]=useState(1);
useEffect( 
  function fetchOnUrlChange(){
  async function  fetchArticles(){
    await fetch(nUrl)
    .then((response)=>response.json() )
    .then((parsedData)=>{
      const articles=parsedData.articles;
      setNewsArticles(articles)
    }).catch(errorHandler) ;
    }
    fetchArticles();
},[nUrl,page]
);
function setUrl(categories){
  var baseUrl =`https://newsapi.org/v2/top-headlines?country=in&category=${categories}&from=2023-05-31&sortBy=publishedAt&apiKey=7545aaa1301f45549b2efb10cbfa01a6&page=${page}`  ;
  setnUrl(baseUrl);



}
function setSearch(sKey){
  var baseUrl =`https://newsapi.org/v2/everything?q=${sKey}&from=2023-05-31&sortBy=publishedAt&apiKey=7545aaa1301f45549b2efb10cbfa01a6`  ;
  setnUrl(baseUrl);

 
}

const handleNext=()=>{
  var npage =page+1 ;
  SetPage(npage);
  var nextU=nUrl.slice(0, 146);
  console.log("nextU : : : "+nextU);
  setnUrl(`${nextU}&page${page}`);
console.log("page"+page);
console.log(nUrl);
}
const handlePrev=()=>{
  SetPage((page)=>page-1);
  var PrevPage =`${nUrl}+${page}`;
setnUrl(PrevPage);

}


  return (
        <div className='p-2'>
          <div className='row p-4'>
         
            <NewsCategory 
            setUrl={categories=>setUrl(categories)}
            setSearch={sKey=>setSearch(sKey)}
            />

          </div>
      
          <div className='row'>
            {newsArticles.map((element)=>{
                 return  <div className='col-lg-3 col-sm-6  col-md-4 col-6 ' key={element.url} >
                      <NewsItem newsUrl={element.url}
                      imgUrl={element.urlToImage} 
                        title={element.title}
                        content={element.content} />
                                  
                      </div>})}
            </div>
            <div className='d-flex justify-content-between p-2 my-3 shadow'>
           
            <button disabled={page<=1} className='btn btn-secondary'onClick={handlePrev}> &larr; Previous</button>
            <button className='btn btn-secondary' onClick={handleNext}>Next &rarr;</button>
            </div>
                    
            </div>
              
            
          
  ) 
}

export default NewsPage