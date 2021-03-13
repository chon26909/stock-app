import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumns = ['image','name','price','stock','action'];

  dataSource = new MatTableDataSource<Product>();

  textSearch: String | undefined;

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.feedData();
  }

  feedData() {
    const dummy: Product[] = [
      {
        name: "Eligendi qui exercitationem quidem. Id deserunt cumque. Non earum odio error dolores.",
        stock: 11244,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "mewdewdewdewd",
        stock: 2222,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "dededddddddddddddook",
        stock: 344,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "madw hmu,u,uok",
        stock: 4222,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "mac book",
        stock: 5444,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "Eligendi qui exercitationem quidem. Id deserunt cumque. Non earum odio error dolores.",
        stock: 11244,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "mac book",
        stock: 344,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "mac book",
        stock: 4222,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      },
      {
        name: "mac book",
        stock: 5444,
        price: 20000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gatto_europeo4.jpg/1200px-Gatto_europeo4.jpg"
      }
    ]

    this.dataSource.data = dummy
  }

  search(event: Event) {
    let filterValue = "";
    if(event) {
      filterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = "";
    // this.search(null)
  }

}
