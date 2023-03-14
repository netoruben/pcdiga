import React, {FunctionComponent, PropsWithChildren} from 'react';
import './button-default.css';

const ButtonDefault: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <button className='button-default'>{children}</button>
  );
}

export default ButtonDefault;