var targetRoot = document.getElementById("react-root");

//ReactJS Class
var Project = React.createClass({
   render: function(){
       return(
        <div id={this.props.id} key={this.props.id} className="row">
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
                    id:"drive-to-shopify",
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
                    },
                   {
                    id:"bike-share",
                    link:"https://github.com/stephensavoia/stephensavoia.github.io/blob/main/bikeshare/analysis.ipynb",
                    img:"img/bike_share_analysis.jpg",
                    title:"Bike Share Toronto Rides Analysis",
                    tools:"Python (Pandas, Rasterio, JSON, seaborn)",
                    text:"For this project, I analysed Bike Share Toronto data to find that riders tended to lose elevation (i.e. bike downhill more often than uphill) in 2022. This project required me to collect data from three different sources: ride data (CSV), station data (JSON), and elevation data (DEM/TIF). Seaborn was used to create visualizations."
                    },
                   {
                    id:"italian-bakery",
                    link:"https://shop.tremaribakery.ca/",
                    img:"img/italian-bakery-shopify.jpg",
                    title:"Italian Bakery Online Store",
                    tools:"Shopify (HTML, CSS, JavaScript, Liquid)",
                    text:"This is an ecommerce website that I created, pro bono, for an Italian bakery that was forced to shift its business online during the pandemic, due to mandated store closures. It was completed using Shopify (including several third-party apps and custom CSS, JavaScript, and Liquid). I communicated with bakery owners in order to obtain required assets (logos, photos, copy, etc.) and understand business needs surrounding product categorization, checkout, and delivery."
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
                return(<Project id={obj.id} link={obj.link} img={obj.img} title={obj.title} tools={obj.tools} text={obj.text} />);
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



                    
                    








