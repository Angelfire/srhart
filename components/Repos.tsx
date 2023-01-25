import useSWR from 'swr'
import Link from 'next/link'
import { RepoCloneIcon, StarIcon, RepoForkedIcon } from '@primer/octicons-react'

const fetcher = (apiURL: string) => fetch(apiURL).then((res) => res.json())

export default function Repos() {
  const { data, error } = useSWR('/api/github', fetcher)

  if (error) return <div className="flex flex-col my-16 mx-8 sm:container">Failed to load</div>
  if (!data) return <div className="flex flex-col my-16 mx-8 sm:container">Loading...</div>  
  
  return (
    <div className="flex flex-col my-16 mx-8 sm:container">
      { data.repos.length ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.repos.map((repo: any) => (
            <div className="bg-white flex flex-col shadow-md p-2" key={repo.name}>
              <div className="flex items-center">
                <RepoCloneIcon />
                <p className="font-mono ml-2">
                  <Link
                    href={repo.githubUrl}
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >{repo.name}</Link>
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-600">{repo.description}</p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  {repo.language && <span className="text-xs mr-2 text-slate-600">{repo.language}</span>}
                  <span className="mr-2 text-xs text-slate-600">
                    <StarIcon className="mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="text-xs">
                    <RepoForkedIcon className="mr-1 text-slate-600" />
                    {repo.forks}
                  </span>
                </div>
                <span className="text-xs text-slate-600">{repo.size} KB</span>
              </div>
            </div>
          ))}
        </div>
      ) : <p>No repos available for now</p>}
    </div>
  )
}
