import FormPadre from "./ui/formPadre";


export default function Home() {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-zinc-50 font-sans overflow-hidden">
      <main className="w-full h-full">
        <FormPadre/>
      </main>
    </div>
  );
}
