import React from 'react'
import './CourseVdieoPagecss.css';
import pdf from '../downloadpdf.pdf'
import downloadpdf from '../pdfdownload.jpg'
import { Page, CourseVideoPage, DownloadPDFimage, VideoPlayer} from './Styledcomponentscourdevideopage'

import { Navbar } from '../../HomePage/components/Navbar_New';
import SideNav from '../../StudentDashboard/SideNav/SideNav';
import ReactPlayer from 'react-player';
import { CourseSideNav } from '../../CourseDashboard/SideNav_Course/SideNav';
import { AssignmentStartPage } from '../../AssignmentPages/AssignmentStart/AssignmentStartElements';


function Video() {
    return (
       <>
       <Navbar />
    <AssignmentStartPage>
        <CourseSideNav />
        <CourseVideoPage>
            <VideoPlayer>
                <ReactPlayer width='65vw' height='70vh' controls url="https://www.youtube.com/watch?v=_plGdWmqFE4&ab_channel=rrgraph" />
            </VideoPlayer>
                <DownloadPDFimage>
                <a href={pdf} download="downloadpdf.pdf"><img src={downloadpdf} width='200vw' height='60vw'/> </a>
                </DownloadPDFimage>
            
        </CourseVideoPage>
        </AssignmentStartPage> 
     </>
        )
    }

export default Video
