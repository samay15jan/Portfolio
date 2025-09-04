import React, { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useCursor } from '@/context/CursorContext';

const Graph = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("")
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { setCursorColor } = useCursor();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus('')
      }, 4000);
    }
  }, [status])

  return (
    <div
      ref={itemRef}
      className="relative"
    >
      <div className="relative w-screen h-1/2 items-center px-32 pb-10 "
        onMouseEnter={() => setCursorColor("red")}
        onMouseLeave={() => setCursorColor("")}
      >
        <div className={isVisible ? "opacity-100 relative z-20 text-white text-2xl p-10 rounded-3xl shadow-2xl bg-[#0d1117] transition-opacity duration-700 text-center" : "text-center opacity-80 relative z-20 text-white text-2xl p-10 rounded-3xl shadow-2xl bg-[#0d1117] transition-opacity duration-700"}>
          <div className="flex justify-between mt-2">
            <div className="text-white text-left text-xl mb-5">Github Contributions</div>
            <div className="text-white text-left text-sm">{status}</div>
          </div>
          <div className="flex bg justify-center">
            {show ? (
              <GitHubCalendar username="samay15jan"
                colorScheme="dark"
                totalCount
                blockSize={14}
                blockMargin={8}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    title: `${activity.count} contributions on ${activity.date}`,
                    onMouseEnter: () => setStatus(`${activity.count} contributions on ${activity.date}`)
                  })
                }
                theme={{
                  light: ['hsl(0, 0%, 92%)', 'firebrick'],
                  dark: ['#333', '#E53935'],
                }}
              />
            ) : (
              <GitHubCalendar
                loading
                colorScheme="dark"
                totalCount
                blockSize={14}
                blockMargin={8}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    title: `${activity.count} contributions on ${activity.date}`,
                    onMouseEnter: () => setStatus(`Clicked ${activity.count} contributions on ${activity.date}`)
                  })
                }
                theme={{
                  light: ['hsl(0, 0%, 92%)', 'firebrick'],
                  dark: ['#333', '#E53935'],
                }}
                username="samay15jan"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;