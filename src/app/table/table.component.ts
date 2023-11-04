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
  showFilterList = false;
  inputValue= '';
  columnName: any
  filterData: any = [] 
  uniqueValues: Set<string> = new Set<string>();
  uniqueValuesOnSearch: any = []

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
    { id: 1, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Grmany' },
    { id: 2, company: 'Alfreds Futterkite', contact: 'Maria Anders', country: 'Gemany' },
    { id: 3, company: 'Centro comeckhasubv usi vtvh abug sygavg b ufgiueg uhwigu ial Moctezuma', contact: 'Francisco Chang', country: 'Mxico' },
    { id: 4, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Gerany' },
    { id: 5, company: 'Centro comercial Mctezuma', contact: 'Francisco Chang', country: 'Mexio' },
    { id: 6, company: 'Alfreds utterkiste', contact: 'Maria Anders', country: 'Germay' },
    { id: 7, company: 'Alfrds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 8, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Meico' },
    { id: 9, company: 'Alfreds Futterkste', contact: 'Maria Anders', country: 'German' },
    { id: 1, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'ermany' },
    { id: 2, company: 'Alfred Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 3, company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'exico' },
    { id: 4, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 5, company: 'Centro comerial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
    { id: 6, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 7, company: 'Alfreds Ftterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 8, company: 'Centro comecial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
    { id: 9, company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
    { id: 10, company: 'Centro comercial octezuma', contact: 'Francisco Chang', country: 'Mexico' }
  ];

  getColumnHeader(column: string): keyof TableItem {
    return column as keyof TableItem;
  }

   
  openFilterPanel(columnHeader: keyof TableItem): void {
    this.columnName = columnHeader
    this.tableData.forEach(item => {
      console.log(typeof(columnHeader))
      // Extract the value of the specified columnHeader from each item
      const columnValue = item[columnHeader];
  
      // Add the extracted value to the uniqueValues Set
      this.uniqueValues.add(columnValue.toString());
    });
    this.filterPanel = true;
    // this.filterOption = [...new Set(this.tableData.map(item => item[columnHeader]))];
    console.log(this.uniqueValues);
  }

  closeFilter(){
    this.filterPanel = false;
    this.showFilterList = false;
    this.inputValue = '';
    this.uniqueValues.clear();
    this.uniqueValuesOnSearch = [];
  }

  applyFilter(){
    this.changeTableDataOnFilter(this.inputValue)
    this.filterPanel = false;
    this.showFilterList = false;
    this.inputValue = '';
    this.uniqueValues.clear();
    this.uniqueValuesOnSearch = [];
  }

  changeTableDataOnFilter(value: any): void{
    this.tableData.forEach(data => {
        // if(data[columnName] !== value){

        // }
    })
  }

  filterList(){
    this.showFilterList = true;
    this.uniqueValuesOnSearch = [...this.uniqueValues]
  }

  filterListOnKeyPress(event: KeyboardEvent): void{
    const inputElement = event.target as HTMLInputElement;
    const value: string = inputElement.value;
    this.uniqueValuesOnSearch = [...this.uniqueValues].filter(item => item.toLowerCase().includes(value.toLowerCase()))
  }

  setFilterInput(event: Event): void{
    const clickedItemText = (event.target as HTMLElement).innerText;
    if (clickedItemText) {
      this.inputValue = clickedItemText;
    }
    this.showFilterList = false
  }

}
