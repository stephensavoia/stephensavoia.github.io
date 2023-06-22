var targetRoot = document.getElementById("react-root");

//ReactJS Class
var TeamMember = React.createClass({
   render: function(){
       return(
            <div class="row">
            <div class="row_left">
            <a class="img_link" href={this.props.link}>
                <img src={this.props.img} alt="" />
            </a>
            </div>
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

var teamMembers = [{
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
                    },
                   {
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
                    },
                   {
                    link:"https://github.com/stephensavoia/drive_to_shopify",
                    img:"img/drive-to-shopify.jpg",
                    title:"Bulk Upload Product Images from Google Drive to Shopify",
                    tools:"Python (Pandas), Google Drive API, Shopify",
                    text:"The objective of this project was to write Python code that would allow Shopify store owners to bulk upload product images from a Google Drive folder to a Shopify store, via Shopify's \"import products by CSV\" feature. Image file information is collected via the Google Drive API, and is formatted using Pandas."
                    },
                    {
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
               teamMembers.map(function(obj){
                return(<TeamMember id={obj.id} img={obj.img} name={obj.name} title={obj.title} />);
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



                    
                    








