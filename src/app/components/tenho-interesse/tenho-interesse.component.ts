import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto} from 'src/app/models/produto';
import { ProdutoService} from 'src/app/shared/services/produto/produto.service';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-tenho-interesse',
  templateUrl: './tenho-interesse.component.html',
  styleUrls: ['./tenho-interesse.component.css']
})
export class TenhoInteresseComponent implements OnInit {


  produto:Produto = {} as Produto;
  id?: number;
  private inscricao: any;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {

      this.id = +params['id'];
      this.produto= this.produtoService.getProduto(this.id);
    })
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

}
