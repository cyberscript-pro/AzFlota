"use client";
import React, { useState } from 'react'
import Image from "next/image";

import useApiGet from '../hooks/useApiGet'
import { Chofer } from './types'
import Table from './table';
import Modal from '@/app/components/modal';
import ChoferForm from './form';

function Choferes() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);
    const { loading, error, data } = useApiGet<Chofer>({url: "http://localhost:3000/api/choferes/"});

    if(error) {
        return <div>Error {error}</div>
    }

    return (
        <div className='relative w-full min-h-screen z-0'>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Gestion de Choferes</h1>
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out">
                    Nuevo
                </button>
                </div>
            </header>

            {loading && 
                <div className='fixed inset-0 z-50 flex justify-center items-center'>
                    <div className="fixed inset-0 bg-opacity-50 transition-opacity" />
                    <Image
                        className=""
                        src="/loading.svg"
                        alt="Loading"
                        width={100}
                        height={100}
                    />
                </div>
            }

            <Table data={data}/>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">
                                Registro de Choferes
                            </h3>

                            <ChoferForm onClose={() => setIsModalOpen(false)}/>
                        </div>
                    </div>
                </div>
                </Modal>

        </div>
    )
}

export default Choferes