const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchOrders = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to load data')
    }

    return response.json();
}