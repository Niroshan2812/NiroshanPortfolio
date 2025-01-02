package org.niroshan.backend.Searvice.Impl;

import lombok.AllArgsConstructor;
import org.niroshan.backend.Model.Portfolio;
import org.niroshan.backend.Searvice.PortfolioSearvice;
import org.niroshan.backend.dto.PotfolioDto;
import org.niroshan.backend.mapping.PortfolioMapping;
import org.niroshan.backend.repository.PortfolioRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PortfolioSearviceImpl implements PortfolioSearvice {

    private PortfolioRepository portfolioRepository;

    @Override
    public PotfolioDto savePortfolio(PotfolioDto portfoliodto) {
        Portfolio portfolioEntity = PortfolioMapping.maptoPortfolio(portfoliodto);
        Portfolio savedPortfolio = portfolioRepository.save(portfolioEntity);
        return PortfolioMapping.maptoPotfolioDto(savedPortfolio);
    }
}
