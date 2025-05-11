import './style.css'
import Client from './Pictures/Client.jpg'
import Talent from './Pictures/talent-img.jpg'
import Daimond from './Pictures/daimond.png'
import Dollar from './Pictures/dollar.png'
import Safe from './Pictures/safe.png'
import { Link, useNavigate } from "react-router-dom";



function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <>  
       <div class="Home-container">
          <div class="header">
                <div class=" titlediv">
                  <h1 class="title"> ASSIRE </h1>
                </div>
            <div class="inputs">

                <Link to="/" class="home">Home</Link>                
                <Link to="/browse" class="BF">Browse Freelancers </Link>
                <Link to="/post" class="PJ">Post a Job</Link>
                <Link to="/contact" class="contact">Contact Us</Link>
            </div>
                <input class="searchbutton" placeholder="Search" type="text" />
                <button class="button" onClick={handleClick} >Login/Signup</button>
          </div>
                <hr  class="hr"/>

          <div class="main" >
                <div class="client"> 
                    <img  class="client-pic" src={Client} />
                    <div class="top-left">For Clients</div>
                    <div class="center-left">Find Workforce Your Way</div>
                    <div class="center-left-2">" Build your project with the largest nexus of professionals "</div>
                    <div class="post-job"><p class="post"> Post a job  and Hire a pro</p> <p class="job">Marketplace &rarr;</p></div>
                    <div class="buy-pro"><p class="buy">Browse and buy projects</p><p class="pro">Project Vault &rarr;</p></div>
                    <div class="advice"><p class="adv">Get Advice from an Industry Expert</p><p class="ice"> Insights &rarr; </p> </div>
                </div>
                  <div class="why">
                    <div class="us">Why choose <span class="name">Assire</span> ? </div>   
                    <img src={Daimond} class="daimond-pic"/>
                    <div class="TopLeft"> Excellence in work</div>
                    <div class="TopLeft-2">Check client reviews,work samples and verified Identity. </div>
                    <img src={Dollar} class="dollar-pic"/>
                    <div class="CenterLeft">No pay until perfect</div> 
                    <div class="CenterLeft-2">Interview freelancers across globe , negotiate cost and pay only when it’s perfect for you. </div>  
                    <img src={Safe} class="safe-pic" />
                    <div class="BottomLeft">Safe and Secure</div>
                    <div class="BottomLeft-2">We are there for you to support 24/7.</div>             
                  </div>
          </div>
                <hr class="hr" />
          <div class="footer">
                <p class="copy">© 2025 <span class="foott">Assire</span>  Marketplace</p>
          </div>
          </div>
    </>
  )
}

export default Home
