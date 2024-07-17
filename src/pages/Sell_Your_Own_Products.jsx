function Sell_Your_Own_Products(){
    return(
        <div style={{backgroundImage:'URL(https://i.pinimg.com/originals/90/fb/f6/90fbf6181ed4594ac92e634366b3b25d.jpg)',backgroundAttachment:'fixed',backgroundPosition:'centre',backgroundRepeat:'no-repeat',backgroundSize:'cover'
        }} >
        <div style={{paddingLeft:'500px',paddingTop:'',backgroundImage:'URL(https://i.pinimg.com/originals/90/fb/f6/90fbf6181ed4594ac92e634366b3b25d.jpg)',backgroundAttachment:'fixed',backgroundPosition:'centre',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems: 'center',paddingTop:'90px',paddingRight:'500px'}}>
                <h1 style={{textAlign:'center',margin:'0',color:'black',fontFamily:'sans-serif'}}>
                    Add Products
                </h1>
                <div style={{display:'flex',flexDirection: 'column',alignItems:'center',border: '4px solid rosybrown',height:'300px',width:'400px',padding: '20px',gap:'40px',marginBottom:'25px',backdropFilter:'blur(15px)',color:'black'}}>
               
                <input type="text" placeholder="Enter Product Name" style={{width:'350px',height:'20px', background:'transparent',border:'none',outline:'none',border:'2px solid rosybrown',borderRadius:'20px',boxShadow:'5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,.16)',color:"black"}}></input>
                <input type="textarea" placeholder="Product Description" style={{width:'350px',height:'20px', background:'transparent',border:'none',outline:'none',border:'2px solid rosybrown',borderRadius:'20px',boxShadow:'5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,.16)',color:'black'}}></input>
                <input type="number" placeholder="Enter Product Price:$" style={{width:'350px',height:'20px', background:'transparent',border:'none',outline:'none',border:'2px solid rosybrown',borderRadius:'20px',boxShadow:'5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,.16)',color:'black'}}></input>
                <input type="file" placeholder="Product Images" style={{width:'350px',height:'50px', background:'transparent',outline:'none',border:'2px solid rosybrown',borderRadius:'20px',boxShadow:'5px 5px 12px #ffffff inset 5px 5px 12px rgba(0,0,0,.16)',color:'black'}}></input>
                <button style={{width:'250px',height:'100px', backgroundColor:'pink',borderColor:'whitesmoke',borderRadius:'20px'}}>
                    Upload Product
                </button>
         
                </div>
                </div> 
        </div>
        <div style={{display:'flex',
          justifyContent:'space-between'
          ,alignItems:'center',paddingLeft:'10px'
          ,paddingRight:'10px'
        }}>
    </div>
        </div>
        
        )
        }
        export default Sell_Your_Own_Products;