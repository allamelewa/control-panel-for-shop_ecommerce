import React, { Component } from 'react'
import './add.css';
 
class Add extends Component {
    
    fileInput = React.createRef();
    state = {
        id:null,
        title:null,
        company:null,
        price:null,
        info:null,
        img:null,
    }
    
    handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.id!==null&&this.state.title!==null&&this.state.company!==null&&this.state.price!==null&&this.state.info!==null&&this.state.img!==null){
            alert('Send Form Success....')
        }else{
            alert('Sending faild')
        }
    }
    changeId=(event)=>{
      this.setState({id:event.target.value})
    }
    changeTitle=(event)=>{
        this.setState({title:event.target.value});

    }
    changePrice=(event)=>{
        this.setState({price:event.target.value});
        
    }
    changeInfo=(event)=>{
        this.setState({info:event.target.value});
    }
    changeImg=(event)=>{
        this.setState({img:event.target.value});
      alert(
            `Selected file - ${this.fileInput.current.files[0].name}`
          );
        
    }
    changeCompany=(event)=>{
        this.setState({company:event.target.value});
        
    }
    render() { 
        return ( 
            <div className='main'>
               <form onSubmit={this.handleSubmit}>
                   <div className='row'>
                       <div className='col-sm-12 col-md-6 filed'>
                            <label className='mr-3 col-4 col-md-4 col-xl-2 font-weight-bold'>ID</label>
                            <input  className='form-control' value={this.state.value} onChange={this.changeId}></input>
                       </div>
                       <div className='col-sm-12  col-md-6 filed'>
                            <label className='mr-3 col-4 col-md-4 col-xl-2 font-weight-bold'>Title</label>
                            <input className='form-control' value={this.state.title} onChange={this.changeTitle}></input>
                       </div>
                       <div className='col-sm-12  col-md-6 filed'>
                            <label className='mr-3 col-4 col-md-4 col-xl-2 font-weight-bold'>Company</label>
                            <input className='form-control' value={this.state.company} onChange={this.changeCompany}></input>
                       </div>
                       <div className='col-sm-12  col-md-6 filed'>
                            <label className='mr-3 col-4 col-md-4 col-xl-2 font-weight-bold'>Price</label>
                            <input  type='number' className='form-control' value={this.state.price} onChange={this.changePrice}></input>
                       </div>
                       <div className='col-sm-12  col-md-6 filed'>
                            <label className='mr-3 col-4 col-md-4 col-xl-2 font-weight-bold'>Image</label>
                            <input  type='file' className='form-control-file' value={this.state.img} onChange={this.changeImg} ref={this.fileInput}></input>
                       </div>
                       <div className='col-sm-12   filed'>
                            <label className='mr-3 col-4 col-md-2 col-xl-1 font-weight-bold'>Information</label>
                            <textarea  type='text' className='form-control' rows="3" value={this.state.info} onChange={this.changeInfo}/>
                       </div>

                   </div>
                   <div className='btn-sub'>
                       <input type='submit' className='btn btn-primary submit' value='Send' />

                   </div>
               </form>
            </div>
         );
    }
}
 
export default Add;