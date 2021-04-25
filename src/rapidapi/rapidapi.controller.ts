import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RapidapiService } from './rapidapi.service';

@ApiTags('rapidapi')
@Controller('rapidapi')
export class RapidapiController {

    constructor(private readonly rapidApiService: RapidapiService) {}
    
    @ApiOperation({
        summary: 'Get analysis for symbol',
        description: 'Provides analysis for the given symbol'
    })
    @ApiQuery({
        name: 'region',
        required: false,
        description: 'Default region is US'
    })
    @ApiOkResponse({
        description: 'Returns the analysis for the provided symbol'
    })
    @Get('analysis/:symbol')
    async getAnalysis(@Param('symbol') symbol: string, @Query('region') region: string = 'US') {
        return this.rapidApiService.getAnalysis(symbol, region);
    }

    @ApiOperation({
        summary: 'Get news for symbol',
        description: 'Provides news for the given symbol'
    })
    @ApiQuery({
        name: 'region',
        required: false,
        description: 'Default region is US'
    })
    @ApiOkResponse({
        description: 'Returns the news related to the provided symbol'
    })
    @Get('news/:symbol')
    getNews(@Param('symbol') symbol: string, @Query('region') region: string = 'US') {
        return this.rapidApiService.getNews(symbol, region);
    }
}
