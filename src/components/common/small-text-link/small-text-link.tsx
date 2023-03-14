import React, {FunctionComponent, PropsWithChildren, useContext} from 'react';
import { DarkContext } from '../../../Main';
import './small-text-link.css';

const SmallTextLink: FunctionComponent<PropsWithChildren> = ({children}) => {
  const { dark } = useContext(DarkContext)

  return (
    <a href='#' className={'small-text-link' + (dark ? ' dark-color' : '')}>
        {children}
    </a>
  );
}

export default SmallTextLink;