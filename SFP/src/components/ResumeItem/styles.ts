import styled from "styled-components";

export const Info = styled.div<{ color?: string }>`
    text-align = center;
    font-weight: bold;
    color ${props => props.color ?? '#000'};
`;

export const Title = styled.div<{ color?: string }>`
    color ${props => props.color ?? '#000'};
`;