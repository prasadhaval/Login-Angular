import { HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  const newCloneReq = req.clone({
    setHeaders : {
      auth : `baarer`
    }
  })
  return next(req);
};




