import React from 'react'
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Inputs } from '../data/FormDataPost'

type AddChoferProps = {
    onSubmit: SubmitHandler<Inputs>;
    register: UseFormRegister<Inputs>;
    handleSubmit: UseFormHandleSubmit<Inputs, Inputs>;
    errors: FieldErrors<Inputs>;
    onClose: () => void;
}

function AddChofer({ onSubmit, handleSubmit, register, errors, onClose }: AddChoferProps) {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre y Apellidos <span className="text-red-500 text-lg">*</span>
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        { ...register('nombre') }
                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    />
                    {
                        errors.nombre?.message && <span className="text-red-500 text-sm">{errors.nombre.message}</span>
                    }
                </div>

                <div>
                    <label htmlFor="ci" className="block text-sm font-medium text-gray-700">
                        Carnet de Identidad <span className="text-red-500 text-lg">*</span>
                    </label>
                    <input
                        id="ci"
                        type="text"
                        { ...register('ci') }
                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    />
                    {
                        errors.ci?.message && <span className="text-red-500 text-sm">{errors.ci.message}</span>
                    }
                </div>

                <div>
                    <label htmlFor="licencia" className="block text-sm font-medium text-gray-700">
                        Licencia de Conducción
                    </label>
                    <input
                        id="licencia"
                        type="text"
                        { ...register('licencia') }
                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    />
                    {
                        errors.licencia?.message && <span className="text-red-500 text-sm">{errors.licencia.message}</span>
                    }
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                    type="submit"
                    className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                    >
                    Registrar
                    </button>
                    <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                    Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddChofer