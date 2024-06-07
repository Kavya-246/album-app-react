import React from 'react'
import NavBar from './NavBar'

const AddAlbum = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Album Name</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" class="form-label">category</label>
                            <select name="" id="" className="form-control">
                                <option value="college">college</option>
                                <option value="travel">travel</option>
                                <option value="world">world</option>
                                
                            </select></div>
                        </div>
                        
                            <br></br>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary">Add Album</button>
                        </div>
                       
                </div>
            </div>
         </div>               
    </div>
  )
}

export default AddAlbum