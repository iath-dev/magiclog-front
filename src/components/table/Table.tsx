import React from 'react';
import classNames from 'classnames';

export type ColumnDefinition<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
  render?: (value: T[K], row: T) => React.ReactNode;
};

type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinition<T, K>>;
  pageSize?: number;
  className?: string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  showHeader?: boolean;
  emptyMessage?: string;
};

const Table = <T, K extends keyof T>({
  data,
  columns,
  className = '',
  striped = true,
  hoverable = true,
  bordered = false,
  showHeader = true,
  emptyMessage = 'No hay datos disponibles',
}: TableProps<T, K>) => {

  return (
    <div className={classNames('overflow-hidden shadow-sm', className, {
        'border border-gray-200 dark:border-gray-700 rounded-lg': bordered,
    })}>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            {showHeader && (
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                {columns.map((column, idx) => (
                    <th
                    key={`header-${idx}`}
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${column.width ? `w-${column.width}` : ''}`}
                    >
                    {column.header}
                    </th>
                ))}
                </tr>
            </thead>
            )}
            <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${striped ? 'bg-white dark:bg-gray-800' : ''}`}>
            {data.length > 0 ? (
                data.map((row, rowIndex) => (
                <tr
                    key={`row-${rowIndex}`}
                    className={`${hoverable ? 'hover:bg-gray-50 dark:hover:bg-gray-700' : ''} ${striped && rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
                >
                    {columns.map((column, colIndex) => (
                    <td
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                    >
                        {column.render
                        ? column.render(row[column.key], row)
                        : String(row[column.key])}
                    </td>
                    ))}
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={columns.length} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    {emptyMessage}
                </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
  );
};

export default Table;