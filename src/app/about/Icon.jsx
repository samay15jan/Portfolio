import React from 'react'
import { motion } from 'framer-motion'

const Icon = ({ Type }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 90 }}
    >
      <div className='text-white relative flex justify-center z-1 lg:p-1 p-2 lg:m-1 m-2 bg-gradient-to-r from-[#E53935] to-[#383635ff] rounded-lg hover:shadow-2xl hover:shadow-[#E53935]'>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -90 }}
        >
          <Type size={40} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Icon