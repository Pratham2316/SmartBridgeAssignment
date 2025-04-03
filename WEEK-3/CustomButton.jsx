import { useState } from "react";
// 4. Button Component
function CustomButton() {
    return (
        <button 
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
            onClick={() => console.log("Button clicked!")}
        >
            Click Me
        </button>
    );
}
