import { CheckCircle } from 'phosphor-react'

export function Lesson(){

    return (

        <a href="#">
            <span>
                Terça-Feira  ●  22 de junho  ●  19h00
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                        <CheckCircle size={20}/>
                        Conteúdo liberado
                    </span>
                    <span className="text-xs rounded border border-green-500 px-2 py-[2px] text-white">
                        AO VIVO
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    Abertura do evento Ignite Lab
                </strong>
            </div>
        </a>

        )

}