'use client'
import { useForm, FormProvider,useFormContext } from "react-hook-form"
import { useState } from "react";
import FormCredenziali from "./formCredenziali";
import { watch } from "fs";

export default function FormPadre(){

    const [showForms, setShowForms] = useState({
        credentalForm: false,
        // form2: false,
        // form3: false,
    });

    const closecredentalForm = () => {
        setShowForms(prev => ({ ...prev, credentalForm: false }));
    };


    const methods=useForm()


    
    const onSubmit = () => {
        console.log("Dati inviati:", methods.watch());
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full h-full flex flex-col gap-4 p-6 shadow-xl overflow-y-scroll">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Dati Anagrafici</h1>

                <input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...methods.register('name')}
                />

                <input
                    type="text"
                    id="surname"
                    placeholder="Cognome"
                    {...methods.register('surname')}
                    className="p-2 border border-black text-black rounded-md w-full"
                />

                <input
                    type="date"
                    id="birthdate"
                    {...methods.register('birthdate')}
                    className="p-2 border border-black text-black rounded-md w-full"
                />

                <select
                    id="gender"
                    className="p-2 border border-black text-black rounded-md w-full"
                    {...methods.register('gender')}
                >
                    <option value="">Seleziona sesso</option>
                    <option value="M">Maschile</option>
                    <option value="F">Femminile</option>
                    <option value="O">Altro</option>
                </select>

                <input
                    type="text"
                    id="cf"
                    placeholder="Codice Fiscale"
                    {...methods.register('cf')}
                    className="p-2 border border-black text-black rounded-md w-full"
                />

                <div className="w-full h-auto flex items-center justify-end">
                    {!showForms.credentalForm && (
                        <button
                            type="button"
                            onClick={() =>
                                setShowForms(prev => ({ ...prev, credentalForm: true }))
                            }
                            className="mt-2 w-fit h-fit p-2 bg-green-400 text-black rounded-md hover:bg-green-500 transition"
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