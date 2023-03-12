import React, {FunctionComponent, PropsWithChildren} from 'react';
import './small-text.css';

const SmallText: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <p className='small-text'>
        {children}
    </p>
  );
}

export default SmallText;