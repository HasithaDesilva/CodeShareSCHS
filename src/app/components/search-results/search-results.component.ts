import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  members?: Member[];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults(): void {
    this.memberService.getAll().subscribe({
      next: (data) => {
        this.members = data;
      },
      error: (e) => console.error(e),
    });
  }
}
