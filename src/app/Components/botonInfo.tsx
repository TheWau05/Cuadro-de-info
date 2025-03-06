import React, { useState } from "react";

interface botonVal {
    label: string;
    value: string;
}

const BotonInfo: React.FC<botonVal> = ({ label, value }) => {
    const [show, setShow] = useState(false);

    return (
        <button 
            className="button w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {label}
            {show && <span className="tooltip">{value}</span>}
        </button>
    );
};

export default BotonInfo;
