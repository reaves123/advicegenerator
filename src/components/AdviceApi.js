export const AdviceApi = () => {

    const endpoint = "https://api.adviceslip.com/advice"

    return fetch(endpoint)
        .then(data => data.json())
}
