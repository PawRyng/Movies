'use client'
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import {Spinner} from "@heroui/spinner";
import { NoImageIcon } from "./icons";
 
export default function ImageElement({path, imageWidth=300}:{path:string, imageWidth?: number}) {
    const [loaded, setLoaded] = useState(false);

    const ImageComponent = () =>{
        return(
            <>
                <Image src={`https://image.tmdb.org/t/p/w${imageWidth}${path}`} width={imageWidth} height={500} alt="Picture of the author" className={clsx(loaded ? "visible" : "invisible")} onLoad={()=> setLoaded(true)}/>
                {!loaded && <Spinner className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")}/>}
            </>
        )
    }
    
    return (
        <div className="overflow-hidden bg-gray-100 rounded-lg mb-2 w-full relative image-holder flex items-center justify-center">
            {
                path ? <ImageComponent /> : <NoImageIcon width={100} height={100} fill="#ffffff"/>
            }
        </div>
       
    );
  }
  