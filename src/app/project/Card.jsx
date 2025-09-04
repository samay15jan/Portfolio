import ImageTrail from "@/components/reactBits/ImageTrail/ImageTrail";
import { useState } from "react";

export default function Cards({ text }) {
  const [showImage, setShowImage] = useState(false)

  return (
    <div
      className="relative h-52 overflow-hidden p-5 w-screen"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      <div 
      className="h-20 font-medium text-4xl"
      >
        {text}</div>
      {showImage && (
        <ImageTrail
          items={['https://picsum.photos/id/287/300/300']}
          variant={2}
        />
      )}
    </div>
  )
}