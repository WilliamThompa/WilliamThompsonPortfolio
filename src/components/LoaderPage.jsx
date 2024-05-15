import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function LoaderPage(props) {
    const [loading, setLoading] = useState(true) //Used to determine if it's loading or not 
    const controls = useAnimation() //Used for performing the animation
    const [zaxis, setZAxis] = useState("z-10") //Used to alter the z axis of the loading screen

    useEffect(() => {
        const timer = setTimeout(() => { //Is the timeout for the loading screen after 4 seconds it will useEffect to stop the loading
            setLoading(false);
            setZAxis("-z-10")
        }, 2500);

        return () => clearTimeout(timer); //Clears the Timer
    }, []);

    useEffect(() => { //Controls the loading state 
        if (loading) {
            controls.start({
                opacity: 1,
                transition: { duration: 2 },
            });
        } else {
            controls.start({
                opacity: 0,
                transition: { duration: 1 },
            });
        }
    }, [loading, controls]);

    return ( // Stores the animation
        <motion.div
            className={`fixed bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 h-screen top-0 left-0 w-full flex justify-center items-center ${zaxis}`}
            animate={controls}
        >
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    <>
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: 2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: 1.8, delay: 0.2 }
                            }}
                        />
                        <motion.span
                            className="w-4 h-4 my-12 mx-1 bg-yellow-400 rounded-full"
                            animate={{
                                y: [0, -20, 0],
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: 1.6, delay: 0.4 }
                            }}
                        />
                    </>
                </div>
            </div>
        </motion.div>
    );
}

export default LoaderPage;