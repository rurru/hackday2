import React from 'react';




const Bio = (props) => {
    return ( 
        <div>            
    <h1><span className="headingtext"><strong>2019 Hackday Github API integration</strong></span></h1>
    <div id="login"><strong>USER-ID: </strong>{props.data.login}</div>
    <div id="name"><strong>USER NAME: </strong>{props.data.name}</div>
    <div id="email"><strong>EMAIL: </strong>{props.data.email? props.data.email : "(not displayed)"}</div>
    <div id="bio"><strong>BIO: </strong>{props.data.bio ? props.data.bio : "none"}</div>
    <div id="avatar_url"><img src = {props.data.avatar_url} width = "175" height = "175" /></div>
    <div id="company"><strong>Company: </strong>{props.data.company ? props.data.company : "none"}</div>
    <div id="blog"><strong>Blog: </strong>{props.data.blog? props.data.blog: "none"}</div>
    <div id="location"><strong>Location: </strong>{props.data.location? props.data.location : "none"}</div>
    <div id="html_url"><strong>Profile URL:</strong> <a href={props.data.html_url}>{props.data.html_url}</a></div>
    <div id="followers"><strong>Number of Followers: </strong>{props.data.followers}</div>
    <div id="followers_url"><strong>Followers URL: </strong>{props.data.followers_url}</div>
    <div id="following"><strong>Number Followed: </strong>{props.data.following}</div>
    <div id="following_url"><strong>Following URL: </strong>{props.data.following_url}</div>
    <div id="gists_url"><strong>Gists URL: </strong>{props.data.gists_url}</div>
    <div id="starred_url"><strong>Starred URL: </strong>{props.data.starred_url}</div>
    <div id="organizations_url"><strong>Organizations URL: </strong>{props.data.organizations_url}</div>
    <div id="repos_url"><strong>Repositories URL: </strong><a href = {props.data.repos_url}>{props.data.repos_url}</a></div>
    <div id="public_repos"><strong>Public Repositories: </strong>{props.data.public_repos}</div>
    </div>
    );
}


export default Bio;