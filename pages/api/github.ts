// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { RepoResponse } from '@/types'

import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'

type DataResponse = {
  repos: Array<RepoResponse>
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
    description: repo.description,
    forks: repo.forks,
    githubUrl: repo.html_url,
    language: repo.language,
    name: repo.name,
    size: repo.size,
    starsCount: repo.stargazers_count
  }))

  res.status(200).json({ repos })
}
