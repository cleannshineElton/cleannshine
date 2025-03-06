FROM nginx:alpine

# Copy the HTML file
COPY index.html /usr/share/nginx/html/index.html

# Copy the CSS file
COPY cleannshine.css /usr/share/nginx/html/cleannshine.css

# Copy the JavaScript file
COPY script.js /usr/share/nginx/html/script.js

# Copy the images
COPY cleannshine.jpg /usr/share/nginx/html/cleannshine.jpg
COPY 4863266-hd_1920_1080_30fps.mp4 /usr/share/nginx/html/4863266-hd_1920_1080_30fps.mp4
# Expose port 80
EXPOSE 80
