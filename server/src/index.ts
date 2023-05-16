import http from 'http';

export const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'application/json'});
//   console.log('Hello');
  for (let i = 0; i < 10; i++) {
    // console.log(i);
  }
  res.end(
    JSON.stringify({
      data: 'It works!!',
    }),
  );
});

server.listen(5000, () => console.log('Server running on port 5000'));
