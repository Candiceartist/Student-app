const React = require('react');

   class New extends React.Component {
     render() {
       return (
           <div>
               <h1>New Student page</h1>
               <form action="/pokemon" method="POST">
                 <input type="text" name="name" placeholder='Full Name'/><br/>
                 <input type="text" name="grade" placeholder="Final Grade"/><br/>
                 Meets Requirements ?: <input type="checkbox" name="metRequired" /><br/>
                 <input type="submit" name="" value="Create Student File"/>
               </form>
               <br></br>
               <nav>
              <a href="/pokemon">Return to Homepage</a>
              </nav>
           </div>);
       }
     }

   module.exports = New;