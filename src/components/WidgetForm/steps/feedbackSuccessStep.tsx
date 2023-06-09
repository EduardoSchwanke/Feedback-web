import { CheckCircle } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface feedbackSuccessStepProps{
    onFeedbackRestartResquest: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartResquest}: feedbackSuccessStepProps){
    return (
        <>
            <header>
                <CloseButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[304px] gap-5">

                <CheckCircle className="w-10 h-10 text-green-500" />

                <span>Agradecemos seu feedback</span>

                <button 
                    type='button' 
                    className="py-2 px-6 nt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zing-900 focus:ring-brand-500"
                    onClick={onFeedbackRestartResquest}
                >
                        
                    quero enviar outro                    
                </button>
            </div>
        </>
    )
}