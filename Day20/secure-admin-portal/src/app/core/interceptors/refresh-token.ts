import { HttpInterceptorFn } from '@angular/common/http';

import { inject } from '@angular/core';

import { Auth } from '../../services/auth';

import {

    catchError,

    switchMap,

    throwError,

    of

} from 'rxjs';

export const refreshTokenInterceptor:

    HttpInterceptorFn = (

        req,

        next

    ) => {

        const authService = inject(Auth);

        return next(req).pipe(

            catchError((error) => {

                if (error.status === 401) {

                    console.log(

                        'Refreshing token...'

                    );

                    localStorage.setItem(

                        'authToken',

                        'new-fake-token'

                    );

                    const newToken =

                        authService.getToken();

                    const clonedRequest =

                        req.clone({

                            setHeaders: {

                                Authorization:

                                    `Bearer ${newToken}`

                            }

                        });

                    return next(clonedRequest);

                }

                return throwError(

                    () => error

                );

            })

        );

    };