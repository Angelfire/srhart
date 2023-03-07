export type RepoResponse = {
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks: number
  size: number
}

export type DataResponse = Array<RepoResponse>
