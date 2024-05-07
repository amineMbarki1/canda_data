export default function Table({
  labels,
  rows,
}: {
  labels: string[];
  rows: Record<string, string | number>[];
}) {
  return (
    <div className="not-prose relative  rounded-xl overflow-hidden bg-slate-800">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              {labels.map((label) => (
                <th
                  key={label}
                  className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-800">
            {rows.map((row, i) => (
              <tr key={i}>
                {Object.keys(row).map((key) => (
                  <td
                    className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
                    key={row[key]}
                  >
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
