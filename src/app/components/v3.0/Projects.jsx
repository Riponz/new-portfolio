import React from 'react'

function Projects() {
    return (
        <div className='w-screen h-max p-10 flex justify-center items-center'>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-left p-2 font-semibold">Project</th>
                        <th className="text-left p-2 font-semibold">Year</th>
                        <th className="text-left p-2 font-semibold">Stack</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="p-2">Project A</td>
                        <td className="p-2">2023</td>
                        <td className="p-2">MERN</td>
                    </tr>
                    <tr className="border-t">
                        <td className="p-2">Project B</td>
                        <td className="p-2">2024</td>
                        <td className="p-2">Django + React</td>
                    </tr>
                    <tr className="border-t">
                        <td className="p-2">Project C</td>
                        <td className="p-2">2025</td>
                        <td className="p-2">Next.js + FastAPI</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Projects