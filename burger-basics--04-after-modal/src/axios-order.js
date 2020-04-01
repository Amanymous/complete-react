import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-burger-app-7dc68.firebaseio.com/'
})
export default instance;