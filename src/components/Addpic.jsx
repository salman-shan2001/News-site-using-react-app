import React from 'react'
import Navebar from './Navebar'

const Addpic = () => {
  return (
    <div>
      <Navebar/>
      
      <div className="container">
        <div className="row">
        <center><h1>Add News here</h1></center>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">News-title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">News-desctoption</label>
              <textarea name="" id="" className="form-control"></textarea>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">News-image</label>
              <input type="file" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addpic
