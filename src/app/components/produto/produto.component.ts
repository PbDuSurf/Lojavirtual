import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  //Propriedade de entrada
  @Input('dadoProduto') produto!: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
