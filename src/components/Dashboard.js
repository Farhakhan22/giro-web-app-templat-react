import React, { Component } from 'react'
import '../components/dashboard.css'
import Card from '@material-ui/core/Card';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RefreshIcon from '@material-ui/icons/Refresh';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'


class Dashboard extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
      console.log("this method is calling")
  }
  render(){
    return(
     <div>
     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <img src="img\logo.png" style={{height:'95px',float:'left',margin:'10px'}} />
    </div>
    <h4 class="navbar-brand" style={{color:'black',fontFamily:'sans-serif',fontWeight:'bold'}}>Branchless Banking - Take The Branch With You</h4>
    <div class="collapse navbar-collapse" id="myNavbar">
      {/* <ul class="nav navbar-nav"> */}
      <ul class="list-inline" style={{float:'left'}}>
    <li><a href="#" style={{fontSize:'16px',color:'black'}}>Home</a></li>
        <li><a href="#" style={{fontSize:'16px',color:'black'}}>About US</a></li>
  </ul>
        {/* <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li> */}
      {/* </ul> */}
      <ul class="nav navbar-nav navbar-right">
    <li><button style={{backgroundColor:'#621522',borderRadius:'8px',borderColor:'black',height:'24px'}}><p style={{color:"white",fontWeight:"bold"}}>SignUp</p></button></li>
        <li><a style={{fontSize:'16px',color:'black',marginTop:'-2px'}} href="#"><i class='fas fa-user-circle' style={{fontSize:'24px'}}></i> Log In</a></li> 
      </ul>
    </div>
  </div>
</nav>
  
	
	<div class="cf" style={{backgroundColor:'beige'}}>
		
        <div class="row">
			
            <div class="col-md-4"  >
               <div style={{marginTop:'10px'}}>
		<Card style={{boxShadow:'5px -4px 20px #ccc',borderRadius:'8px',margin:'21px',width:'70%',backgroundColor:'#621522',marginLeft:'20%'}}>
      <CardContent>
      <div className="listContainer cf" >
                            <p className="Ac_h"> WELCOME</p>
                            <p className="Ac_bl"><span>GIRO</span></p>
                            <div className="new_line2 dis"></div>
                            <ul className="tab homes-tab cf" style={{marginLeft:'10%',marginTop:"12px",fontSize:'18px',padding:'55px'}}>
                               
                                <li >
                                    <a className="listItem" title="" href="javascript:void(0);" >
                                        <div className="itemName" style={{color:'white',}}>My Orders</div>
                                    </a>
                                </li>
                                
                                <li>
                                    <a class="listItem" title="" href="#">
                                        <div class="itemName" style={{color:'white'}}>Refer A Friend</div>
                                    </a>
                                </li>
                                <li>
                                    <a className="listItem" title="" href="#">
                                        <div className="itemName" style={{color:'white'}}>FAQ's</div>
                                    </a>
                                </li>
                                <li>
                                    <a className="listItem" title="" href="#">
                                        <div class="itemName" style={{color:'white'}}>24x7 Help</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/transaction" class="listItem" title="">
                                        <div className="itemName" style={{color:'white'}}>Wallet Statements</div>
                                    </a>
                                </li>
                                                                <li>
                                    <a style={{color:'white'}} className="listItem" href="https://demo.girofintech.com/logout" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>
                                </li>
                                </ul>
                        </div>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </div>
            </div>
			<div class="col-sm-6" style={{marginLeft:'30%',marginTop:'-34%'}} >
			<Card style={{boxShadow:'5px -4px 20px #ccc',borderRadius:'10px',margin:'10px',width:'120%'}} >
                <div >
                    <ul className="new_menu_list " >
                        <li className="ul.ba">
                            <a href="/pay">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/wallet.png" alt="wallet"/>
                                </div>
                                <span>Wallet Transfer</span>
                            </a>
                        </li>
                         <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/bill.png" alt="bill"/>
                                </div>
                                <span>Bill Payments</span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon enbd">
                                    <img src="https://girofintech.info/images/emiratesnbd_new_logo.gif" alt="ENBD"/>
                                </div>
                                <span>ENBD</span>
                            </a>
                        </li>
                        <li>
                            <a href="/mobiletopup">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/mob.png" alt="mob"/>
                                </div>
                                <span>Telecom</span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/travel.png" alt="travel"/>
                                </div>
                                <span>Travels </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/microlending.png" alt="microlending"/>
                                </div>
                                <span>Micro Lending</span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/grocery.png" alt="grocery"/>
                                </div>
                                <span>Food</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://girofintech.info/shopping">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/Ecom.png" alt="Ecom"/>
                                </div>
                                <span>Ecom </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/pharmacy.png" alt="pharmacy"/>
                                </div>
                                <span>Pharmacy </span>
                            </a>
                        </li>
                        <li>
                            <a href="/remittance">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/remit.png" alt="International Remittance"/>
                                </div>
                                <span>Remittance </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/gift.png" alt="gift"/>
                                </div>
                                <span>Rewards </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/insurance.png" alt="insurance"/>
                                </div>
                                <span>Insurance </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/rta.png" alt="rta"/>
                                </div>
                                <span>RTA </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/events.png" alt="events"/>
                                </div>
                                <span>Events </span>
                            </a>
                        </li>
                        <li>
                            <a href="/comingsoon">
                                <div class="smartIcon">
                                    <img src="https://girofintech.info/images/new_icon/cinema.png" alt="cinema"/>
                                </div>
                                <span>Cinema </span>
                            </a>
                        </li> 
                    </ul>
                </div>
				</Card>
           </div>
        </div>
    </div>
       </div>
	   
    )
  }
}
export default Dashboard;
