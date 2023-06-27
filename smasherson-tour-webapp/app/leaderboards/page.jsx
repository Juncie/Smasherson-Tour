'use client'
import { Avatar } from 'flowbite-react'
import { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'

const generateTestCases = () => {
    const testCases = []

    for (let i = 1; i <= 100; i++) {
        const testCase = {
            rank: i,
            name: `Player ${i}`,
            score: Math.floor(Math.random() * 1000),
            cashEarned: Math.floor(Math.random() * 1000),
        }

        testCases.push(testCase)
    }

    return testCases
}

const Leaderboard = () => {
    const data = useMemo(() => generateTestCases(), [])
    const columns = useMemo(
        () => [
            {
                Header: 'Rank',
                accessor: 'rank',
                className: 'px-6 py-8 whitespace-no-wrap',
            },
            {
                Header: 'Name',
                accessor: 'name',
                className: 'px-6 py-8 flex gap-4 items-center',
                Cell: ({ value }) => (
                    <>
                        <Avatar placeholder rounded />
                        {value}
                    </>
                ),
            },
            {
                Header: 'Score',
                accessor: 'score',
                className: 'px-6 py-8 whitespace-no-wrap',
            },
            {
                Header: () => (
                    <span className="text-white">
                        <span className="text-yellow-300">Smash Cash </span>
                        Earned
                    </span>
                ),
                accessor: 'cashEarned',
                className: 'px-6 py-8 whitespace-no-wrap',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state: { pageIndex },
        gotoPage,
        pageCount,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        usePagination
    )

    return (
        <div className="flex flex-col items-center mx-24 bg-opacity-10 relative">
            <h1 className="text-6xl font-bold mb-4 uppercase tracking-wider">
                Smash Tour Leaderboard
            </h1>

            <div id="viewport" className="">
                <table
                    className="lg:min-w-[1248px] sm:max-w-md"
                    {...getTableProps()}
                >
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        className={`px-6 py-8 bg-[#0082B5] text-left text-xl leading-4 font-bold text-white uppercase tracking-wider ${column.className}`}
                                        {...column.getHeaderProps()}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        className="divide-y divide-gray-200"
                        {...getTableBodyProps()}
                    >
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr
                                    className="dark:hover:bg-gray-800 transition"
                                    {...row.getRowProps()}
                                >
                                    {row.cells.map((cell) => (
                                        <td
                                            className={`px-6 py-4 whitespace-no-wrap ${cell.column.className} `}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className="mx-1 px-3 py-2 rounded-md bg-gray-200 text-gray-700"
                    onClick={() => gotoPage(0)}
                    disabled={pageIndex === 0}
                >
                    First
                </button>
                <button
                    className="mx-1 px-3 py-2 rounded-md bg-gray-200 text-gray-700"
                    onClick={() => gotoPage(pageIndex - 1)}
                    disabled={pageIndex === 0}
                >
                    Previous
                </button>

                {Array.from({ length: pageCount }, (_, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-2 rounded-md ${
                            pageIndex === index
                                ? 'bg-gray-700 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                        onClick={() => gotoPage(index)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="mx-1 px-3 py-2 rounded-md bg-gray-200 text-gray-700"
                    onClick={() => gotoPage(pageIndex + 1)}
                    disabled={pageIndex === pageCount - 1}
                >
                    Next
                </button>
                <button
                    className="mx-1 px-3 py-2 rounded-md bg-gray-200 text-gray-700"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={pageIndex === pageCount - 1}
                >
                    Last
                </button>
            </div>
        </div>
    )
}

export default Leaderboard
