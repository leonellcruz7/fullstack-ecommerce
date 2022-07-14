import React, { useEffect } from 'react'
import './Featured.css'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



export default function Featured() {
    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {
        console.log(inView)
    }, [inView])


    const navigate = useNavigate()
    return (
        <div className="featured">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <img src={require(`../img/feature.png`)} alt="" />
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content">
                            <motion.p ref={ref}>Great Deals only at Online Store</motion.p>
                            <h1>Shop Fashion Online.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse dolore distinctio quos in rerum ducimus quis? Quidem commodi ad aspernatur rem qui voluptas facilis consequuntur perferendis excepturi, deserunt eveniet.</p>
                            <button onClick={e => navigate('/products')}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
