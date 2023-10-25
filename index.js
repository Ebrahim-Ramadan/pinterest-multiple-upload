const PinterestAPI = require("pinterest-node-api");
const pinterest = new PinterestAPI({
  api_key: `${process.env.Pinterest_APP_ID}`,
  secret: "YOUR_API_SECRET"
});
pinterest.setUserToken(`${process.env.Pinterest_Access_Token}`);


const query = {
  bookmark: '25',
  page_size: 12,
  privacy: '',
};
const ListBoards = async () => {
  try {
    const response = await pinterest.boards.list({ query });
    if (response)  console.log(response);
  } catch (error) { 
    return;
  }
}
ListBoards()