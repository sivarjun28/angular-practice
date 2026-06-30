import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController
}

  from '@angular/common/http/testing';

import { Api } from './api';

describe('Api Service', () => {

  let service: Api;

  let httpMock: HttpTestingController;

  const URL = 'https://jsonplaceholder.typicode.com/users';

  beforeEach(() => {

    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],

      providers: [Api]

    });

    service = TestBed.inject(Api);

    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should fetch users successfully', () => {

    const mockUsers = [

      { id: 1, name: 'John' }

    ];

    service.getUsers().subscribe(

      res => {

        expect(res).toEqual(mockUsers);

      }

    );

    const req = httpMock.expectOne(URL);

    expect(req.request.method)

      .toBe('GET');

    req.flush(mockUsers);

  });

  it('should retry 2 times and return custom error', () => {

    let actualError: any;

    service.getUsers().subscribe({

      error: err => {

        actualError = err;

      }

    });

    for (let i = 0; i < 3; i++) {

      httpMock.expectOne(URL)

        .flush('error', {

          status: 500,

          statusText: 'Server Error'

        });

    }

    expect(actualError.message)

      .toBe('Unable to fetch users');

  });

});