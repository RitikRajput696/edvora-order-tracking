import React from 'react';

function Link(props) {
  return <a href={props.to}>{props.title}</a>;
}

export default Link;
