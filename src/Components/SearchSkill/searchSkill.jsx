import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/styles/Common.css"

const Search = props => {
    return(
        <div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">search</span>
                </div>
                <input 
                    type="text" 
                    class="cus-height form-control" 
                    placeholder="Username" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1"
                />
            </div>
        </div>
    )
};

export default Search;