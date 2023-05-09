import { Injectable } from '@angular/core';
import { Produto, } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produto: Produto[] = [
    {
      id: 1,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/r/z/rz03-03940400-r3u1512223.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/z/rz03-03940400-r3u1512221.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/r/z/rz03-03940400-r3u151222.jpg',
      descricao: '-> TECLACO OPTICO RAZER HUNTSMAN V2 TENKEYLESS, CHROMA, SWITCH RAZER PURPLE, PRETO, RZ03-03940400-R3U1',
      marca:'RAZER',
      preco: 1199,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },
    {
      id: 2,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/o/p/optix-mag274r2.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/o/p/optix-mag274r23.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/o/p/optix-mag274r21.jpg',
      descricao: '->MONITOR GAMER MSI OPTIX MAG274R2, 27POL. IPS, FHD, 1MS, 165HZ, G-SYNC, HDMI/DP, OPTIX MAG274R2',
      marca:'MSI',
      preco: 1899,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },
    {
      id: 3,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/o/1/o11dmini-rd-w-white2.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/o/1/o11dmini-rd-w-white1.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/o/1/o11dmini-rd-w-white.jpg',
      descricao: '->GABINETE GAMER LIAN LI O11 DYNAMIC MINI REDRAGON EDITION, LATERAL DE VIDRO, BRANCO, O11DMINI-RD-W WHITET',
      marca:'REDRAGON',
      preco: 769,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },
    {
      id: 4,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/9/8/981-0009564.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/8/981-0009563.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/9/8/981-000956.jpg',
      descricao: '->HEADSET GAMER LOGITECH G PRO X SHROUD WIRELESS, DRIVERS 50MM, PRETO, 981-000956',
      marca:'LOGITECH',
      preco: 899.90,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },
    {
      id: 5,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/c/mcr-leam2-rgb011.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-leam2-rgb013.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/c/mcr-leam2-rgb016.jpg',
      descricao: '->MOUSE GAMER MANCER LEAD 2, RGB, 12400DPI, 7 BOTOES, PRETO, MCR-LEAM2-RGB01',
      marca:'MANCER',
      preco: 99.90,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'São Paulo'
      },
    },
    {
      id: 6,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/b/x/bx80715124002.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx80715124001.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071512400.jpg',
      descricao: '->PROCESSADOR INTEL CORE I5-12400, 6-CORE, 12-THREADS, 2.5GHZ (4.4GHZ TURBO), CACHE 18MB, LGA1700, BX8071512400',
      marca:'DELL',
      preco: 1299,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'São Paulo'
      },
    },
    {
      id: 7,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/0/100-100000263box2123.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000263box2123.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000263box21231.jpg',
      descricao: '->PROCESSADOR AMD RYZEN 7 5700G, 8-CORE, 16-THREADS, 3.8GHZ (4.6GHZ TURBO), CACHE 20MB, AM4, 100-100000263BOX',
      marca:'AMD',
      preco: 1198,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'São Paulo'
      },
    },
    {
      id: 8,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/z/t/zt-d40810j-10p1.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/z/t/zt-d40810j-10p.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/z/t/zt-d40810j-10p5.jpg',
      descricao: '->PLACA DE VIDEO ZOTAC GEFORCE RTX 4080 GAMING TRINITY OC, 16GB, GDDR6X, 256-BITS, ZT-D40810J-10P',
      marca:'NVIDIA',
      preco: 8459.90,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },
    {
      id: 9,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/g/d/gd-3023.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/d/gd-3022.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/g/d/gd-3021.jpg',
      descricao: '->SSD REDRAGON HASTE, 240GB, 2.5, SATA III 6GB/S, LEITURA 550MB/S, GRAVAÇÃO 420MB/S, GD-302',
      marca:'REDRAGON',
      preco: 125.90,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },
    {
      id: 10,
      imagem:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/c/pch-dnrb550m-px.jpg',
      imagem2:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/c/pch-dnrb550m-px4.jpg',
      imagem3:'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/c/pch-dnrb550m-px1.jpg',
      descricao: '->PLACA MAE PICHAU DANURI B550M-PX, DDR4, SOCKET AM4, M-ATX, CHIPSET AMD B550, PCH-DNRB550M-PX',
      marca:'AMD',
      preco: 649.99,
      localizacao: {
        sys: {
          country: 'BR'
        },
        name: 'Belo Horizonte'
      },
    },

    
  ];

  pushProdutos(produto: Produto) {
    this.produto.push(produto);
  }

  getProdutos(): Produto[] {
    return this.produto;
  }

  getProduto(id: number) {
    return this.produto[id - 1];
  }

  constructor() { }
}
