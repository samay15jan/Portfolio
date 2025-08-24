import BubbleMenu from '@/components/reactBits/BubbleMenu/BubbleMenu';
import Image from 'next/image';
import LightRays from '../reactBits/LightRays/LightRays';

export default function Footer() {
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
      label: 'contact',
      href: 'contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    }
  ];

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
      />

      {/* Main content */}
      <div className="grid grid-cols-1 items-center justify-center flex-1 text-center space-y-6">
        <div className="flex items-center space-x-4 ml-40">
          <Image
            src="https://avatars.githubusercontent.com/u/97271429?v=4"
            alt="Profile"
            width={140}
            height={140}
            className="rounded-full"
          />
          <h1 className="text-5xl font-medium text-white">Let's work together!</h1>
        </div>

        <div className='absolute mt-60 w-screen px-40'>
          <div className='w-full h-1 bg-gray-100 opacity-20' />
        </div>

        <button className="absolute left-40 bottom-72 mt-10 px-6 py-3 border border-red-600 text-white rounded-full">
          samay15jan@gmail.com
        </button>
        <button className="absolute right-60 bottom-80 bg-red-600 text-white px-16 py-24 rounded-full text-sm">
          Get in touch
        </button>
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
