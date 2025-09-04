import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { FaReact, FaAws, FaGitAlt } from "react-icons/fa6";
import { SiTailwindcss, SiFirebase, SiRedux, SiArchlinux, SiFirefoxbrowser } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import IconContainer from './IconContainer';

const Skills = () => {
  const skillsData = {
    'React': { name: 'React', icon: FaReact, src: 'https://reactjs.org/' },
    'Javascript': { name: 'Javascript', icon: IoLogoJavascript, src: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    'Redux': { name: 'Redux', icon: SiRedux, src: 'https://redux.js.org/' },
    'Tailwind CSS': { name: 'Tailwind CSS', icon: SiTailwindcss, src: 'https://tailwindcss.com/' },
    'Firebase': { name: 'Firebase', icon: SiFirebase, src: 'https://firebase.google.com/' },
    'Git': { name: 'Git', icon: FaGitAlt, src: 'https://git-scm.com/' },
  };

  const toolsData = {
    'Arch Linux': { name: 'Arch Linux', icon: SiArchlinux, src: 'https://archlinux.org/' },
    'VSCode': { name: 'VSCode', icon: TbBrandVscode, src: 'https://code.visualstudio.com/' },
    'Alacritty Terminal': { name: 'Alacritty Terminal', icon: IoTerminal, src: 'https://github.com/alacritty/alacritty' },
    'Firefox Developer Edition': { name: 'Firefox Developer Edition', icon: SiFirefoxbrowser, src: 'https://www.mozilla.org/en-US/firefox/developer/' },
  };

  const learningData = {
    'AWS': { name: 'AWS', icon: FaAws, src: 'https://aws.amazon.com/' },
  };

  return (
    <div className='w-full mx-20'>
      <div className='my-4 bg-white opacity-50' />
      <IconContainer startingText='Professional' endingText='Skills' type={skillsData} />
      <div className='my-4 bg-white opacity-50' />
      <div className='grid lg:flex lg:grid-cols-2'>
        <div className='hidden lg:flex lg:mb-0 mb-10'>
          <IconContainer startingText='Currently' endingText='Learning' type={learningData} />
          <div orientation='vertical' className='hidden lg:block mx-10 bg-white opacity-50' />
        </div>
        <IconContainer startingText='What I' endingText='Use' type={toolsData} />
      </div>
    </div>
  )
}

export default Skills