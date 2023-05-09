import { Component, OnDestroy, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto/produto.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit, OnDestroy {

  inputModelo = '';
  produto: Produto[] = [];



  constructor(private produtoService: ProdutoService) { }

  onLimpar(){
    this.produto = this.produtoService.getProdutos();
  }

  ngOnInit(): void {
    this.produto = this.produtoService.getProdutos();
  }

  ngOnDestroy(): void {
    this.produto = this.produtoService.getProdutos();
  }

}
