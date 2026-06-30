import { HttpInterceptorFn } from '@angular/common/http';

import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (

    req,

    next

) => {

    const startTime = Date.now();

    console.log(

        `🚀 ${req.method} ${req.url}`

    );

    return next(req).pipe(
        
        tap({

            next: (event) => {

                const duration =

                    Date.now() - startTime;

                console.log(

                    `✅ Completed in ${duration} ms`

                );

            },

            error: (error) => {

                const duration =

                    Date.now() - startTime;

                console.error(

                    `❌ Failed in ${duration} ms`,

                    error

                );

            }

        })

    );

};