import React from 'react';


export const DefaultInput = ({ label, children }) => (
    <div className="form-group row">
        <label className="col-sm-2 col-form-label">{label}</label>
        <div className="col-sm-10">
            {children}
        </div>
    </div>
)