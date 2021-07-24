#base linuximage
FROM alpine:latest

#install nodejs/node package manager  on that base image
RUN apk add --no-cache nodejs npm

#working directory of docker image
WORKDIR  /libMgtApp

#copy the project to the working directory
COPY . /libMgtApp

#install all dependancies of app from package.json
RUN npm install

#the localhost that the container is running ust expose the port number that has been mentioned in the app code
EXPOSE 8080

#after the image is created ,the image must be executable, ie, there has to be a container running that has a basic start commad to run the app
#Run is for installing packages on an image
#ENTRYPOINT is the first command to make the image run and be a container
#CMD is used to give parameter to the entrypoint, or to run a default command
ENTRYPOINT ["node"]

CMD ["index.js"]

