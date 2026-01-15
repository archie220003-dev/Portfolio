export const transitions = {
    smooth: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
    },
    elastic: {
        type: "spring",
        stiffness: 400,
        damping: 25,
    },
    slow: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for "Apple-like" smoothness
    },
};

export const variants = {
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: transitions.smooth,
        },
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: -20 },
        show: {
            opacity: 1,
            x: 0,
            transition: transitions.smooth,
        },
    },
    fadeInRight: {
        hidden: { opacity: 0, x: 20 },
        show: {
            opacity: 1,
            x: 0,
            transition: transitions.smooth,
        },
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    },
    scaleOnHover: {
        scale: 1.05,
        transition: transitions.smooth,
    },
};

export const floatAnimation = {
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};
