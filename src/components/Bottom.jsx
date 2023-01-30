import React from 'react';
import LocationIcon from "../assets/icon-location.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import WebsiteIcon from "../assets/icon-website.svg";
import CompanyIcon from "../assets/icon-company.svg";

export const Bottom = ({data}) => {
  return (
    <div className='bottom'>
      <div className='left'>
        <img className='avatar' src={data.avatar_url}></img>
      </div>
      <div className='right'>
        <div className='info-top'>
          <h1>{data.login}</h1>
          <p>{data.created_at}</p>
        </div>
        <h2 className='hashtag'>@{data.login}</h2>
        <h2 className='bio'>{data.bio == null ? "This profile has no bio" : data.bio}</h2>
        <div className='info-mid'>
          <div className='info-mid-item'>
            <p>Repos</p>
            <h1>{data.public_repos}</h1>
          </div>
          <div className='info-mid-item'>
            <p>Followers</p>
            <h1>{data.followers}</h1>
          </div>
          <div className='info-mid-item'>
            <p>Following</p>
            <h1>{data.following}</h1>
          </div>
        </div>
        <div className='info-bottom'>
          <div className='info-bottom-item'>
            <img src={LocationIcon} className="icon-bottom"/>
            <p>{data.location}</p>
          </div>
          <div className='info-bottom-item'>
            <img src={TwitterIcon} className="icon-bottom"/>
            <p>{data.twitter_username}</p>
          </div>
          <div className='info-bottom-item'>
            <img src={WebsiteIcon} className="icon-bottom"/>
            <p>{data.html_url}</p>
          </div>
          <div className='info-bottom-item'>
            <img src={CompanyIcon} className="icon-bottom"/>
            <p>{data.company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

