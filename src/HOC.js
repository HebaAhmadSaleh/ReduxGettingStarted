
import React from 'react'


function wrapWithUser(Component) {
  // information that we don’t want everything to access
  var secretUserInfo = {
    name: 'Jack Franklin',
    favouriteColour: 'blue'
  };

  // return a newly generated React component
  // using a functional, stateless component
  return function(props) {
      console.log(props);
    // pass in the user variable as a property, along with
    // all the other props that we might be given
    return <Component user={secretUserInfo} {...props} />
  }
};

var AppHeader = function(props) {
  if (props.user) {
    return <p>Logged in as {props.user.name}</p>;
  } else {
    return <p>You need to login</p>;
  }
}



export const ConnectedAppHeader = wrapWithUser(AppHeader);
