import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { CompactVenue } from '../model/VenuesSearchResult';
import { SearchQuery } from '../model/SearchQuery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  searchQuery: SearchQuery;
  venue: CompactVenue[];
  constructor(private commonService: CommonService) { }

  ngOnInit() {

    this.searchQuery = new SearchQuery;
    this.searchQuery.near = "valletta";
    this.searchQuery.ll = "41.01,28.97";
    this.searchQuery.v = "20200315";
    this.getCategory();
  }

  getSelectedCategory(selectedCategory: string) {
    this.searchQuery.query = selectedCategory;
    this.getCategory();
  }

  getCategory() {

    this.commonService.getCategory(this.searchQuery).subscribe((resp: CompactVenue[]) => {
      this.venue = resp;
    }, err => {
      console.log("errr" + err);
    });
  }

}
