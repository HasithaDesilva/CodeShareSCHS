import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-search-form',
  templateUrl: './member-search-form.component.html',
  styleUrls: ['./member-search-form.component.css'],
})
export class MemberSearchFormComponent {
  member = this.getResetObject();
  errorMsg : string ='';
  divStyle: string = '';
  constructor(private memberService: MemberService, private router: Router) {}

async searchMember() {
  const data = {
    policyNumber: this.member.policyNumber,
    memberCardNumber: this.member.memberCardNumber,
  };

  let result = await this.memberService.search(data) as any;
  
  if(result.status =="Success"){
    await this.router.navigate(['/results']);
  }
  else if (result.status =="Fail"){
    this.divStyle = 'd-block';
    this.errorMsg =result.errorMessage;
  }
}
  resetForm(): void {
    this.member = this.getResetObject();
    this.errorMsg  ='',
    this.divStyle  ='d-none'
  }

  private getResetObject() {
    return {
      date: moment().format('YYYY-MM-DD'),
      policyNumber: '',
      memberCardNumber: ''
    };
  }
}
