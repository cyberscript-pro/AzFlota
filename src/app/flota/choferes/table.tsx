import React from 'react'
import { Chofer } from './types';

type TableProps = {
    data?: Chofer[];
}

function Table({ data }: TableProps) {

    const columns = ["Nombre y Apellidos", "Carnet de Identidad", "Licencia de Conduccion"]

    return (
        <div className="min-h-screen bg-gray-50">
            
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} scope="col" className="px-6 py-3 text-left font-medium  uppercase tracking-wider text-black">{ column }</th>
                            ))}
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Acciones</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data && data.map((chofer, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className=" font-medium text-gray-900">{chofer.nombre}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className=" text-gray-900">{chofer.ci}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className=" text-gray-900">{chofer.licencia}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right  font-medium">
                                    <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Editar</a>
                                    <a href="#" className="text-red-600 hover:text-red-900">Eliminar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </main>
        </div>
    )
}

export default Table