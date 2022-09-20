import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Member } from '../models/member.model';
import {first} from'rxjs';
import { environment } from 'src/environments/environment';

const members: Member[] = [];

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  
  private readonly baseUrlPath : string = `${environment.insuranceUri}`;
  
  constructor(private http: HttpClient) {}

  getAll(): Observable<Member[]> {
    return of(members);
  }

  async search(data: Partial<Member>): Promise<Member | undefined>  {
    //Construct URL
    var url = this.baseUrlPath+'api/member?policyId='+ data.policyNumber +'&memberCardNumber='+ data.memberCardNumber;
    
    let result = await this.http.get(url).pipe(first()).toPromise() as any;

    if(result.status =="Success"){
       members.push(result.data);
    }
    return result;
  }
}
