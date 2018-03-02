const apiHost = 'https://nba-players.herokuapp.com';

export default {
    async fetchStatDetail(fName, lName) {
        try {
            const response = await fetch(apiHost + '/players-stats/' + lName + '/' + fName);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchStatDetailImage(fName, lName) {
        try {
            const response = await fetch(apiHost + '/players/' + lName + '/' + fName);
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchInitialStats() {
        try {
            const response = await fetch(apiHost + '/players-stats');
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
};
