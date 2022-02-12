import { useAnimation, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const AuthorCardVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut', delay: 0.7 },
  },
  hidden: { y: 60, opacity: 0 },
}

const AuthorCard = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      className="text-6xl font-bold"
      variants={AuthorCardVariants}
    >
      Always in <span className="text-blue-600">BETA</span>
    </motion.div>
  )
}

export default AuthorCard
