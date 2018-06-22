import React, { Component } from 'react';
import './Upload.css';
import { uploadAudio } from '../../fire';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class Upload extends Component {
    constructor() {
        super();
        this.state = {
            audioName: 'newFile'
        }
    }

    handleUploadFile = (event) => {
        this.setState({ audio: event.target.files[0] });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.audio) {
            uploadAudio(
                this.state.audioName,
                this.state.categoryName,
                this.state.audio
            );
            this.setState({ formSubmitted: true });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col uploader">
                        <h3>Upload your Show</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col uploader">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <TextField required
                                    id="fileName"
                                    name="audioName"
                                    label="Name of the File you want to upload."
                                    margin="dense"
                                    fullWidth={true}
                                    onChange={this.handleChange}
                                />
                                <TextField required
                                    id="categoryName"
                                    name="categoryName"
                                    label="Category of the File you want to upload."
                                    margin="dense"
                                    fullWidth={true}
                                    onChange={this.handleChange}
                                />
                                <div className="row submitRow">
                                    <input type="file" id="uploadAudio"
                                        onChange={this.handleUploadFile} />
                                    <Button raised
                                        type="submit"
                                        color="primary">
                                        Submit
                                </Button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                {this.state.formSubmitted ?
                    <div className="row">
                        <div className="col">
                            Your file with the name <b>{this.state.audioName}</b> and category <b>{this.state.categoryName}</b> has been successfully uploaded.
                        </div>
                    </div>
                    : ""}
            </div>
        )
    }
}

export default Upload;