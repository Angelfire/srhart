// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'

type DataResponse = {
  repos: Array<RepoResponse>
}

type RepoResponse = {
  name: string,
  description: string,
  language: string,
  stargazers_count: number,
  forks: number,
  size: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  const octokit = new Octokit()

  const { data } = await octokit.request('GET /users/{owner}/repos', {
    owner: 'angelfire',
    sort: 'updated',
    per_page: 6
  })

  const repos = data.map((repo: RepoResponse) => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    starsCount: repo.stargazers_count,
    forks: repo.forks,
    size: repo.size
  }))

  res.status(200).json({ repos })
}
