var targetRoot = document.getElementById("react-root");

//ReactJS Class
var Project = React.createClass({
   render: function(){
       return(
        <div id={this.props.id} class="row">

            <div class="row_right">
            <a href={this.props.link}>
                <h3>{this.props.title}</h3>
            </a>
            <span class="tools">{this.props.tools}</span>
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
                    id:"drive-to-shopify2",
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
                    },
                   {
                    id:"drive-to-shopify3",
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
                    },
                    {
                    id:"drive-to-shopify4",
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
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



                    
                    








