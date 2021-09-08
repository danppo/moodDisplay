import React from 'react';

const Link = ({label, path}) => {
  return (
    <a data-testid="link" className="font-bold text-base text-link" href={path}>
      {label}
    </a>
  )
}

export default Link;