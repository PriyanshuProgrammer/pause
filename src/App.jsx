import { forwardRef, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import birdimage from './assets/bird.png'
import womenimage from './assets/women1.png'
import manimage from './assets/man1.jpg'
import color1 from './assets/color2.jpg'
import cat from './assets/cat.jpg'
import peakpx1 from './assets/peakpx.jpg'
import peakpx2 from './assets/peakpx2.jpg'
import peakpx3 from './assets/peakpx3.jpg'
import peakpx4 from './assets/peakpx4.jpg'
import peakpx5 from './assets/peakpx5.jpg'

import lastimg from './assets/lastimg5.png'
import lastimg1 from './assets/lastimg2.jpg'
import lastimg3 from './assets/lastimg4.jpg'

gsap.registerPlugin(ScrollTrigger);


function App() {
  const [count, setCount] = useState(0)
  const parascroll = useRef();
  const imagescroll = useRef([]);
  const lastscroll = useRef([]);
  let wordarr = ["Create", "Connect", "Inspire", "Publish", "Share", "Get Started"]
  const [sideword, setSideword] = useState(wordarr[0]);

  const addtolastscroll = (el)=>{
    if(el && !lastscroll.current.includes(el)){
      lastscroll.current.push(el);
    }
  }

  const addToRefs = (el)=>{
    if(el && !imagescroll.current.includes(el)){
      imagescroll.current.push(el)
    }
  }

  useGSAP(function(){
    gsap.to(parascroll.current,{
      transform:"translate(-80%,-50%)",
      ease: "none",
      scrollTrigger:{
        trigger: ".section1",
        scrub: 1,
        pin: true,
        start: "top top",
        end: "+=300%",
      }
    })
  })


  useGSAP(function(){
    imagescroll.current.forEach((image) => {
      gsap.to(image, {
        keyframes:[
          {
            rotation:`${Number(image.id)}`,
            width:"22vw",
            height:"22vw",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            duration: 2,
            delay:1,
          },
          {
            rotation:`0`,
            width:"22vw",
            height:"22vw",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            duration: 2,
            delay:1,
          }
        ],
        scrollTrigger:{
          trigger: image,
          scrub:1,
          start: "top 50%",
          end: "+=300%",
      }
      });
    });
  })
  useGSAP(function(){
    gsap.to(".phone",{
      top:"50%",
      transform:"translate(-50%,-50%)",
      zIndex:1,
      scrollTrigger:{
        trigger:".phone",
        scrub:1,
        start:"bottom 50%"
      },
      onComplete:function(){
        document.querySelector(".phone").style.zIndex = 1000;
      }
    })
  })

  useGSAP(function(){
    gsap.to(".section2>h1",{
      // y:100,
      ease:"none",
      scrollTrigger:{
        trigger:".section2",
        scrub:1,
        pin:true,
        // markers:true,
        start:"top top", 
        end:"+=800%",
        onUpdate:function(self){
          if(self.progress>=(0.167*5)){
            setSideword(wordarr[5])
          }
          else if(self.progress>=(0.167*4)){
            setSideword(wordarr[4])
          }
          else if(self.progress>=(0.167*3)){
            setSideword(wordarr[3])
          }
          else if(self.progress>=(0.167*2)){
            setSideword(wordarr[2])
          }
          else if(self.progress>=0.167){
            setSideword(wordarr[1])
          }else{
            setSideword(wordarr[0])
          }
          
        }
      },
    })
  })

  useGSAP(function(){
    gsap.from(".phone .image",{
        top:"100%",
        stagger:1,
        ease:"none",
        scrollTrigger:{
          trigger:".section2",
          scrub:1,
          // markers:true,
          start:"top top", 
          end:"+=600%",
        },
    })
  })


  useGSAP(function(){
    gsap.to(".section2 .paras",{
      transform:"translateY(-100%)",
      ease:"none",
      scrollTrigger:{
        trigger:".section2 ",
        scrub:1,
        // markers:true,
        start:"top top", 
        end:"+=800%",
      },
    })
  })

  useGSAP(function(){
    gsap.to(".phone",{
      scale:0.8,
      opacity:0,
      scrollTrigger:{
        trigger:".section2 .paras h1:nth-child(6)",
        scrub:1,
        start:"top 40%",
        end:"top top",
        // markers:true,
        // pin:true,
      }
    })
  })

  useGSAP(function(){
    imagescroll.current.forEach((image) => {
      gsap.to(image, {
        visibility:"hidden",
        scrollTrigger:{
          trigger:".section2",
          scrub:true,
        },
      });
    });
  })

  useGSAP(function(){
    gsap.to(".defaultimage",{
      visibility:"visible",
      scrollTrigger:{
        trigger:".section2",
        scrub:true,
      }
    })
  })

  useGSAP(function(){
    lastscroll.current.forEach((image,index) => {
      gsap.from(image,{
        zIndex:1,
        display:"none",
        rotation:`${Number(image.id)}`,
        width:"22vw",
        height:"22vw",
        top:"50%",
        left:"50%",
        ease:"none",
        // bottom:"50%",
        // right:"50%",
        transform:"translate(-50%,-50%)",
        scrollTrigger:{
          trigger:".section2 .paras h1:nth-child(6)",
          scrub:1,
          // pin:true,
          start:"top 50%",
          end:"+=200%"
        }
      })
    });
  })

  return (
    <main>
      <div className="phone">
        <div className="imagecontainer"></div>
        <div style={{backgroundImage:`url(${womenimage})`}} className="defaultimage"></div>
        <div style={{backgroundImage:`url(${peakpx1})`}} className="image image1"></div>
        <div style={{backgroundImage:`url(${peakpx2})`}} className="image .image2"></div>
        <div style={{backgroundImage:`url(${peakpx3})`}} className="image"></div>
        <div style={{backgroundImage:`url(${peakpx4})`}} className="image"></div>
        <div style={{backgroundImage:`url(${peakpx5})`}} className="image"></div>
      </div>
        <h1>Pause</h1>
        <div className="fixedbuttons">
          <button>X</button>
          <button>in</button>
          <button>Fb</button>
        </div>
        <div className="fixednav">
          <p>Contact</p>
          <p>About</p>
        </div>
        <Img ref={addToRefs} angle="20" src={birdimage} width="25vw" height="25vw" right="0" bottom="0" z={10}></Img>
        <Img ref={addToRefs} angle="15" src={cat} width="20vw" height="20vw" right="-10vw" bottom="70vh" z={10}></Img>
        <Img ref={addToRefs} angle="-15" src={manimage} width="30vw" height="30vw" right="-10vw" bottom="10vw" z={10}></Img>
        <Img ref={addToRefs} angle="-10" src={womenimage} width="28vw" height="28vw" right="15vw" bottom="-5vw" z={10}></Img>
        <Img ref={addToRefs} angle="18" src={color1} width="35vw" height="35vw" right="10vw" bottom="6vw" z={9}></Img>


        <Img ref={addtolastscroll} angle="20" src={lastimg3} width="25vw" height="25vw" right="60vw" bottom="50vh" z={10000}></Img>
        <Img ref={addtolastscroll} angle="15" src={lastimg} width="30vw" height="30vw" right="35vw" bottom="60vh" z={10000}></Img>
        <Img ref={addtolastscroll} angle="-15" src={lastimg1} width="30vw" height="30vw" right="40vw" bottom="0vh" z={10000}></Img>
        <Img ref={addtolastscroll} angle="10" src={peakpx5} width="24vw" height="47vw" right="25vw" bottom="-60vh" z={10000}></Img>


      <div className="section1">
        <p ref={parascroll}>Share What Matters, <span style={{color:'GrayText'}}>Connect with Purpose</span> </p>
      </div>

      <div className="section2">
          <h1>{sideword}</h1>
          <div className="paras">
            <h1>
            At Pause, we believe in offering a personalized and immersive experience. <span style={{color:'GrayText'}}> Our "Create" page lets you bring your vision to life.</span>
            </h1>
            <h1>
            At Pause, we value your feedback and believe in <span style={{color:'GrayText'}}>building a strong connection with our community.</span>
            </h1>
            <h1>
            Connection bridges gaps, uniting individuals and <span style={{color:'GrayText'}}>communities through shared ideas, values, and emotions.</span>
            </h1>
            <h1>
            Inspiration is the spark that fuels dreams and drives change.<span style={{color:'GrayText'}}> It encourages creativity, motivates action</span>
            </h1>
            <h1>
            Publishing at Pause is about turning your creativity into an experience <span style={{color:'GrayText'}}>  for the world to see. Whether it’s sharing stories </span>
            </h1>
            <h1>
            Sharing connects people, ideas, and experiences in meaningful ways. <span style={{color:'GrayText'}}> It allows you to spread knowledge</span></h1>
            <h1>
            At last, we value your feedback and believe in <span style={{color:'GrayText'}}>building a strong connection with our community.</span>
            <br />
            <button>Get Started</button>
            </h1>

          </div>
      </div>
    </main>
  )
}

// src width height right bottom
const Img = forwardRef(function(props,ref){
  return <div id={props.angle} ref={ref} style={{
    backgroundImage:`url(${props.src})`, 
    backgroundSize:"cover",
    backgroundPosition:"center",
    width:props.width,
    height:props.height,
    position:"fixed",
    right:props.right,
    bottom:props.bottom,
    zIndex:props.z
  }}>
  </div>
})

export default App
