import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import ContinueArrow from './ContinueArrow';

interface Props {

}

const Container = styled.section`
    min-height: calc(100vh - (64px + 40px));
`;

const TitleWrapper = styled.div`
    max-width: 440px;
    text-align: right;
    padding-bottom: 64px;
`;

const JumpLink = ({ children, target = '#' }) => {
    return (
        <a href={target} className="text-4xl text-white weight-thin font-display">{children}</a>
    );
}

export default function IntroSection({}: Props): ReactElement {
    return (
        <Container className="flex flex-row px-8">
            <div className="flex-1 flex justify-center flex-col items-center">
                <TitleWrapper>
                    <h1 className="text-6xl">Zach Townsend</h1>
                    <h2 className="text-3xl text-lightGray">Fullstack Web Developer<br />based in <span className="text-red">Berlin</span></h2>
                </TitleWrapper>
            </div>
            <div className="flex-0 flex items-center">
                <span className="pb-16"><ContinueArrow /></span>
            </div>
            <div className="flex-1 flex items-center justify-end">
                <ul className="pb-16">
                    <li className="mb-4"><JumpLink>Journey</JumpLink></li>
                    <li className="mb-4"><JumpLink>Projects</JumpLink></li>
                    <li className=""><JumpLink>Contact</JumpLink></li>
                </ul>
            </div>
        </Container>
    )
}
