import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoTerminal} from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { SiReactrouter, SiTailwindcss, SiFirebase, SiStyledcomponents, SiRedux, SiArchlinux, SiExpress, SiFirefoxbrowser, SiNextui } from "react-icons/si";
import { TbBrandVscode, TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import IconContainer from './IconContainer';
import {Divider} from "@nextui-org/react"

const Skills = () => {
  const skillsData = {
    'React': {name:'React', icon: FaReact, src:'https://reactjs.org/'},
    'Javascript': {name:'Javascript', icon: IoLogoJavascript, src:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    'Redux': {name:'Redux', icon: SiRedux, src:'https://redux.js.org/'},
    'Tailwind CSS': {name:'Tailwind CSS', icon: SiTailwindcss, src:'https://tailwindcss.com/'},
    'Firebase': {name:'Firebase', icon: SiFirebase, src:'https://firebase.google.com/'},
    'Git': {name:'Git', icon: FaGitAlt, src:'https://git-scm.com/'},
    'HTML': {name:'HTML', icon: IoLogoHtml5, src:'https://www.w3.org/html/'},
    'CSS': {name:'CSS', icon: IoLogoCss3, src:'https://www.w3.org/css/'},
    'Styled Components': {name:'Styled Components', icon: SiStyledcomponents, src:'https://styled-components.com/'},
    'Twin.Macro': {name:'Twin.Macro', icon: 'TwinMacroIcon', src:'https://github.com/ben-rogerson/twin.macro'},
    'React Router': {name:'React Router', icon: SiReactrouter, src:'https://reactrouter.com/'},
    'NextUI': {name:'NextUI', icon: SiNextui, src:'https://nextui.org/'},
};

const toolsData = {
    'Arch Linux': {name:'Arch Linux', icon: SiArchlinux, src:'https://archlinux.org/'},
    'VSCode': {name:'VSCode', icon: TbBrandVscode, src:'https://code.visualstudio.com/'},
    'Alacritty Terminal': {name:'Alacritty Terminal', icon: IoTerminal, src:'https://github.com/alacritty/alacritty'},
    'Firefox Developer Edition': {name:'Firefox Developer Edition', icon: SiFirefoxbrowser, src:'https://www.mozilla.org/en-US/firefox/developer/'},
};

const learningData = {
    'NextJS': {name:'NextJS', icon: TbBrandNextjs, src:'https://nextjs.org/'},
    'Express': {name:'Express', icon: SiExpress, src:'https://expressjs.com/'},
    'Framer Motion': {name:'Framer Motion', icon: TbBrandFramerMotion, src:'https://www.framer.com/motion/'},
};

  return (
    <div>
      <Divider className='my-8 bg-white opacity-50'/>
      <IconContainer startingText='Professional' endingText='Skills' type={skillsData} />
      <Divider className='my-8 bg-white opacity-50'/>
      <div className='grid grid-cols-2'>
        <div className='flex'>
          <IconContainer startingText='Currently' endingText='Learning' type={learningData} />
          <Divider orientation='vertical' className='mx-10 bg-white opacity-50'/>
        </div>
        <IconContainer startingText='What I' endingText='Use' type={toolsData} />
      </div>
    </div>
  )
}

export default Skills