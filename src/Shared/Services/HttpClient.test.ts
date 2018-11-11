import axios from 'axios';

import HttpClient from './HttpClient';

function setup() {
  const service = new HttpClient();

  return {
    service,
  };
}

describe('HttpClient service', () => {
  it('should call get request with passed url in get method', () => {
    const { service } = setup();
    const url = 'http://mock.com';
    spyOn(axios, 'get').and.callFake(() => {});

    service.get(url);

    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it('should call put request with passed url in put method', () => {
    const { service } = setup();
    const url = 'http://mock.com';
    const payload = 'fake';
    spyOn(axios, 'put').and.callFake(() => {});

    service.put(url, payload);

    expect(axios.put).toHaveBeenCalledWith(url, payload);
  });

  it('should call post request with passed url in post method', () => {
    const { service } = setup();
    const url = 'http://mock.com';
    const payload = 'fake';
    spyOn(axios, 'post').and.callFake(() => {});

    service.post(url, payload);

    expect(axios.post).toHaveBeenCalledWith(url, payload);
  });

  it('should call delete request with passed url in delete method', () => {
    const { service } = setup();
    const url = 'http://mock.com';
    spyOn(axios, 'delete').and.callFake(() => {});

    service.delete(url);

    expect(axios.delete).toHaveBeenCalledWith(url);
  });
});
