// import React, { useEffect, useRef, useState } from 'react'
// import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from 'styled-components';

// function ImgSlider() {

//     let settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true
//     };

//     return (
//         <Carousel {...settings}>
//             <Warp>
//                 <img src='https://drive.google.com/uc?id=14JFjPPTUK39SpIN77dCBtp4NFQENdred' alt='' />
//             </Warp>
//             <Warp>
//                 <img src='https://drive.google.com/uc?id=10DSo570bbNPM_2agrvUF9orWZNwU5lnF' alt='' />
//             </Warp>
//             <Warp>
//                 <img src='https://drive.google.com/uc?id=13rLpwEabENq8k1EDD8onOvoNuDD2Le2x' alt='' />
//             </Warp>
//             <Warp>
//                 <img src='https://drive.google.com/uc?id=1s500-iTeYkpb1LUBj1W23aAL0fcmHJDp' alt='' />
//             </Warp>
//             <Warp>
//                 <img src='https://drive.google.com/uc?id=1dXN1Zedwtg_Sy_MsIjdSRHXTWfF8u8dB' alt='' />
//             </Warp>
//             <Warp>
//                 <img src='https://drive.google.com/uc?id=1Vl-dpwmWcV_eNyPHRIivRJMw_OUy28kE' alt='' />
//             </Warp>

//         </Carousel>
//     )
// }

// export default ImgSlider


// const Carousel = styled(Slider)`
//     cursor: pointer;
//     margin-top: 20px;

//     ul li button {
//         &:before {
//             font-size: 10px;
//             color: rgb(158, 158, 171);
//         }
//     }

//     li.slick-active button:before{
//         color: white;
//     }
//     .slick-list {
//         overflow: visible;
//     }
//     button {
//         z-index: 1;
//     }
// `

// const Warp = styled.div`

//     img{
//         border: 4px solid transparent;
//         border-radius: 4px;
//         width: 100%;
//         height: 100%;
//         box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
//         rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//         transition-duration: 300ms;

//         &:hover {
//             border: 4px solid rgba(249, 249, 249, 0.8);
//         }
//     }
// `



import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;


function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }

    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

    return (
        <Carousel {...settings}>
            {movieList.map((item)=>(
                <Warp><img src={IMAGE_BASE_URL+item.backdrop_path} /></Warp>
        ))}
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    cursor: pointer;
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;

    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`

const Warp = styled.div`

    img{
        border: 4px solid transparent;
        border-radius: 4px;
        
        ${'' /* width: 100%;
        height: 100%; */}
        min-width:100%;
        

        ${'' /* height:600px; */}

        width:20rem;
        object-fit: cover;
        object-position: left top;
        margin-right: 1.25rem
        height:90%;
        box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
    @media (min-width: 768px) {
    img {
        height: 600px;
    }
}

`