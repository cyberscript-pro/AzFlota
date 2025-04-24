import { FieldValues, useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form"

type ChoferProps = {
    onClose: () => void;
}

function ChoferForm({ onClose }: ChoferProps) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    console.log(errors);

    return (
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Nombre y Apellidos <span className="text-red-500 text-lg">*</span>
                </label>
                <input
                    id="nombre"
                    type="text"
                    { ...register('nombre', {
                        required: {
                            value: true,
                            message: 'Nombre es requerido'
                        },
                        minLength: {
                            value: 2,
                            message: 'Nombre debe tener como minimo 2 caracteres'
                        },
                    }) }
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
            </div>

            <div>
                <label htmlFor="ci" className="block text-sm font-medium text-gray-700">
                    Carnet de Identidad
                </label>
                <input
                    id="ci"
                    type="text"
                    { ...register('ci', {
                        required: {
                            value: true,
                            message: 'Carnet de Identidad es requerido'
                        },
                        pattern: {
                            value: /^[0-9._%+-]$/,
                            message: 'Carnet de Identidad solo puede contener numeros'
                        },
                        minLength: {
                            value: 11,
                            message: 'Carnet de Identidad debe tener 11 caracteres'
                        },
                        maxLength: {
                            value: 11,
                            message: 'Carnet de Identidad debe tener 11 caracteres'
                        }
                    }) }
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.ci && <span className="text-red-500 text-sm">{errors.ci.message}</span>}
            </div>

            <div>
                <label htmlFor="licencia" className="block text-sm font-medium text-gray-700">
                    Licencia de Conducción 
                </label>
                <input
                    id="licencia"
                    type="text"
                    { ...register('licencia', {
                        minLength: 6
                    }) }
                    className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                {errors.licencia && <span className="text-red-500 text-sm">{errors.licencia.message}</span>}
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
    )
}

export default ChoferForm