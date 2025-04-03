import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
    const [text, setText] = useState("");
    return (
        <div className="p-4">
            <input 
                type="text" 
                className="border p-2" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <p className="mt-2">{text}</p>
        </div>
    );
}
