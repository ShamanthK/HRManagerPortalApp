import React, {Component} from 'react';
import {storage} from '.../../firebase';

class DocUpload extends Component

  {

      constructor(props){
        super(props);
        this.state = {

          doc: null,
          url: '',
          progress: 0
        }

        this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);

      }

      handleChange = e => {
    if (e.target.files[0]) {
      const doc = e.target.files[0];
      this.setState(() => ({doc}));
    }
  }

  handleUpload = () => {
     const {doc} = this.state;
     const uploadTask = storage().ref(`documents/${doc.name}`).put(doc);
     uploadTask.on('state_changed',
     (snapshot) => {
       // progrss function ....
       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
       this.setState({progress});
     },
     (error) => {
          // error function ....
       console.log(error);
     },
   () => {
       // complete function ....
       storage.ref('documents').child(doc.name).getDownloadURL().then(url => {
           console.log(url);
           this.setState({url});
       })
   });
 }

 render() {

  return (
    <div>
    <progress value={this.state.progress} max="100"/>
    <br/>
      <input type="file" onChange={this.handleChange}/>
      <button onClick={this.handleUpload}>Upload</button>
      <br/>
    
    </div>
    )
  }
}

export default DocUpload;
