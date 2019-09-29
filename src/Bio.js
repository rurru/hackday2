import React from 'react';




const Bio = (props) => {
    return ( 
        <div>            
    <h1><span className="headingtext">2019 Hackday Github API integration</span></h1>
    <div id="login">USER-ID: {props.data.login}</div>
    <div id="name">USER NAME: {props.data.name}</div>
    <div id="email">EMAIL: {props.data.email}</div>
    <div id="bio">BIO: {props.data.bio}</div>
    <div id="avatar_url"><img src = {props.data.avatar_url} /></div>
    <div id="html_url">Profile URL: {props.data.html_url}</div>
    <div id="followers">Number of Followers: {props.data.followers}</div>
    <div id="followers_url">Followers URL: {props.data.followers_url}</div>
    <div id="following">Numboer Followed: {props.data.following}</div>
    <div id="following_url">Following URL: {props.data.following_url}</div>
    <div id="gists_url">Gists URL: {props.data.gists_url}</div>
    <div id="starred_url">Starred URL: {props.data.starred_url}</div>
    <div id="organizations_url">Organizations URL: {props.data.organizations_url}</div>
    <div id="repos_url">Repositories URL: {props.data.repos_url}</div>
    <div id="company">Company: {props.data.company}</div>
    <div id="blog">Blog: {props.data.blog}</div>
    <div id="location">Location: {props.data.location}</div>
    <div id="public_repos">Public Repositories: {props.data.public_repos}</div>
    </div>
    );
}


export default Bio;