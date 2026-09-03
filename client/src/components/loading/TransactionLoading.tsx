interface TransactionLoadingProps {
  count?: number;
}

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800 ${className}`}
    />
  );
}

export default function TransactionLoading({
  count = 5,
}: TransactionLoadingProps) {
  const skeletonCount = Math.max(count, 1);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 px-4 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <Skeleton className="h-10 w-full lg:max-w-sm" />

            <div className="flex w-full gap-1 rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900 lg:w-auto">
              <Skeleton className="h-8 w-18" />
              <Skeleton className="h-8 w-18" />
              <Skeleton className="h-8 w-18" />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-9 w-32" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </div>

        <div className="hidden overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                <th className="w-12 px-4 py-3">
                  <Skeleton className="h-4 w-4" />
                </th>

                <th className="px-4 py-3 text-left">
                  <Skeleton className="h-4 w-24" />
                </th>

                <th className="px-4 py-3 text-left">
                  <Skeleton className="h-4 w-20" />
                </th>

                <th className="px-4 py-3 text-left">
                  <Skeleton className="h-4 w-28" />
                </th>

                <th className="px-4 py-3 text-left">
                  <Skeleton className="h-4 w-24" />
                </th>

                <th className="px-4 py-3 text-left">
                  <Skeleton className="h-4 w-20" />
                </th>

                <th className="w-12 px-4 py-3">
                  <Skeleton className="h-4 w-4" />
                </th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <tr
                  key={index}
                  className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
                >
                  <td className="px-4 py-4">
                    <Skeleton className="h-4 w-4" />
                  </td>

                  <td className="px-4 py-4">
                    <Skeleton className="h-4 w-40" />
                  </td>

                  <td className="px-4 py-4">
                    <Skeleton className="h-4 w-24" />
                  </td>

                  <td className="px-4 py-4">
                    <Skeleton className="h-4 w-28" />
                  </td>

                  <td className="px-4 py-4">
                    <Skeleton className="h-4 w-20" />
                  </td>

                  <td className="px-4 py-4">
                    <Skeleton className="h-4 w-24" />
                  </td>

                  <td className="px-4 py-4">
                    <Skeleton className="h-5 w-5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 flex-1 gap-3">
                  <Skeleton className="h-10 w-10 shrink-0 rounded-full" />

                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <Skeleton className="h-4 w-40 max-w-full" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>

                <Skeleton className="h-5 w-20" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-28" />
                </div>

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Skeleton className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
