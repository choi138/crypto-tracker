const BASE_URL = "https://api.coinpaprika.com/v1"

export interface IGetCoinData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
export interface IGetCoinInfo {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    links: object;
    links_extended: object;
    whitepaper: object;
    first_data_at: string;
    last_data_at: string;
}


export interface IGetCoinTickers {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        }
    };
}

export interface IHistoryData {
    time_open: number
    time_close: number
    open: string
    high: string
    low: string
    close: string
    volume: string
    market_cap: number
}

export function getCoins() {
    return fetch(`${BASE_URL}/coins`)
        .then(res => res.json())
}

export function getCoinInfo(coinId:string){
    return fetch(`${BASE_URL}/coins/${coinId}`)
    .then(res => res.json())
}

export function getCoinTickers(coinId:string){
    return fetch(`${BASE_URL}/tickers/${coinId}`)
    .then(res => res.json())
}

export function getCoinHistory(coinId:string){
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
    .then(res => res.json())
}