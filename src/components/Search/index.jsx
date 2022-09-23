import React from 'react'
import './index.css'

export default function Search() {
  return (
    <div className='search'>
      <div className='search-title'>
        <ul>
          <li><a className='search-list' href="#">推荐</a></li>
          <li><a className='search-list' href="#">排行榜</a></li>
          <li><a className='search-list' href="#">歌单</a></li>
          <li><a className='search-list' href="#">主播电台</a></li>
          <li><a className='search-list' href="#">歌手</a></li>
          <li><a className='search-list' href="#">新碟上架</a></li>
        </ul>
      </div>
    </div>
  )
}
