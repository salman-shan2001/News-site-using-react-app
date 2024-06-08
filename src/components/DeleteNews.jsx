import React from 'react'
import Navebar from './Navebar'

const DeleteNews = () => {
  return (
    <div>
      <Navebar/>
        <center><h1>Seach here</h1></center>
      <div className="container">
        <div className="row">
            <br></br><br></br>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">TITLE</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteNews
