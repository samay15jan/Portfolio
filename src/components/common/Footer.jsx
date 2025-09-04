import BubbleMenu from '@/components/reactBits/BubbleMenu/BubbleMenu';
import Image from 'next/image';
import LightRays from '../reactBits/LightRays/LightRays';
import EyeBall from '@/app/about/EyeBall';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Footer() {
  const [eyeStatus, setEyeStatus] = useState(false)
  const items = [
    {
      label: 'home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: 'about',
      ariaLabel: 'About',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'project',
      href: 'project',
      ariaLabel: 'Project',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'blog',
      href: 'blog',
      ariaLabel: 'Blog',
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
      label: 'more',
      href: 'more',
      ariaLabel: 'More',
      rotation: -8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    }
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [0, window.innerWidth], [-10, 10]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#141414]">
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {eyeStatus &&
        <div className='absolute top-0 w-screen h-screen'>
          <EyeBall opacity={100} />
        </div>
      }
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>Connect</span>}
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        className="relative z-4"
        onMenuClick={() => setEyeStatus(!eyeStatus)}
      />

      {/* Main content */}
      <div className={eyeStatus ? "grid grid-cols-1 items-center justify-center flex-1 text-center space-y-6 blur" : "grid grid-cols-1 items-center justify-center flex-1 text-center space-y-6"}>
        <div className="flex items-center space-x-4 ml-40">
          <Image
            src="https://avatars.githubusercontent.com/u/97271429?v=4"
            alt="Profile"
            width={140}
            height={140}
            className="rounded-full mt-16"
          />
          <h1 className="text-5xl font-medium text-white">Let's work together!</h1>
        </div>

        <div className='absolute mt-66 w-screen px-40'>
          <div className='w-full h-1 bg-gray-100 opacity-20' />
        </div>

        <motion.button
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(255,0,0,0.6)' }}
          className="absolute left-80 mt-40 px-6 py-3 border border-red-600 text-white rounded-full">
          samay15jan@gmail.com
        </motion.button>
        <motion.button
          className="absolute right-60 bottom-80 bg-red-600 text-white px-16 py-24 rounded-full text-md"
          style={{ x, y }}
          whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px rgba(255,0,0,0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Get in touch
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center p-6 text-sm">
        <div>
          desc goes here
        </div>
        <div className="flex space-x-4 items-center">
          <div>Version 2024 © Edition</div>
          <div>8:23:18 PM UK (GMT+1)</div>
          <div className="flex space-x-3">
            <a href="#">Twitter</a>
            <a href="#">Github</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
