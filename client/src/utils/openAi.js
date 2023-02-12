import axios from 'axios'

const openAIFetcher = (finalUserPrompt) => {
    return axios.post('http://localhost:8000/imagedata', {
        prompt: finalUserPrompt.prompt,
        n: finalUserPrompt.n,
        size: finalUserPrompt.size
    })
}

export { openAIFetcher }