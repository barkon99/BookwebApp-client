import React, { Component } from 'react';

class ImageUploader extends Component {
    constructor(props){
        super(props)

        this.state={
            image: undefined,
            ifChange: false,
            fileError: "",
            showButtons: Boolean()
        }

        this.changeImage = this.changeImage.bind(this)
        this.clickDeleteButton = this.clickDeleteButton.bind(this)
    }

    componentDidMount(){
        if(this.props.imageUrl === null || this.props.imageUrl === -1)
        {
            this.setState({showButtons: false})
        }
        else{
            this.setState({showButtons: true})
        }
    }

    changeImage(event){
        let fileSize = event.target.files[0].size
        
        let fileName = event.target.files[0].name
        if((fileName.endsWith("png") || fileName.endsWith("jpeg") || fileName.endsWith("jpg")) && fileSize < 1048576){
            this.setState({image: event.target.files[0]})            
            this.props.onChangeImage(event.target.files[0])
        }          
        else if(fileSize > 1048576 ) this.setState({fileError: "Image is too big"})
        else this.setState({fileError: "Bad format"})
    }
    clickDeleteButton(){
        
        this.setState({image:undefined, showButtons: false})
        this.props.onChangeImage(undefined)
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Book image</label>
                    {
                        this.state.showButtons ? (
                            <div>
                                <button className="btn btn-danger" onClick={this.clickDeleteButton}>Delete</button>
                            </div>
                        ) : (
                            <div className="input-group mb-3">
                                <div className="custom-file" >
                                    <input type="file" className="custom-file-input" style={{cursor: "pointer"}} onChange={this.changeImage} />
                                    {this.state.image ? (
                                        <label className="custom-file-label" >
                                            {this.state.image.name}
                                        </label> ) : (
                                        <label className="custom-file-label" >
                                            Choose file
                                        </label>
                                    )}                                           
                                </div>
                            </div>
                        )
                    }
                </div>
                {this.state.fileError && (
                <div className="alert alert-danger" role="alert">
                    {this.state.fileError}
                </div>)                                         
                }                 
            </div>
        );
    }
}

export default ImageUploader;