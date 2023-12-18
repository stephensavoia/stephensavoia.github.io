var targetRoot = document.getElementById("react-root");

//ReactJS Class
var Project = React.createClass({
   render: function(){
       return(
        <div id={this.props.id} className="row">
            <div className="row_left">
            <a className="img_link" href={this.props.link}>
                <img src={this.props.img} alt="" />
            </a>
            </div>
            <div className="row_right">
            <a href={this.props.link}>
                <h3>{this.props.title}</h3>
            </a>
            <span className="tools">{this.props.tools}</span>
            <p>{this.props.text}</p>
            </div>
        </div>
       );
   } 
});

var Projects = [{
                    id:"italian-bakery",
                    link:"https://www.tremari.ca/",
                    img:"img/italian-bakery-shopify.jpg",
                    title:"Italian Bakery Online Store",
                    tools:"Shopify (HTML, CSS, JavaScript, Liquid, GraphQL), Sheets/Excel, Pandas, Meta Ads Manager, Google Ads",
                    text:"I used the Shopify platform to create an ecommerce website for a family-owned Italian bakery. I communicated with a marketing team to obtain assets required for the website and ad campaigns. I worked with a fulfillment team to understand business needs surrounding checkout and delivery. I used Python Pandas and Google Sheets to reach data-driven insights that led to improved UX, navigation, and product categorization."
                    },{
                    id:"bike-share",
                    link:"https://nbviewer.org/github/stephensavoia/stephensavoia.github.io/blob/main/bikeshare/analysis.ipynb",
                    img:"img/bike_share_analysis.jpg",
                    title:"Bike Share Toronto Rides Analysis",
                    tools:"Python (Pandas, Rasterio, JSON, seaborn)",
                    text:"For this project, I analysed Bike Share Toronto data to find that riders tended to lose elevation (i.e. bike downhill more often than uphill) in 2022. This project required me to collect data from three different sources: ride data (CSV), station data (JSON), and elevation data (DEM/TIF). Seaborn was used to create visualizations."
                    },
                    {
                    id:"word-cloud",
                    link:"https://nbviewer.org/github/stephensavoia/stephensavoia.github.io/blob/main/wordcloud/rt-word-cloud-generator.ipynb",
                    img:"img/word_cloud.png",
                    title:"Film Review Word Cloud Generator",
                    tools:"Python (Selenium, NLTK, WordCloud)",
                    text:"This code automates the process of generating a word cloud from the review snippets for a given film on Rotten Tomatoes. Selenium is used to scrape review snippets, and NLTK and regular expressions are used to clean the data. The code outputs to a word clouds summarizing critic sentiment of the film."
                    },
                    {
                    id:"national-parks",
                    link:"https://stephensavoia.github.io/parks/parks.html",
                    img:"img/parks.jpg",
                    title:"U.S. National Parks Recreational Visits Analysis",
                    tools:"R (dplyr, ggplot2), Tableau",
                    text:"This is a project I started after completing the Coursera Google Data Analytics Professional Certificate. Since my goal was to practice using R for data aggregation and visualization, I chose to explore rather obvious hypothesis: more people will visit U.S. national parks when the weather is warm."
                    },
                   ];

var PageContent = React.createClass({
   render: function(){
       return (
        <div>
           {
               Projects.map(function(obj){
                return(<Project key={obj.id} id={obj.id} link={obj.link} img={obj.img} title={obj.title} tools={obj.tools} text={obj.text} />);
           })
           }
        </div>
       );
   } 
});

ReactDOM.render(
    <PageContent />
    ,
    targetRoot
);



                    
                    








