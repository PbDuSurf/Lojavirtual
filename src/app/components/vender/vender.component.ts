import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto/produto.service';
import { GeolocationService } from 'src/app/shared/services/geolocation/geolocation.service';
import { WeatherApiService, WeatherData } from 'src/app/shared/services/weather-api/weather-api.service';

@Component({
  selector: 'app-vender', 
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {
  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private geolocationService: GeolocationService,
    private weatherApiService: WeatherApiService) { }

  produto: Produto = {} as Produto;
  error = false;

  venderForm = this.fb.group({
    descricao: ['', [Validators.required, Validators.minLength(10)]],
    imagem: ['', [Validators.required]],  
    preco: ['', [Validators.required, Validators.min(40)]],
  })

  //#region Getters
 
  get descricao() {
    return this.venderForm.get('descricao');
  }
  get imagem() {
    return this.venderForm.get('imagem');
  }
  get preco() {
    return this.venderForm.get('preco');
  }
  get localizacao() {
    return this.venderForm.get('localizacao');
  }

  //#endregion

  onSubmit() {
    this.produto.descricao = this.produto.descricao.toUpperCase();
    this.produto.id = this.produtoService.getProdutos().length + 1;
    this.produtoService.pushProdutos(this.produto);
    alert(`Anúncio do produto ${this.produto} publicado!`);
  }

  ngOnInit(): void {
    this.geolocationService.getPosition().subscribe({
      next: (coords) => {
        //Cria um observable novo de clima com base nas coordenadas do serviço
        this.weatherApiService.getWeatherData(coords).subscribe({
          next: (localizacao) => {
            this.produto.localizacao = localizacao;
          }
        })
      },
      error: (erro) => {
        this.error = true;
      }
    });
  }

}
