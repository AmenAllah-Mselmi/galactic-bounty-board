import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ClearanceGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request=context.switchToHttp().getRequest();
    const clearanceLevel=request.headers['x-clearance-level'];
    if(clearanceLevel==='top-secret'){
        return true;
    }
    return false;
  }
}
