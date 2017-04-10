export default function fetcher(options) {
    const { method, path, body } = options;
    return fetch(`http://localhost:4000${path}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then(res => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res;
    })
    .then(res => res.json());
}
