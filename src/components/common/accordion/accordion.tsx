import React, {FunctionComponent, ReactNode, useState} from 'react';
import './accordion.css';

type Props = {
    title: string
    children?: ReactNode | undefined;
}

const Accordion: FunctionComponent<Props> = ({children, title}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className='accordion'>
        <button onClick={handleClick} className='accordion-button'>{title}
            <svg className={'accordion-chevron' + (open ? ' accordion-chevron-animate' : '')} xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
                <path d="M8.36774 6.49992L2.10628 0.239502L0.633362 1.71242L5.42503 6.50409L0.633362 11.2885L2.10628 12.7614L8.36774 6.49992Z" fill="#FF4D23"/>
            </svg>
        </button>
        <div className={'accordion-content' + (open ? ' accordion-content-visible' : '')}>
            {children}
        </div>
    </div>
  );
}

export default Accordion;