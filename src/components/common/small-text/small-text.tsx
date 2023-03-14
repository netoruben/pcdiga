import React, {FunctionComponent, PropsWithChildren, useContext} from 'react';
import { DarkContext } from '../../../Main';
import './small-text.css';

const SmallText: FunctionComponent<PropsWithChildren> = ({children}) => {
  const { dark } = useContext(DarkContext)

  return (
    <p className={'small-text' + (dark ? ' dark-color' : '')}>
        {children}
    </p>
  );
}

export default SmallText;