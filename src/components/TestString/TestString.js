import React from 'react';

function greetingUser(userName)
{
   return `Hello, ${userName}!`;
}
function TestString()
{
   return(
      <h1>{greetingUser('Alex')}</h1>
   );
}

export default TestString;
