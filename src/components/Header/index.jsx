import React from 'react'
import log from '../../img/log.jpg'
import './index.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='header-hd'>
        <ul>
          <li><a href="#" className='header-log'><img src={log} alt="" /></a></li>
        </ul>
      </div>
      <div className='herder-list'>
        <ul>
          <li><a className='herder-ht-a' href="#">发现音乐</a></li>
          <li><a className='herder-ht-a' href="#">我的音乐</a></li>
          <li><a className='herder-ht-a' href="#">关注</a></li>
          <li><a className='herder-ht-a' href="#">商城</a></li>
          <li><a className='herder-ht-a' href="#">音乐人</a></li>
          <li><a className='herder-ht-a' href="#">下载客户端</a></li>
        </ul>
      </div>
      <span className='herder-hot'>HOT</span>
      <div className='herder-deng'>
        <a href="#">登录</a>
      </div>
      <a className='herder-zuo' href="">创作者中心</a>
      <div className='herder-search'>
        <input className='herder-search-inp' type="text" value='音乐/视频/电台/用户' />
      </div>
    </div>
  )
}
