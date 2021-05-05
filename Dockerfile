# pull official base image
FROM node:14.16.1

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]