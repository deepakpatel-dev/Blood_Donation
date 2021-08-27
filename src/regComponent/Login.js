import React from 'react'

export default class Login extends React.Component
{
    constructor(props){
        super(props)
    }

    login = ()=>
    {
      var email = this.mailbox.value
      var pwd = this.pwdbox.value

      var data = {
        email:email,pwd:pwd
      }

      fetch("http://localhost:8989/user/login",{
        method : "POST",
        headers:{
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      }).then(response=>response.json()).then(result=>
        {
          
        })
    }

    render()
    {
        return <>
        <section class="section contact-me" data-section="section4">
        <div class="container">
          <div class="section-heading">
            <h2>Login User</h2>
            <div class="line-dec"></div>            
          </div>                      
                  <div class="row" id='contact'>
                    <div class="col-md-6">
                      <fieldset>
                        <input                          
                          type="text"
                          class="form-control"                          
                          placeholder="Your email..."
                          ref={c=>this.mailbox=c}
                        />
                      </fieldset>
                    </div>   
                    <div class="col-md-6">
                      <fieldset>
                        <input                          
                          type="password"
                          class="form-control"                          
                          placeholder="Your password..."
                          ref={c=>this.pwdbox=c}
                        />
                      </fieldset>
                    </div>                                    
                </div>
                <br/>
                <div class='row'>    
                    <div class="col-md-12">
                      <fieldset>
                        <button type="submit" 
                        onClick={this.login}
                        id="form-submit" class="button">
                          Login
                        </button>
                      </fieldset>
                    </div>
                  </div>                            
        </div>
      </section>
        </>
    }
}