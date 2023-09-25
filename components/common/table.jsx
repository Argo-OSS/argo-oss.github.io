const TableHead = ({ colums, className }) => {
  return (
    <thead className={className}>
      <tr>
        {colums.map((colum, index) => (
          <th key={index} className="p-2 whitespace-nowrap">
            <div className="flex">
              <div className="grow font-semibold text-left">{colum.columTitle}</div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ colums, rows, className }) => {
  return (
    <tbody className={className}>
      {rows.map((row, index) => (
        <tr key={index}>
          {colums.map((colum, index) => (
            <td key={index} className="p-2 whitespace-nowrap">
              {row[colum.columTitle].data}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Table = ({
  tableTitle = 'Table Title',
  subTitle,
  colums = [
    {
      columTitle: 'GitHub',
      filter: true,
    },
    {
      columTitle: 'Type',
      filter: true,
    },
    {
      columTitle: 'Summary',
      filter: false,
    },
  ],
  rows = [
    {
      GitHub: {
        data: 'GeunSam2',
        searchLabel: 'GeunSam2',
      },
      Type: {
        data: 'PR',
        searchLabel: 'PR',
      },
      Summary: {
        data: '11111',
        searchLabel: null,
      },
    },
  ],
  theme = 'light',
}) => {
  return (
    <section id="contribute-info" className="flex flex-col justify-center antialiased text-gray-600 py-2">
      <div className="h-full">
        <div className={'w-full mx-auto shadow-lg rounded-sm border ' + (theme === 'dark' ? 'bg-zinc-900 border-gray-800' : 'bg-white border-gray-200')}>
          <header className={'px-5 py-4 border-b ' + (theme === 'dark' ? 'border-gray-800' : 'border-gray-100')}>
            <h2 className={'font-semibold ' + (theme === 'dark' ? 'text-gray-200' : 'text-gray-600')}>{tableTitle}</h2>
            {subTitle || null}
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <TableHead colums={colums} className={'text-xs font-semibold uppercase ' + (theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-500')} />
                <TableBody colums={colums} rows={rows} className={'text-sm divide-y ' + (theme === 'dark' ? 'divide-gray-800 text-gray-400' : 'divide-gray-100 text-gray-600')} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
