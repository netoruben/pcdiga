import React, {FunctionComponent} from 'react';
import ProductsData from '../../data/products';
import ProductCard from '../common/product-card/product-card';
import { useCountdown } from 'react-countdown-circle-timer'
import './carousel.css';

type Props = {
    title: string
    type: 'promocao' | 'destaque'
}

const Carousel: FunctionComponent<Props> = ({title, type}) => {
    const seconds = useCountdown({ isPlaying: true, duration: 10, colors: '#FD6205' })

    let destaque: boolean = false
    const products: JSX.Element[] = []

    if (type === 'destaque')
        destaque = true

    ProductsData.forEach((product) => {
        if (product.type === type)
            products.push(<ProductCard image={product.image} name={product.name} type={product.type} desc={product.desc} reference={product.ref} stock={product.stock} price={product.price} discount={product.discount}/>)
    })


  return (
    <section className='carousel'>
        <div className='carousel-bar'>
            <p className='carousel-title'>{title}</p>
            <button className='carousel-more'>Ver Mais&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
                    <path d="M16.17 6.67193L13.59 9.19656L15 10.571L20 5.69717L15 0.823364L13.59 2.19778L16.17 4.72241H0V6.67193H16.17Z" fill="#FF4D23"/>
                </svg>
            </button>
        </div>
        <div className='carousel-products'>
            {destaque && <div className='carousel-countdown'>
                <div className='carousel-countdown-inner'/>
                <p className='carousel-countdown-title'>APPLE<br/>DAYS</p>
                <div className='carousel-countdown-circles'>
                    <div className='carousel-countdown-circle'>
                        <div className='carousel-countdown-circle-inner'>
                            <p>{seconds.remainingTime}</p>
                        </div>
                        <svg viewBox="-10 0 200 180" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m 90,6 a 84,84 0 1,0 0,168 a 84,84 0 1,0 0,-168" fill="none" stroke="#001839" stroke-width="16"/>
                            <path d={seconds.path} fill="none" stroke={seconds.stroke} stroke-linecap="round" stroke-width="12" stroke-dasharray="527.7875658030853" stroke-dashoffset={seconds.strokeDashoffset}/>
                        </svg>
                        <p>horas</p>
                    </div>
                    <div className='carousel-countdown-circle'>
                        <div className='carousel-countdown-circle-inner'>
                            <p>{seconds.remainingTime}</p>
                        </div>
                        <svg viewBox="-10 0 200 180" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m 90,6 a 84,84 0 1,0 0,168 a 84,84 0 1,0 0,-168" fill="none" stroke="#001839" stroke-width="16"/>
                            <path d={seconds.path} fill="none" stroke={seconds.stroke} stroke-linecap="round" stroke-width="12" stroke-dasharray="527.7875658030853" stroke-dashoffset={seconds.strokeDashoffset}/>
                        </svg>
                        <p>minutos</p>
                    </div>
                    <div className='carousel-countdown-circle'>
                        <div className='carousel-countdown-circle-inner'>
                            <p>{seconds.remainingTime}</p>
                        </div>
                        <svg viewBox="-10 0 200 180" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
                            <path d="m 90,6 a 84,84 0 1,0 0,168 a 84,84 0 1,0 0,-168" fill="none" stroke="#001839" stroke-width="16"/>
                            <path d={seconds.path} fill="none" stroke={seconds.stroke} stroke-linecap="round" stroke-width="12" stroke-dasharray="527.7875658030853" stroke-dashoffset={seconds.strokeDashoffset}/>
                        </svg>
                        <p>segundos</p>
                    </div>
                </div>
                <div className='carousel-countdown-dates'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="157" height="28" viewBox="0 0 157 28" fill="none">
                        <path d="M156.427 6.059L151.554 24.2064C151.044 26.0885 149.343 27.3953 147.395 27.3953H4.62395C1.78842 27.3953 -0.274524 24.7077 0.465179 21.9708L5.339 3.82346C5.84857 1.94132 7.54989 0.634521 9.49777 0.634521H152.26C155.096 0.634521 157.159 3.3221 156.419 6.059H156.427Z" fill="#001839"/>
                    </svg>
                    <div className='carousel-countdown-dates-inner'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <path d="M0.763559 9.34364L6.2127 5.58759C7.25651 4.86432 7.78252 4.28078 7.78252 3.5904C7.78252 2.90001 7.25651 2.48084 6.4264 2.48084C5.48944 2.48084 4.70042 3.00685 3.85387 3.82052L2.40734 2.31646C3.45115 1.13293 4.82371 0.360352 6.53324 0.360352C8.76057 0.360352 10.2071 1.59319 10.2071 3.32738C10.2071 4.65063 9.59068 5.62046 7.66746 6.96015L4.34701 9.23679H8.86742L8.31675 11.2833H0.237549L0.763559 9.34364Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <path d="M0.77417 9.53268L2.43439 8.13546C3.15766 8.91626 3.95489 9.31899 4.9576 9.31899C6.23153 9.31899 7.14384 8.5464 7.14384 7.64232C7.14384 6.86974 6.51097 6.25332 5.14663 6.25332C4.68637 6.25332 4.10283 6.42592 3.7001 6.5903L2.50014 5.62047L4.1768 0.508301H10.7026L10.1355 2.58769H5.74662L5.1302 4.4205C5.48362 4.34653 5.85347 4.29723 6.22332 4.29723C8.19586 4.29723 9.57663 5.49718 9.57663 7.37109C9.57663 9.50801 7.70272 11.4477 4.76034 11.4477C3.20696 11.4477 1.51387 10.6176 0.77417 9.52446V9.53268Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="3" viewBox="0 0 7 3" fill="none">
                            <path d="M1.34633 0.390259H6.08864L5.48866 2.63403H0.746338L1.34633 0.390259Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <path d="M1.23939 9.34364L6.68854 5.58759C7.73234 4.86432 8.25835 4.28078 8.25835 3.5904C8.25835 2.90001 7.73234 2.48084 6.90223 2.48084C5.96527 2.48084 5.17625 3.00685 4.3297 3.82052L2.88317 2.31646C3.92698 1.13293 5.29954 0.360352 7.00908 0.360352C9.23641 0.360352 10.6829 1.59319 10.6829 3.32738C10.6829 4.65063 10.0665 5.62046 8.14328 6.96015L4.82284 9.23679H9.34325L8.79258 11.2833H0.713379L1.23939 9.34364Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M1.41156 10.486C0.688296 9.76272 0.302002 8.80932 0.302002 7.4532C0.302002 5.40669 1.02527 3.3273 2.41427 1.94652C3.3841 0.976689 4.72379 0.327393 6.31826 0.327393C7.69082 0.327393 8.82503 0.820519 9.6387 1.57666L8.26614 3.2862C7.71547 2.79306 6.99221 2.45609 6.11279 2.45609C5.23336 2.45609 4.59228 2.73553 4.01696 3.30264C3.5567 3.7629 3.13754 4.45329 2.90741 5.19299C3.36767 4.73273 4.37038 4.28891 5.3813 4.28891C7.18125 4.28891 8.66066 5.36559 8.66066 7.28882C8.66066 9.45862 6.68811 11.4723 4.19778 11.4723C3.05535 11.4723 2.04442 11.1353 1.39512 10.486H1.41156ZM6.28538 7.60936C6.28538 6.72994 5.62788 6.1957 4.66626 6.1957C3.39233 6.1957 2.54578 7.04225 2.54578 8.04496C2.54578 8.43125 2.70193 8.76822 2.9485 9.01479C3.24438 9.31067 3.65533 9.47505 4.21422 9.47505C5.46349 9.47505 6.2936 8.5381 6.2936 7.60936H6.28538Z" fill="#FD6205"/>
                        </svg>
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
                            <path d="M2.48793 6.03686H1.50166L2.04412 4.03965H3.01394L3.12079 3.59584C3.59749 1.76302 4.73992 0.949341 6.45767 0.949341C7.12341 0.949341 7.67407 1.03975 8.06036 1.17947L7.55079 3.11914C7.24669 2.99585 6.8604 2.92189 6.53164 2.92189C5.91522 2.92189 5.54537 3.21777 5.381 3.81775L5.31524 4.04788H7.30422L6.76177 6.04507H4.8221L3.12901 12.2915H0.786621L2.47972 6.04507L2.48793 6.03686Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M2.19698 5.97915C2.27095 6.94899 2.86271 7.59828 4.08733 7.59828C4.70375 7.59828 5.23798 7.41747 5.92015 6.93255L6.99683 8.37908C6.25712 8.9955 5.22976 9.4722 3.82432 9.4722C1.45727 9.4722 0.0107422 8.08319 0.0107422 5.80655C0.0107422 3.52991 1.95041 0.883423 4.901 0.883423C7.03792 0.883423 8.27076 2.27241 8.27076 4.09701C8.27076 4.68056 8.1146 5.34629 7.85982 5.97093H2.19698V5.97915ZM2.41067 4.51619H5.99412C6.04343 4.36003 6.06809 4.17921 6.06809 3.97373C6.06809 3.29978 5.66536 2.75734 4.71197 2.75734C3.65173 2.75734 2.78874 3.46416 2.40245 4.50796L2.41067 4.51619Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M0.407959 0.0396729H2.8079L3.17774 5.52992L6.45709 0.0396729H8.96386L3.53115 8.34901H1.41067L0.407959 0.0396729Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M2.48677 5.97915C2.56074 6.94899 3.15251 7.59828 4.37713 7.59828C4.99355 7.59828 5.52777 7.41747 6.20995 6.93255L7.28662 8.37908C6.54692 8.9955 5.51955 9.4722 4.11412 9.4722C1.74707 9.4722 0.300537 8.08319 0.300537 5.80655C0.300537 3.52991 2.2402 0.883423 5.19079 0.883423C7.32771 0.883423 8.56056 2.27241 8.56056 4.09701C8.56056 4.68056 8.4044 5.34629 8.14961 5.97093H2.48677V5.97915ZM2.70046 4.51619H6.28391C6.33323 4.36003 6.35788 4.17921 6.35788 3.97373C6.35788 3.29978 5.95516 2.75734 5.00176 2.75734C3.94152 2.75734 3.07854 3.46416 2.69225 4.50796L2.70046 4.51619Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                            <path d="M2.93868 1.03968H5.28106L4.83725 2.69991C5.66736 1.48351 6.62075 0.776689 7.97687 0.883535L7.31937 3.33277H7.19607C5.6427 3.33277 4.44274 4.22864 3.87563 6.36556L3.09484 9.29149H0.752441L2.95511 1.03968H2.93868Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M2.73847 5.97915C2.81244 6.94899 3.40421 7.59828 4.62883 7.59828C5.24524 7.59828 5.77947 7.41747 6.46164 6.93255L7.53833 8.37908C6.79863 8.9955 5.77126 9.4722 4.36583 9.4722C1.99878 9.4722 0.552246 8.08319 0.552246 5.80655C0.552246 3.52991 2.49191 0.883423 5.4425 0.883423C7.57942 0.883423 8.81225 2.27241 8.81225 4.09701C8.81225 4.68056 8.6561 5.34629 8.40131 5.97093H2.73847V5.97915ZM2.95217 4.51619H6.53562C6.58494 4.36003 6.60959 4.17921 6.60959 3.97373C6.60959 3.29978 6.20687 2.75734 5.25347 2.75734C4.19323 2.75734 3.33023 3.46416 2.94394 4.50796L2.95217 4.51619Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                            <path d="M2.28893 3.03974H4.63132L2.41221 11.2915H0.0698242L2.28893 3.03974ZM3.04507 0.0562744H5.51075L4.94364 2.13566H2.47796L3.04507 0.0562744Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                            <path d="M2.59833 1.03968H4.94073L4.4969 2.69991C5.32701 1.48351 6.2804 0.776689 7.63653 0.883535L6.97902 3.33277H6.85574C5.30237 3.33277 4.1024 4.22864 3.53529 6.36556L2.7545 9.29149H0.412109L2.61478 1.03968H2.59833Z" fill="#FD6205"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                            <path d="M0.228271 5.65039C0.228271 3.18471 2.34877 0.883423 4.99526 0.883423C7.4445 0.883423 8.96499 2.50255 8.96499 4.697C8.96499 7.16268 6.84452 9.46397 4.19803 9.46397C1.74879 9.46397 0.228271 7.84484 0.228271 5.65039ZM6.67193 4.75453C6.67193 3.55457 5.94865 2.88062 4.88841 2.88062C3.45832 2.88062 2.52136 4.41756 2.52136 5.59286C2.52136 6.76817 3.24463 7.46678 4.30488 7.46678C5.73497 7.46678 6.67193 5.92984 6.67193 4.76276V4.75453Z" fill="#FD6205"/>
                        </svg>
                    </div>
                </div>
                <div className='carousel-countdown-btn'>
                    <button>Ver Produtos</button>
                </div>
            </div>}
            {products}
        </div>
    </section>
  );
}

export default Carousel;
