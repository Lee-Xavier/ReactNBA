/**
 * The services used to make AJAX requests to fetch data from a remote API
 */

// The remote API for fetching the NBA players' data
const apiHost = 'https://nba-players.herokuapp.com';

export default {

    /**
     * Returns the data for a particular player
     * @param {string} fName - First name of the player
     * @param {string} lName - Last name of the player
     */
    async fetchStatDetail(fName, lName) {
        try {
            const response = await fetch(apiHost + '/players-stats/' + lName + '/' + fName);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
    /**
     * Returns the image for a particular player
     * @param {string} fName - First name of the player
     * @param {string} lName - Last name of the player
     */
    async fetchStatDetailImage(fName, lName) {
        try {
            const response = await fetch(apiHost + '/players/' + lName + '/' + fName);
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    /**
     * Returns the data for all the players
     */
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
