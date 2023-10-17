import { Component, OnInit } from '@angular/core';

interface TableItem {
  id: number;
  company: string;
  contact: string;
  country: String;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  filterIcon = false;
  filterPanel = false;
  filterData: any = [] 
  uniqueValues = new Set();

  constructor() { }

  ngOnInit(): void {
  }

  columnList=['','','','','',]

  columnReference = [
    { 
      columnWidth: 'xs',
      columnHeader: 's.No.',
      filterIcon: false,
    },
    { 
      columnWidth: '',
      columnHeader: 'company',
      columnData: 'company',
      filterIcon: true,
    },
    { 
      columnWidth: '',
      columnHeader: 'contact',
      filterIcon: false,
    },
    { 
      columnWidth: '',
      columnHeader: 'country',
      filterIcon: true,
    },
  ]

  

  tableData : TableItem [] = [
    { id: 1, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 2, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 3, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
    { id: 4, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 5, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
    { id: 6, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 7, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 8, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
    { id: 9, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 10, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' }
  ];

  getColumnHeader(column: string): keyof TableItem {
    return column as keyof TableItem;
  }

   
  openFilterPanel(columnHeader: keyof TableItem): void {
    this.tableData.forEach(item => {
      console.log(typeof(columnHeader))
      // Extract the value of the specified columnHeader from each item
      const columnValue = item[columnHeader];
  
      // Add the extracted value to the uniqueValues Set
      this.uniqueValues.add(columnValue);
    });
    this.filterPanel = true;
    // this.filterOption = [...new Set(this.tableData.map(item => item[columnHeader]))];
    console.log(this.uniqueValues);
  }
}
