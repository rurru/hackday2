import React from 'react';

const Bio = (props) => {
    return (
        <div id = "bar">
              <h1><span class="headingtext">2019 Hackday Github API integration</span></h1>
    <div id="login">{props.data.login}</div>
    <div id="name">{props.data.name}</div>
    <div id="email">{props.data.email}</div>
    <div id="bio">{props.data.bio}</div>
    <div id="following">{props.data.following}</div>
    
    <div id="avatar_url">{props.data.avatar_url}</div>
    <div id="html_url">{props.data.html_url}</div>
    <div id="followers_url">{props.data.followers_url}</div>
    <div id="following_url">{props.data.following_url}</div>
    <div id="gists_url">{props.data.gists_url}</div>
    <div id="starred_url">{props.data.starred_url}</div>
    <div id="organizations_url">{props.data.organizations_url}</div>
    <div id="repos_url">{props.data.repos_url}</div>
    <div id="company">{props.data.company}</div>
    <div id="blog">{props.data.blog}</div>
    <div id="location">{props.data.location}</div>
    <div id="public_repos">{props.data.public_repos}</div>
    <div id="followers">{props.data.followers}</div>
    <div id="following">{props.data.following}</div>
        </div>
    );
}


export default Bio;