
const API = 'https://api.spacexdata.com/v5/launches';

const getData = async () => {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch Error..!!', error);
        return []; 
    }
};

export default getData;
