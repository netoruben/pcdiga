import React, {FunctionComponent, PropsWithChildren, useContext} from 'react';
import { DarkContext } from '../../../Main';
import './button-default.css';

const ButtonDefault: FunctionComponent<PropsWithChildren> = ({children}) => {
  const { dark } = useContext(DarkContext)

  return (
    <button className={'button-default' + (dark ? ' dark-color' : '')}>{children}</button>
  );
}

export default ButtonDefault;