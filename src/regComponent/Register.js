import React from 'react'

export default class Register extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            regmsg :""
        }
    }

    register = ()=>{
        var name = this.namebox.value
        var phone = this.phonebox.value
        var email = this.mailbox.value
        var password = this.pwdbox.value
        var group = this.groupbox.value

        var data = {
          name : name , phone : phone, email : email,
          password : password, group : group
        }
        console.log(data)

        fetch("http://localhost:8989/user/register",{
          method : "POST",
          headers:{
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        }).then(response=>response.json()).then(result=>
          {
              if(result.status){
                this.setState({regmsg:"Register Done !"})
              }else{
                this.setState({regmsg:"Register Failed !"})
              }
          })
    }

    render()
    {
        return <>
        <section class="section contact-me" data-section="section4">
        <div class="container">
          <div class="section-heading">
            <h2>Register User</h2>
            <div class="line-dec"></div>            
          </div>
          <div class="row">
            <div class="right-content">
              <div class="container">
              
                  <div class="row" id='contact'>
                    <div class="col-md-6">
                      <fieldset>
                        <input                        
                          type="text"
                          class="form-control"                          
                          placeholder="Your name..."
                          ref={c=>{this.namebox=c}}
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset>
                        <input                         
                          type="text"
                          class="form-control"                   
                          placeholder="Your phone..."
                          ref={c=>{this.phonebox=c}}
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset>
                        <input                          
                          type="text"
                          class="form-control"                          
                          placeholder="Your email..."
                          ref={c=>{this.mailbox=c}}
                        />
                      </fieldset>
                    </div>   
                    <div class="col-md-6">
                      <fieldset>
                        <input                          
                          type="password"
                          class="form-control"                          
                          placeholder="Your password..."
                          ref={c=>{this.pwdbox=c}}
                        />
                      </fieldset>
                    </div>                 
                    <div class="col-md-6">
                      <fieldset>
                        <select class="form-control"
                          ref={c=>{this.groupbox=c}}
                          id="group">
                            <option>Choose Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                      </fieldset>
                    </div>  
                </div>
                <br/>
                <div class='row'>    
                    <div class="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" 
                        onClick={this.register}
                        class="button">
                          Register
                        </button>
                        &nbsp;&nbsp;
                        <b class='text-danger'>{this.state.regmsg}</b>
                      </fieldset>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    }
}