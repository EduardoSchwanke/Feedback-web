import { useState } from 'react'

import bugImageURL from '../../assets/bug.svg'
import ideaImageURL from '../../assets/idea.svg'
import thoughtImageURL from '../../assets/thought.svg'
import { FeedbacktypeStep } from './steps/feedbackTypeStep'
import { FeedbackContentStep } from './steps/feedbackContentStep'
import { FeedbackSuccessStep } from './steps/feedbackSuccessStep'


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageURL,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageURL,
            alt: 'Imagem de um lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageURL,
            alt: 'Imagem de um balão de pensamento'
        },
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    function handleFeedbackRestart() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartResquest={handleFeedbackRestart}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbacktypeStep onFeedbackTypeChange={setFeedbackType}/>
                    ) : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType} 
                            onFeedbackRestart={handleFeedbackRestart}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )
        
            }

            <footer>
                Feito com amor por <a className="underline underline-offset-2" href="https://google.com">Schwanke</a>
            </footer>
        </div>
    )
}