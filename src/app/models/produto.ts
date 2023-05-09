import { WeatherData } from "../shared/services/weather-api/weather-api.service";

export interface Produto {
    id: number;
    imagem: string;
    imagem2:string;
    imagem3:string;
    marca:string;
    descricao: string;
    preco: number
    localizacao: WeatherData;
}
export enum MarcaProduto{
    DELL ='Dell',
    HP = 'hp',
    SANDISK ='Sandisk',
    REDRAGON= 'redragon',
    REZER = 'razer',
    MICROSOFT='microsoft',
    AMD='amd',
    SAMSUNG = 'samsung',
    LOGITECH = 'logitech',
    NVIDIA ='nvidia',
    MULTILAZER= 'multilazer',
    MSI = 'msi',
    MANCER = 'mancer'
}