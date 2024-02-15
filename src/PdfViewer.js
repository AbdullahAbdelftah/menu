import { Viewer,Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css' ;
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdfUrl from './new_document (12).pdf';
import { useEffect, useState } from "react";

const PdfViewer = () => {
    const layoutPluginInstance = defaultLayoutPlugin();
    let [path,setPath]=useState(0);
    return ( 
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
             <Viewer onDocumentLoad={()=>{
                if(path!==0){
                    window.location.reload();
                }
                setPath(path+1);
             }} fileUrl={pdfUrl} plugins={[layoutPluginInstance]} disabled={true}/>
            </Worker>
        </div>
     );
}
 
export default PdfViewer;