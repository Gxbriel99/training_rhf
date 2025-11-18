import z from "zod"    

export const formSchema = z.object({
    name: z.string().min(2, "Nome troppo corto"),
    surname: z.string().min(2, "Cognome troppo corto"),
    birthdate: z.string().nonempty("Inserisci la data di nascita"),
    gender: z.string().nonempty("Seleziona un sesso"),
    cf: z.string().min(16, "Codice fiscale non valido"),

    // Form figlio:
    cell: z.string().min(10, "numero troppo corto").optional(),
    email: z.string().email("Email non valida").optional(),
    password: z.string().min(6, "Password troppo corta").optional(),
});
