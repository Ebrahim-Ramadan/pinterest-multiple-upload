# pinterest-automatic-upload
using pinterest api v5 with 
-request sample-
```
curl --location --request GET 'https://api.pinterest.com/v5/boards' \
--header 'Authorization: Bearer <Add your token here>' \
--header 'Content-Type: application/json'
```
you could fetch the boards of your account, but only after validating the user cridentials by 
```
https://www.pinterest.com/oauth/?client_id=${you_App_id}&redirect_uri={YOUR_REDIRECT_URI}&response_type=code&scope=boards:read,pins:read&state={YOUR_OPTIONAL_STRING}
```
