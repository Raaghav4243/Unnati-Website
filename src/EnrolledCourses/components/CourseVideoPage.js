import React from 'react'
import ReactPlayer from 'react-player'
import './CourseVdieoPagecss.css';
import pdf from '../downloadpdf.pdf'
import downloadpdf from '../pdfdownload.jpg'
import { CourseVideoPage, DownloadPDFimage, VideoPlayer} from './Styledcomponentscourdevideopage'

function Video() {
    return (
       
    
        <CourseVideoPage>
            <VideoPlayer>
                <ReactPlayer width='65vw' height='80vh' controls url="https://www.youtube.com/watch?v=_plGdWmqFE4&ab_channel=rrgraph" />
            </VideoPlayer>
                <DownloadPDFimage>
                <a href={pdf} download="downloadpdf.pdf"><img src={downloadpdf} width='200vw' height='60vw'/> </a>
                </DownloadPDFimage>
            
        </CourseVideoPage>
        )
    }

export default Video
