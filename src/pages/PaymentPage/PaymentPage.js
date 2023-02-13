import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./PaymentPage.css";
import { cartSelector,clearCart } from "../../reducers/cartReducer";
import { useSelector, useDispatch } from 'react-redux';
import Login from "../Login/Login";
import { useNavigate } from 'react-router-dom';


function Payment() {
    const username = useSelector(cartSelector).userInfo;
    let navigate=useNavigate()
    const dispatch=useDispatch();
    console.log(username);
    function hendleSubmit(){
        navigate("/");
        dispatch(clearCart());

    }
    return (


        username.length > 0 ? (
            <div className=" mt-80 ">
              <div><Header /></div>
              <div className="container paymentBox">
        <div className="row">
            
            <div className="col-12 mt-4">
                <div className="card p-3">
                    <p className="mb-0 fw-bold h4">Payment Methods</p>
                </div>
            </div>
            <div className="col-12">
                <div className="card p-3">
                    <div className="card-body border p-0">
                        <p>
                            <a className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                                data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true"
                                aria-controls="collapseExample">
                                <span className="fw-bold">Billing Summary</span>
                                
                                
                            </a>
                        </p>
                       
                    </div>
                    <div className="card-body border p-0">
                        
                        <div className="collapse show p-3 pt-0" id="collapseExample">
                            <div className="row">
                                <div className="col-lg-5 mb-lg-0 mb-3">
                                    
                                </div>
                                <div className="col-lg-7">
                                    <form action="" className="form">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="form__div">
                                                    <input type="text" className="form-control" placeholder=" "/>
                                                    <label for="" className="form__label">Card Number</label>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form__div">
                                                    <input type="text" className="form-control" placeholder=" "/>
                                                    <label for="" className="form__label">MM / yy</label>
                                                </div>
                                            </div>

                                            <div className="col-2">
                                                <div className="form__div">
                                                    <input type="password" className="form-control" placeholder=" "/>
                                                    <label for="" className="form__label">cvv code</label>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="form__div">
                                                    <input type="text" className="form-control" placeholder=" "/>
                                                    <label for="" className="form__label">name on the card</label>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="btn btn-primary onsubmit" onClick={hendleSubmit}>Sumbit</div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                
            </div>
        </div>
       
    </div>
              
      
              
              <div><Footer /></div>
      
            </div>
          ) : (
                
            <div className=" mt-80">
                {alert("Please Login or Sign up for complete the order")}
                    
                    <Login></Login>
      
              
              
              
            </div>)
    );

}
export default Payment;