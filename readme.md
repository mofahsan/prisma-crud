Docker toolbox 


to build the image use
docker build . ("." will point to docker file at current path)

after the docker build finishes use
docker run imagename

but this will not expose the port by default use
docker run -p 3000:3000 imagename 

but if we are using docker toolbox we won't be able to access localhost:3000 we will have to use ip from docker quickstart of docker instance
example:- http://192.168.99.100:3000/  (here ip is of docker instance )