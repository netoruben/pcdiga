import React, {FunctionComponent, PropsWithChildren} from 'react';
import './small-text-link.css';

const SmallTextLink: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <a href='#' className='small-text-link'>
        {children}
    </a>
  );
}

export default SmallTextLink;