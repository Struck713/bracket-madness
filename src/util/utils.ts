import Axios from 'axios';

export async function get_data() {
    let json = await Axios.get("http://api.sportradar.us/ncaamb/trial/v7/en/tournaments/6b1b9057-68b6-4705-9642-0d5e5f2c9dd1/schedule.json?api_key=mwzy39myxukvn6cjzpceukkg");
    return json.data;
}