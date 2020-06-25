import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.scss'

const backdrop ={
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

const modal ={
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible:{
        y:'200px',
        opacity: 1,
        transition:{ delay: 0.5 }
    }
}

function Modal(props){


    const {showModal, setShowModal, title} = props;

    return(
        <AnimatePresence exitBeforeEnter onExitComplete={()=> setShowModal(false)}>
        {showModal && (
            <motion.div 
            className='backdrop'
            variants={backdrop}
            initial='hidden'
            animate='visible'
            exit='hidden'
            >
                <motion.div 
                className='modal'
                variants={modal}
                >
                    <p>{title}</p>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    )
}


export default Modal