import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RapidapiService {
    private readonly rapidApiKey: string;
    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {
        this.rapidApiKey = configService.get<string>('RAPIDAPI_KEY');
    }

    async getAnalysis(symbol: string, region: string) {
        let response;
        try {
            response  = await this.httpService.get(
                'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
                {
                    headers: {
                        'x-rapidapi-key': this.rapidApiKey,
                        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
                        'useQueryString': true
                    },
                    params: {
                        symbol,
                        region
                    }
                }).toPromise();
        } catch (error) {
            response = {
                data: 'Error while getting analysis'
            }
            console.error(error);
        }
        return response.data;
    }

    async getNews(symbol: string, region: string) {
        let response;
        try {
            response  = await this.httpService.get(
                'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
                {
                    headers: {
                        'x-rapidapi-key': this.rapidApiKey,
                        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
                        'useQueryString': true
                    },
                    params: {
                        q: symbol,
                        region
                    }
                }).toPromise();
        } catch (error) {
            response = {
                data: 'Error'
            }
            console.error(error);
        }
        return response.data.news;
    }
}
