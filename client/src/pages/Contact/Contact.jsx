import React from 'react'
import "./contactus.css"
function Contact() {
     return (
          <>

               <div className="jumbotron" style={{ marginTop: '140px' }}>
                    <div className="container">
                         <h1 className="display-3">Contact Us!</h1>
                         <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                         <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                    </div>
               </div>
               <br></br>
               <div class="container" >
                    <form action="/action_page.php">
                         <label for="fname">First Name</label>
                         <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                         <label for="lname">Last Name</label>
                         <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                         <label for="country">Country</label>
                         <select id="country" name="country">
                              <option value="australia">Australia</option>
                              <option value="canada">Canada</option>
                              <option value="usa">USA</option>
                         </select>

                         <label for="subject">Subject</label>
                         <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                         <input type="submit" value="Submit" />
                    </form>
               </div>

          </>
     )
}

export default Contact