import styled, { css } from "styled-components";





const dragActive = css`
    border-color: #78e5d5;
`;
const dragReject = css`
    border-color: #e57878;
`;
const messageColors = {
    default: "#999",
    error: "#e57878",
    success: "#78e5d5"
};
export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border: 2px dashed #999;
    border-radius: 4px;
    cursor: pointer;
    width: 95%;
    height: 100%;
    padding-inline: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 1s ease;
    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;
export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || "default"]};
    justify-content: center;
    align-items: center;
  `;