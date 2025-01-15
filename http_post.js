import { check, sleep } from 'k6';
import http from 'k6/http';

export default function () {
  const url = 'https://reqres.in/api/users';
  const payload = JSON.stringify({
    name: 'morpheus',
    job: 'leader',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  check(res, { 'status was 201': (r) => r.status == 201});
  sleep(1);
}
