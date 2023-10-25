require('dotenv').config(); // for .env nodejs server-side apps


async function sendUserOAuth() {
  try {
    const res = await fetch(`https://www.pinterest.com/oauth/?client_id=${process.env.Pinterest_APP_ID}&redirect_uri={YOUR_REDIRECT_URI}&response_type=code&scope=boards:read,pins:read&state={YOUR_OPTIONAL_STRING}`,)

    if (res) {
      console.log('res', res);
      // const result = await res.json();
      // console.log("sendUserOAuth:", result);
    }
  } catch (error) {
    console.log('sendUserOAuth',error);
  }
}


async function ListBoards() {
  try {

//     curl --location --request GET 'https://api.pinterest.com/v5/boards' \
// --header 'Authorization: Bearer <Add your token here>' \
//     --header 'Content-Type: application/json'
    
    const response = await fetch("https://api.pinterest.com/v5/boards", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.Pinterest_Access_Token}`,
        "Content-Type": "application/json",
      }
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
sendUserOAuth()