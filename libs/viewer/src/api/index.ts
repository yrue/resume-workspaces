import json5 from 'json5';

export const fetchJSON5FileFromPublic = async (filename = 'resume.json5', abortControllerSignal: AbortSignal) => {
    // TODO: other approaches to call API
    try {
        const response = await fetch(`./${filename}`
        , {signal: abortControllerSignal}
        );
        
        // Check if the response status is not in the range 200-299
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseText = await response.text();
        return json5.parse(responseText);
    } catch (error) {
        if (error instanceof Error){
            if (error.name === 'AbortError') {
                // Aborting a fetch throws an error
                // So we can't update state afterwards
                console.error('Abort error:', error);
                return
            }
            console.error("Fetch Error:", error.message);
        }
        // Handle other request errors here
        console.error('Fetch error:', error);
    }
}