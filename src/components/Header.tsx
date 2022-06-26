import { Logo } from "./logo";
import { Link } from 'react-router-dom';

export function Header(){

    return (
        <header className="w-full flex justify-center items-center py-5 border-b border-gray-600 bg-gray-700">
        
            
            <Link to = {`/event`}>
                <Logo />
            </Link>
        </header>       
        )

}