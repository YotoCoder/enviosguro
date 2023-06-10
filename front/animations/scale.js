/**
 * @type {import('framer-motion').MotionProps}
 */
const scale = {
  initial: {
    opacity: 0,

    scale: 0.5,
  },

  whileInView: {
    opacity: 1,

    scale: 1,

    transition: {
      duration: 0.8,
    },
  },
};

export default scale;
