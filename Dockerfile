# Base image
FROM nginx

# Copy the HTML file to the nginx HTML directory
COPY index.html /usr/share/nginx/html
COPY frontend.js /usr/share/nginx/html/

# Expose port 80 (default port for HTTP traffic)
EXPOSE 80
