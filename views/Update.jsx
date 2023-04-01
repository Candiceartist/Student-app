const React = require('react');

   class Update extends React.Component {
     render() {
       return (
           <div>
               <h1>Update Student Grades</h1>
               <form action="/pokemon/" method="POST">
                 <input type="text" name="assignment" placeholder='Assignment'/><br/>
                 <input type="text" name="grade" placeholder="Grade"/><br/>
                 Meets Requirements ?: <input type="checkbox" name="requirements" /><br/>
                 <input type="submit" name="" value="Update Student Grades"/>
               </form>
           </div>);
       }
     }

   module.exports = Update;