const React = require('react');

   class New extends React.Component {
     render() {
       return (
           <div>
               <h1>New Student page</h1>
               <form action="/pokemon" method="POST">
                 <input type="text" name="name" placeholder='Name'/><br/>
                 <input type="text" name="grade" placeholder="Final Grade"/><br/>
                 Meets Requirements ?: <input type="checkbox" name="requirements" /><br/>
                 <input type="submit" name="" value="Create Student File"/>
               </form>
           </div>);
       }
     }

   module.exports = New;