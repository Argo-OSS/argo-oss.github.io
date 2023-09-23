const TableHead = ({ colums }) => {
  return (
    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
      <tr>
        {colums.map((colum, index) => (
          <th key={index} className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">{colum.columTitle}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ colums, rows }) => {
  return (
    <tbody className="text-sm divide-y divide-gray-100">
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
}) => {
  return (
    <section className="flex flex-col justify-center antialiased text-gray-600 py-2">
      <div className="h-full">
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">{tableTitle}</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <TableHead colums={colums} />
                <TableBody colums={colums} rows={rows} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
