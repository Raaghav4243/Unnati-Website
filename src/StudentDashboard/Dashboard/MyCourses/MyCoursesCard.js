import React from 'react';
import styled from 'styled-components'
import {
    MyCoursesCard, MyCoursesContents, MyCoursesInfo, MyCoursesLogo,
    MyCoursesName, MyCoursesTopic, Topics, TopicsCoveredText,
    UpNext, UpNextInfo, UpNextLogo, UpNextText, PercentageCompletion,
    TopicsCoveredDiv, TickLogo, TopicName, UpNextDiv, UpNextTypeDiv,
    UpNextTopicDiv
} from './MyCoursesElements';

const MyCourseCard = ({ logo, name, percentage, nextlogo,
    UpNextTopic, UpNextType, Tick, Topic }) => {
    return (
        <>
            <MyCoursesCard>
                <MyCoursesInfo>
                    <MyCoursesTopic>
                        <MyCoursesLogo src={logo} />
                        <MyCoursesName>{name}</MyCoursesName>
                    </MyCoursesTopic>
                    <PercentageCompletion>{percentage} course complete</PercentageCompletion>
                </MyCoursesInfo>
                <UpNext>
                    <UpNextDiv>
                        <UpNextLogo src={nextlogo} />
                        <UpNextText>UP NEXT:</UpNextText>
                    </UpNextDiv>
                    <UpNextInfo>
                        <UpNextTypeDiv>{UpNextType}:</UpNextTypeDiv>
                        <UpNextTopicDiv>{UpNextTopic}</UpNextTopicDiv>
                    </UpNextInfo>
                </UpNext>
                <MyCoursesContents>
                    <TopicsCoveredText>TOPICS COVERED</TopicsCoveredText>
                    <TopicsCoveredDiv>
                        <Topics>
                            <TickLogo src={Tick} />
                            <TopicName>{Topic}</TopicName>
                        </Topics>
                        <Topics>
                            <TickLogo src={Tick} />
                            <TopicName>{Topic}</TopicName>
                        </Topics>
                        <Topics>
                            <TickLogo src={Tick} />
                            <TopicName>{Topic}</TopicName>
                        </Topics>
                        <Topics>
                            <TickLogo src={Tick} />
                            <TopicName>{Topic}</TopicName>
                        </Topics>
                        <Topics>
                            <TickLogo src={Tick} />
                            <TopicName>{Topic}</TopicName>
                        </Topics>
                        <Topics>
                            <TickLogo src={Tick} />
                            <TopicName>{Topic}</TopicName>
                        </Topics>
                    </TopicsCoveredDiv>
                </MyCoursesContents>
            </MyCoursesCard>
        </>
    )
}

export default MyCourseCard;