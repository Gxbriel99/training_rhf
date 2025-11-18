'use client'

import { useFormContext } from "react-hook-form"

export default function FormCredenziali({ close }: { close: () => void }) {

    const {register}= useFormContext();
    return (
        <section className="w-full flex flex-col gap-4 p-4 border border-gray-300 rounded-md mt-4 shadow-md bg-white">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Credenziali</h2>
                <button
                    type="button"
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    onClick={close}
                >
                    Chiudi
                </button>
            </div>
            <input
                type="text"
                placeholder="Numero"
                id="cell"
                className="p-2 border border-black text-black rounded-md w-full"
                {...register('cell')}
            />
            <input
                type="email"
                placeholder="Email"
                className="p-2 border border-black text-black rounded-md w-full"
                id="email"
                {...register('email')}
            />
            <input
                type="password"
                placeholder="Password"
                className="p-2 border border-black text-black rounded-md w-full"
                id="password"
                {...register('password')}
            />
            <input
                type="password"
                placeholder="Conferma Password"
                className="p-2 border border-black text-black rounded-md w-full"
            />
        </section>
    )
}
