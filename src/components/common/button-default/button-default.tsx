import React, {FunctionComponent, PropsWithChildren} from 'react';
import './button-default.css';

const ButtonDefault: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <button>{children}</button>
  );
}

export default ButtonDefault;