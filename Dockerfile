#    ___             _                  _  _    _                               
#   / _ \  ___    __| | ___  _ __ ___  (_)| |_ | |__                                  
#  / /_\/ / _ \  / _` |/ __|| '_ ` _ \ | || __|| '_ \                                       
# / /_\\ | (_) || (_| |\__ \| | | | | || || |_ | | | |                                      
# \____/  \___/  \__,_||___/|_| |_| |_||_| \__||_| |_|                                      
#                         

FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]