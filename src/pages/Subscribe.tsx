import { gql, useMutation} from "@apollo/client"
import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../components/logo"

const CREATE_SUBSCRIBER_MUTATION = gql`
mutation CreateSubscriber($name: String!, $email:String!){
  createSubscriber(data:{name: $name, email:$email}){
    id
  }
}

`


export function Subscribe(){

    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event: FormEvent ){
        event.preventDefault();
      
       await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <span className="text-blue-500">aplicação completa</span>, do zero, com <span className="text-blue-500">React JS</span>
                        </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                </div>
                <div className="p-8  border border-gray-500 bg-gray-700 rounded">
                <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        
                        <input 
                            type="text" 
                            placeholder="Seu nome completo" 
                            className="rounded bg-gray-900 px-5 h-14"
                            onChange={event => setName(event.target.value)} />
                            
                        
                        <input 
                            type="text" 
                            placeholder="Digite seu e-mail" 
                            className="rounded bg-gray-900 px-5 h-14" 
                            onChange={event => setEmail(event.target.value)} />

                        <button disabled={loading} type="submit" className="mt-4 bg-green-500 py-4 text-white font-bold text-sm uppercase rounded hover:bg-green-700 transition-colors disabled:opacity-50">Garantir minha vaga</button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/code-decorate.png" className="mt-10" alt="" />
        </div>
    )
}