const React = require('react');
const Navbar = require('./Navbar');

    module.exports = function Layout({title,children}) {
 return (                        
   <html lang="en">                       
     <head>
       <title>{title}</title>

     </head>
     <body>
      <Navbar/>
      {children}
      </body>
   </html>
 );
};
