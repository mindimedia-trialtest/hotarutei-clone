'use client'
import axios from "axios";
import { useEffect, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([])
  useEffect(() => {
    const getTimeline = async() => {
      const res = await axios.get('/api/timeline')
      const getData = await res.data
      setTimeline(getData)
    }
    getTimeline()
  }, [])
  return (
    <div className="relative w-full py-20 overflow-x-auto bg-[#f8f8f6]">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400"></div>

      <div className="relative flex justify-between items-center px-20 font-serif">
        {timeline.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="mb-6 text-center max-w-45 text-sm">
              {item.title}
            </div>
            <div className="h-10 border-l border-dashed border-gray-400"></div>
            <div className="w-6 h-6 rounded-full border-2 border-gray-500 bg-white z-10"></div>
            <div className="mt-4 text-sm">{item.year}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline
