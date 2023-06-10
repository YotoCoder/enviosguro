/**
 * @type {import('framer-motion').MotionProps}
 */

const upDown = {
  initial: {
    opacity: 0,

    y: -40,
  },

  whileInView: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export default upDown;
