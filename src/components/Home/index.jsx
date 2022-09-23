import React from 'react'
import download from '../../img/download.jpg'
import './index.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='home-w'>
                <div className='home-centre'>
                    <img className='home-img' src="http://p1.music.126.net/cju08xHyYUvr2dlJz24DUg==/109951167896889053.jpg?imageView&quality=89" alt="" />
                </div>
                <div className='home-app'>
                    <img src={download} alt="" />
                    <a className='home-app-download' href="#">下载客户端</a>
                    <p className='home-app-p'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </div>
            </div>
        </div>
    )
}
