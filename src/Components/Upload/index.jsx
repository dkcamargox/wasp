import React, { Component } from 'react';

import { DropContainer, UploadMessage } from './styles';
import Dropzone from 'react-dropzone';
import './simple_styles.css'

export default class Upload extends Component {

  checkCsv = file => {
    const fileName = file.name;
    const fileExtention = fileName.split(".")[-1];
    if (fileExtention === 'csv') {
      return {
        code: "not-csv",
        message: 'The archive is not a .csv file'
      };
    }
  
    return null
  }

  renderDragMessage = (placeHolder, isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>{placeHolder}</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Muchos archivos o este archivo no es soportado</UploadMessage>;
    };

    return <UploadMessage type="success">Solte el archivo acá</UploadMessage>;
  };
  
    
  

  render() {
    const { onUpload, placeHolder, accept } = this.props;
    return (
       <div className="wrap">
         <Dropzone accept={accept} onDropAccepted={onUpload} maxFiles={1} >
            { ( { getRootProps, getInputProps, isDragActive, isDragReject} ) => (
              <DropContainer
              { ...getRootProps() }
              isDragActive={isDragActive}
              isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                {this.renderDragMessage(placeHolder, isDragActive, isDragReject)}
              </DropContainer>
            ) }
          </Dropzone>
       </div>
    );
  }
}
