    //___             _                  _  _    _                               
   /// _ \  ___    __| | ___  _ __ ___  (_)| |_ | |__                                  
  /// /_\/ / _ \  / _` |/ __|| '_ ` _ \ | || __|| '_ \                                       
 /// /_\\ | (_) || (_| |\__ \| | | | | || || |_ | | | |                                      
 //\____/  \___/  \__,_||___/|_| |_| |_||_| \__||_| |_|                                      
                         

const express = require('express');
const redis = require('redis');


const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseFloat(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');

})
