package org.niroshan.backend.Searvice;

import org.niroshan.backend.dto.PotfolioDto;

import java.util.List;

public interface PortfolioSearvice {
    PotfolioDto savePortfolio(PotfolioDto portfolio);
    List<PotfolioDto> getPortfolios();
    PotfolioDto getPortfolioById(String id);
    PotfolioDto updatePortfolio(String id, PotfolioDto portfolioDto);
    void deletePortfolio(String id);
}
