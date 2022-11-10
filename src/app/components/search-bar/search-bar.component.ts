import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() onChangeSearch: EventEmitter<any> = new EventEmitter();
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(e: any) {
    this.onChangeSearch.emit(e.target.value);
  }

  onSubmit() {
    this.onSearch.emit();
  }
}
