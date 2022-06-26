import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface Lessonprops{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props:Lessonprops){

    const { slug } = useParams<{slug:string}>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormated = format(props.availableAt, "EEEE'  ●  'd' de 'MMMM'  ●  'H'h'mm",{
        locale: ptBR,
    })

    const isActiveLesson = slug == props.slug;
    
    return (
        
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span>
                {availableDateFormated}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''} `}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={`text-sm text-blue-500 font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : ''}`}>
                            <CheckCircle size={20}/>
                            Conteúdo liberado
                        </span>
                    ): (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20}/>
                            Em breve
                        </span>
                    )}
                    
                    <span className={`text-xs rounded border border-green-500 px-2 py-[2px] text-white ${isActiveLesson ? 'border-white text-white' : ''}`}>
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200' }`}>
                    {props.title} 
                </strong>
            </div>
        </Link>

        )

}