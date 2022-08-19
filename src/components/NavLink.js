import React from 'react';

function Link(props) {
  return (
    <a className={props.active} href={props.to}>
      {props.title}
    </a>
  );
}

export default Link;
