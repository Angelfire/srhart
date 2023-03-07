import type { DataResponse } from "@/types"

import Link from "next/link"
import { Copy, RepoFork, Star } from "@/components/icons"

export default function Repos({ data }: { data: DataResponse }) {
  if (!data)
    return (
      <div className="my-14 mx-8 flex flex-col sm:container">
        <p className="dark:text-slate-100">
          Loading projects and open source contributions...
        </p>
      </div>
    )

  return (
    <div className="my-14 mx-8 flex flex-col sm:container">
      {data?.length ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map((repo: any) => (
            <div
              className="flex flex-col justify-between rounded border border-gray-200 p-2 shadow-md"
              key={repo.name}
            >
              <div className="flex items-center">
                <Copy className="w-4" />
                <p className="ml-2 font-mono">
                  <Link
                    href={repo.githubUrl}
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repo.name}
                  </Link>
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-100">
                {repo.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  {repo.language && (
                    <span className="text-xs text-slate-600 dark:text-slate-100">
                      {repo.language}
                    </span>
                  )}
                  <span className="text-xs text-slate-600 dark:text-slate-100">
                    <Star className="w-4" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <RepoFork className="w-4 text-slate-600 dark:text-slate-100" />
                    {repo.forks}
                  </span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-100">
                  {repo.size} KB
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No repos available for now</p>
      )}
    </div>
  )
}
