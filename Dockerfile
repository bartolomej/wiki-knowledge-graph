FROM node:12

# Create app directory
# sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
COPY yarn.lock ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY <src> <dest>
# <dest> is an absolute path or a path relative to WORKDIR !
COPY . .

EXPOSE 8000
CMD [ "node", "src/bin/www" ]
