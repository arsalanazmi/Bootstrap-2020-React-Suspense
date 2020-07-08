import React from 'react'

const InamRepo = ({resource}) => {
    const inamRepos = resource.inamRepos.read();
    
    return(
        <ol>
            {inamRepos.map((repoData,i)=>(
                <li key={i}>
                     <a href={repoData.html_url}>{repoData.name}</a>
                </li>
            ))}
        </ol>
    )
}

export default InamRepo;