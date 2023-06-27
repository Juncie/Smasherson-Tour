export default function Sidebar({ className, children }) {
    return (
        <div className="flex fixed items-center justify-end flex-col z-30">
            <div
                className={`${className}   h-screen flex items-center flex-col  justify-center bg-gray-200 px-4 py-8  dark:bg-gray-800`}
            >
                <h2 className="text-lg font-semibold mb-4">Event Categories</h2>
                <ul className="divide-y">
                    <li className="mb-2">
                        <button className="px-2 py-1 rounded ">
                            Long Drive
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="px-2 py-1 rounded ">
                            Closest 2 the Pin
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="px-2 py-1 rounded ">
                            Elimination
                        </button>
                    </li>
                    <li className="mb-2">
                        <button className="px-2 py-1 rounded ">2V2S</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
