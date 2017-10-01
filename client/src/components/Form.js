import React from "react";

const Form = ({
        handleInput, 
        handleSubmit, 
        searchTermVal, 
        numResultsVal, 
        startYearVal, 
        endYearVal
    }) => 
    <form>

        <div className="form-group">
            <label>Search Term*</label>
            <input type="text" className="form-control" onChange={handleInput} name="searchTerm"  value={searchTermVal}/>
        </div>

        <div className="form-group">
            <label>Number of Records to Retrieve*</label>
            <small style={{display: "block"}}>Max. of 10</small>
            <input name="numResults" min="0" max="10" className="form-control" type="number" onChange={handleInput} value={numResultsVal}/>
        </div>

        <div className="form-group">
            <label>Start Year (Optional)</label>
            <input type="number" className="form-control" onChange={handleInput} name="startYear" value={startYearVal}/>
        </div>

        <div className="form-group">
            <label>End Year (Optional)</label>
            <input type="number" className="form-control" onChange={handleInput} name="endYear" value={endYearVal}/>
        </div>

        <button type="submit" className="btn btn-default" onClick={handleSubmit} id="run-search"><i className="fa fa-search"></i> Search</button>

    </form>;

export default Form;