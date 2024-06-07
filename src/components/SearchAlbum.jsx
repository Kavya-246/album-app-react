import React from 'react'
import NavBar from './NavBar'

const SearchAlbum = () => {
  return (
    <div>
        
            <NavBar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" class="form-label">Album Name</label>
                        <input type="text" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchAlbum