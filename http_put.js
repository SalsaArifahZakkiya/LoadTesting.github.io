import { check, sleep } from 'k6';
import http from 'k6/http';

const url = 'https://reqres.in/api/users/2';

export default function () {
  const headers = { 'Content-Type': 'application/json' };
  const data = { name: 'morpheus', job: 'zion resident' };

  const res = http.put(url, JSON.stringify(data), { headers: headers });
  check(res, { 'status was 200': (r) => r.status == 200});
  sleep(1);
  console.log(JSON.parse(res.body).name + " - " + JSON.parse(res.body).job);
}
