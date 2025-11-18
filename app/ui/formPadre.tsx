'use client'

import { useForm, FormProvider } from "react-hook-form"
import { useState } from "react";

import { formSchema } from "../lib/zod/form.schem";
import { zodResolver } from "@hookform/resolvers/zod";
import FormCredenziali from "./formCredenziali";

export default function FormPadre() {

    const [showForms, setShowForms] = useState({
        credentalForm: false,
    });

    const closecredentalForm = () => {
        setShowForms(prev => ({ ...prev, credentalForm: false }));
    };

    // ✅ Manteniamo methods
    const methods = useForm({
        resolver: zodResolver(formSchema)
    });

    const { register, handleSubmit, formState: { errors }, watch } = methods;

    const onSubmit = () => {
        console.log("Dati inviati:", watch());
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col gap-4 p-6 shadow-xl overflow-y-scroll">

                <h1 className="text-2xl font-bold mb-4 text-gray-800">Dati Anagrafici</h1>

                {/* NOME */}
                <input
                    type="text"
                    placeholder="Nome"
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...register('name')}
                />
                {errors.name && (
                    <p className="text-red-600 text-sm">{errors.name.message}</p>
                )}

                {/* COGNOME */}
                <input
                    type="text"
                    placeholder="Cognome"
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...register('surname')}
                />
                {errors.surname && (
                    <p className="text-red-600 text-sm">{errors.surname.message}</p>
                )}

                {/* DATA DI NASCITA */}
                <input
                    type="date"
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...register('birthdate')}
                />
                {errors.birthdate && (
                    <p className="text-red-600 text-sm">{errors.birthdate.message}</p>
                )}

                {/* SESSO */}
                <select
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...register('gender')}
                >
                    <option value="">Seleziona sesso</option>
                    <option value="M">Maschile</option>
                    <option value="F">Femminile</option>
                    <option value="O">Altro</option>
                </select>
                {errors.gender && (
                    <p className="text-red-600 text-sm">{errors.gender.message}</p>
                )}

                {/* CODICE FISCALE */}
                <input
                    type="text"
                    placeholder="Codice Fiscale"
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...register('cf')}
                />
                {errors.cf && (
                    <p className="text-red-600 text-sm">{errors.cf.message}</p>
                )}

                {/* SEZIONE CREDENZIALI */}
                <div className="w-full flex items-center justify-end">
                    {!showForms.credentalForm && (
                        <button
                            type="button"
                            onClick={() => setShowForms(prev => ({ ...prev, credentalForm: true }))}
                            className="mt-2 p-2 bg-green-400 text-black rounded-md hover:bg-green-500 transition"
                        >
                            Aggiungi credenziali
                        </button>
                    )}

                    {showForms.credentalForm && <FormCredenziali close={closecredentalForm} />}
                </div>

                <button
                    type="submit"
                    className="mt-4 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                    Invia
                </button>

            </form>
        </FormProvider>
    );
}
