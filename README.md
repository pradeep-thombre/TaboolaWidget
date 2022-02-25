# TaboolaWidget

This application is created to fetch News Feeds from Taboola API. Feature to redirect to that particular Block.
This app is also hosted thought github on https://pradeep-thombre.github.io/TaboolaWidget/


## Task

Using the JSON response from the below Recommendations API request, create a responsive Taboola widget with the following requirements.

API Request:

```bash
  https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&amp;placement.organic-type=mix&amp;placement.visible=true&amp;placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init
```

## Requirements:

- For desktop and tablet, the widget should be three columns and two rows (3x2). The item thumbnail image aspect ratio should be 6:5. Include the item title and branding below each image. Add a header to the top of the widget with your choice of text.
- For smartphones, the widget should be one column with six rows (1x6). The item thumbnail image aspect ratio should be 3:2. Include the item title and branding below each image. Add a header to the top of the widget with your choice of text.
- For each item in the widget, the thumbnail image, item title, and branding text should be clickable links that load the url of that item (use the url value provided in the response).

IMPORTANT: You can only use pure HTML, CSS, and JavaScript to build and display the widget. Do not use any external libraries (e.g. jQuery, Bootstrap).



## Run Locally

Clone the project

```bash
  git clone https://github.com/pradeep-thombre/TaboolaWidget.git
```

Go to the project directory

```bash
  cd TaboolaWidget
```

Open Index.html in chrome or any other browser with live server.



## Authors

- [@pradeepthombre](https://github.com/pradeep-thombre)


## Support

For support, email pradeepbthombre@gmail.com or connect me on linkedin on [@pradeepthombre](https://www.linkedin.com/in/pradeep-thombre/)