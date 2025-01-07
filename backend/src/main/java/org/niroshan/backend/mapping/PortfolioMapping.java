package org.niroshan.backend.mapping;

import org.niroshan.backend.Model.Portfolio;
import org.niroshan.backend.dto.PotfolioDto;

public class PortfolioMapping {
    public static Portfolio maptoPortfolio(PotfolioDto potfolioDto){
        return  new Portfolio(
                potfolioDto.getId(),
                potfolioDto.getShortDescription(),
                potfolioDto.getDescription(),
                potfolioDto.getGithubLink(),
                potfolioDto.getImageUrls()
        );
    }
    public static PotfolioDto maptoPotfolioDto(Portfolio portfolio){
        return new PotfolioDto(
                portfolio.getId(),
                portfolio.getShortDescription(),
                portfolio.getDescription(),
                portfolio.getGithubLink(),
                portfolio.getImageUrls()

        );
    }
}
