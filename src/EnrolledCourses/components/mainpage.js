import React from 'react'
import Testcomponent from './testcomponent';
import testdata from './testdata';
import Assignmentcomponent from './assignmentcomponent';
import Assignmentdata from './assignmentdata';
import Sectioncomponent from './sectioncomponent';
import Sectiondata from './sectiondata';
import Percentcomponent from './percentcomponent';
import percentdata from './percentdata';
import msexcel from '../msexcel2.jpg'
import { CourseContentboxcontainer ,Page, CourseContentheading , CourseContentbox, MSexcelright, EnrolledCourses, Buttons, Card,Coursepage,Leftmsexcel,MSexcelPercentflexcontainer,EachButton,Pagecontent} from './styledcomponents';
import { Navbar } from '../../HomePage/components/Navbar_New';
import SideNav from '../../StudentDashboard/SideNav/SideNav';




function Mainpage() {
    return (
        <>
        <Navbar />
            <Page>
                <SideNav />
            <Coursepage>
            <EnrolledCourses>ENROLLED COURSES</EnrolledCourses>

            <Pagecontent>
                <Leftmsexcel>MSWord</Leftmsexcel>
                <Buttons>
                  <EachButton><input type="radio" name="pagelinked" value="page1"></input></EachButton>
                  <EachButton><input type="radio" name="pagelinked" value="page2"></input></EachButton>
                  <EachButton><input type="radio" name="pagelinked" value="page3"></input></EachButton>
                  <EachButton><input type="radio" name="pagelinked" value="page4"></input></EachButton>
                  <EachButton><input type="radio" name="pagelinked" value="page5"></input></EachButton>
                </Buttons>
                
                <Card>
                    <MSexcelPercentflexcontainer>
                        <MSexcelright><img src={msexcel} width="50vw" height="50vw" />MS EXCEL</MSexcelright>
                        <Percentcomponent 
                        name={percentdata[0].percentcomplete}>
                        </Percentcomponent>
                    </MSexcelPercentflexcontainer>
                   
                    <CourseContentboxcontainer>
                        <CourseContentbox>
                            <CourseContentheading>SECTION</CourseContentheading>
                            <Sectioncomponent
                                name={Sectiondata[0].name}
                                imgsrc={Sectiondata[0].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[1].name}
                                imgsrc={Sectiondata[1].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[2].name}
                                imgsrc={Sectiondata[2].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[3].name}
                                imgsrc={Sectiondata[3].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[4].name}
                                imgsrc={Sectiondata[4].imgsrc} />
                            <Sectioncomponent
                                name={Sectiondata[5].name}
                                imgsrc={Sectiondata[5].imgsrc} />
                        </CourseContentbox>

                        <CourseContentbox>
                            <CourseContentheading>ASSIGNMENT</CourseContentheading>
                            <Assignmentcomponent
                                name={Assignmentdata[0].Assignname}
                                imgsrc={Assignmentdata[0].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[1].Assignname}
                                imgsrc={Assignmentdata[1].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[2].Assignname}
                                imgsrc={Assignmentdata[2].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[3].Assignname}
                                imgsrc={Assignmentdata[3].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[4].Assignname}
                                imgsrc={Assignmentdata[4].imgsrc} />
                            <Assignmentcomponent
                                name={Assignmentdata[5].Assignname}
                                imgsrc={Assignmentdata[5].imgsrc} />
                        </CourseContentbox>

                        <CourseContentbox>
                            <CourseContentheading>TEST</CourseContentheading>
                            <Testcomponent
                                name={testdata[0].testname}
                                imgsrc={testdata[0].imgsrc} />
                            <Testcomponent
                                name={testdata[1].testname}
                                imgsrc={testdata[1].imgsrc} />
                            <Testcomponent
                                name={testdata[2].testname}
                                imgsrc={testdata[2].imgsrc} />
                            <Testcomponent
                                name={testdata[3].testname}
                                imgsrc={testdata[3].imgsrc} />
                            <Testcomponent
                                name={testdata[4].testname}
                                imgsrc={testdata[4].imgsrc} />
                            <Testcomponent
                                name={testdata[5].testname}
                                imgsrc={testdata[5].imgsrc} />
                        </CourseContentbox>
                    </CourseContentboxcontainer>  
                </Card>
            </Pagecontent>
            </Coursepage>
            </Page>
            </>
    )
}

export default Mainpage;