import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./Loading";

interface screenshotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({screenshot, onScreenshotTook} : screenshotButtonProps) {
    const [isTakeingScreenshot, setTakeingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setTakeingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png')

        onScreenshotTook(base64Image)
        setTakeingScreenshot(false)
    }
    if(screenshot){
        return(
            <button 
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"    
                onClick={() => {onScreenshotTook(null)}}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
           >
                <Trash weight="fill" />
            </button>
        )
    }

    return(
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zing-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zing-900 focus:ring-brand-500 transition-colors"
            onClick={handleTakeScreenshot}
        >
            {isTakeingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}
        </button>
    )
}