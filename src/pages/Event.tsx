import { CaretRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug:string }>()
    return (
        <div className="flex flex-col min-h-screen">    
            <Header />
            <main className="flex flex-1">
                
                {slug 
                ? <Video lessonSlug={slug}/> 
                : (
                    <div className="flex-1 flex justify-center items-center gap-8 text-gray-400">
                       <span className="text-5xl"> Escolha uma aula ao lado </span>
                       <CaretRight size={60}/>
                    </div>
                )}
                
                <Sidebar />
            </main>
        </div>
    )
  }