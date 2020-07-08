import React from 'react'

const ArsalanRepo = ({resource}) => {
  const arsalanRepos = resource.arsalanRepos.read()

  return (
    <ol>
      {arsalanRepos.map((repoData, i) => (
        <li key={i}>
          <a href={repoData.html_url}>{repoData.name}</a>
        </li>
      ))}
    </ol>
  )
}

export default ArsalanRepo;