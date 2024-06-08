import React, { useState } from 'react'
import Navebar from './Navebar'

const Addpic = () => {
  const [data, setData] = useState(
    {
      "title":"",
      "description":"",
      "image":""
    }
  )

const inputHandler=(event)=>{
  setData({...data,[event.target.name]: event.target.value})
}

const readValue=()=>{
  console.log(data)
}

  return (
    <div>
      <Navebar />

      <div className="container">
        <div className="row">
          <center><h1>Add News here</h1></center>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label" >News-title</label>
                <input type="text" className="form-control" name="title" value={data.title} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">News-desctoption</label>
                <textarea  id="" className="form-control" name="description" value={data.description} onChange={inputHandler}></textarea>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">News-image</label>
                <input type="file"  id="" className="form-control" name="mage" value={data.image} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValue}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addpic
