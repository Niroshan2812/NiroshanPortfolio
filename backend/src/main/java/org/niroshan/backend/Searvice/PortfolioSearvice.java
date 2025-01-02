package org.niroshan.backend.Searvice;

import org.niroshan.backend.dto.PotfolioDto;

import java.util.List;

public interface PortfolioSearvice {
    PotfolioDto savePortfolio(PotfolioDto portfolio);
    List<PotfolioDto> getPortfolios();
    PotfolioDto getPortfolioById(Long id);
}
