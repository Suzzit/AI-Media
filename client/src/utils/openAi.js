import axios from 'axios'

const openAIFetcher = (finalUserPrompt) => {
    return axios.post('http://localhost:8080/api/v1/dalle', {
        prompt: finalUserPrompt.prompt,
        n: finalUserPrompt.n,
        size: finalUserPrompt.size
    })
}

export { openAIFetcher }